<?php
/**
 * Class description
 *
 * @package   package_name
 * @author    Cherry Team
 * @license   GPL-2.0+
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Jet_Engine_Frontend' ) ) {

	/**
	 * Define Jet_Engine_Frontend class
	 */
	class Jet_Engine_Frontend {

		protected $listing_id = null;
		protected $processed_listing_id = null;
		protected $did_scripts = false;

		/**
		 * Constructor for the class
		 */
		public function __construct() {
			$this->register_listing_styles();
			add_action( 'wp_enqueue_scripts', array( $this, 'register_listing_deps'), 9 );
		}

		public function register_listing_deps() {
			
			wp_register_script(
				'jquery-slick',
				jet_engine()->plugin_url( 'assets/lib/slick/slick.min.js' ),
				array( 'jquery' ),
				'1.8.1',
				true
			);

			wp_register_script(
				'jet-plugins',
				jet_engine()->plugin_url( 'assets/lib/jet-plugins/jet-plugins.js' ),
				array( 'jquery' ),
				'1.1.0',
				true
			);

		}

		/**
		 * Register listing assets
		 *
		 * @return void
		 */
		public function register_listing_styles() {

			wp_register_style(
				'jet-engine-frontend',
				jet_engine()->plugin_url( 'assets/css/frontend.css' ),
				array(),
				jet_engine()->get_version()
			);

		}

		/**
		 * Enqueue front-end scripts
		 *
		 * @return void
		 */
		public function frontend_scripts() {

			if ( $this->did_scripts ) {
				return;
			}

			$this->did_scripts = true;

			wp_enqueue_script(
				'jet-engine-frontend',
				jet_engine()->plugin_url( 'assets/js/frontend.js' ),
				array( 'jquery', 'jet-plugins' ),
				jet_engine()->get_version(),
				true
			);

			do_action( 'jet-engine/listings/frontend-scripts' );

			$hover_action_timeout = apply_filters( 'jet-engine/map-popup/timeout', 400 ); // deprecated
			$hover_action_timeout = apply_filters( 'jet-engine/listings/custom-url-actions/hover-timeout', $hover_action_timeout );

			$localize_data = apply_filters( 'jet-engine/listing/frontend/js-settings', array(
				'ajaxurl'     => esc_url( admin_url( 'admin-ajax.php' ) ),
				'ajaxlisting' => $this->get_ajax_listing_url(),
				'restNonce'   => wp_create_nonce( 'wp_rest' ),
				'hoverActionTimeout' => $hover_action_timeout,
			) );

			wp_localize_script( 'jet-engine-frontend', 'JetEngineSettings', $localize_data );

		}

		/**
		 * Get AJAX listing URL
		  *
		 * @return string
		 */
		public function get_ajax_listing_url( $action = null ) {

			global $wp;

			$query = '';

			if ( ! empty( $_SERVER['QUERY_STRING'] ) ) {
				$query .= '?' . $_SERVER['QUERY_STRING'];
			}

			$query_args = array( 'nocache' => time() );

			if ( $action ) {
				$query_args['jet_engine_action'] = $action;
			}

			return apply_filters(
				'jet-engine/listings/ajax-listing-url',
				add_query_arg( $query_args, home_url( $wp->request . '/' . $query ) )
			);

		}

		/**
		 * Defines how CSS should be included. If true - styles included in footer only when JetEngine widgets was used,
		 * if false - styles always enqueued on wp_enqueue_scripts
		 * @return boolean [description]
		 */
		public function is_styles_in_footer() {
			return apply_filters( 'jet-engine/listings/styles-in-footer', false );
		}

		/**
		 * Enqueue front-end styles
		 *
		 * @return void
		 */
		public function frontend_styles() {
			if ( ! $this->is_styles_in_footer() ) {
				wp_enqueue_style( 'jet-engine-frontend' );
			}
		}

		/**
		 * Enqueue front-end styles in footer
		 *
		 * @return [type] [description]
		 */
		public function footer_styles() {
			if ( $this->is_styles_in_footer() ) {
				wp_enqueue_style( 'jet-engine-frontend' );
			}
		}

		/**
		 * Preview scripts
		 *
		 * @return void
		 */
		public function preview_scripts() {

			wp_enqueue_script( 'jquery-slick' );

			$this->enqueue_masonry_assets();
			$this->frontend_scripts();

			wp_enqueue_style( 'jet-engine-frontend' );

			do_action( 'jet-engine/listings/preview-scripts' );

		}

		public function ensure_lib( $lib ) {

			$libs = array(
				'imagesloaded' => 'assets/lib/imagesloaded/imagesloaded.min.js',
			);

			if ( ! isset( $libs[ $lib ] ) ) {
				return;
			}

			if ( ! wp_script_is( $lib, 'registered' ) ) {
				wp_register_script( 
					$lib,
					jet_engine()->plugin_url( $libs[ $lib ] ),
					array(),
					jet_engine()->get_version(),
					true
				);
			}

			if ( ! wp_script_is( $lib, 'enqueued' ) ) {
				wp_enqueue_script( $lib );
			}
		}

		/**
		 * Enqueues masonry assets
		 *
		 * @return void
		 */
		public function enqueue_masonry_assets() {

			$this->ensure_lib( 'imagesloaded' );
			
			wp_enqueue_script(
				'jet-engine-macy',
				jet_engine()->plugin_url( 'assets/lib/macy/macy.js' ),
				array(),
				jet_engine()->get_version(),
				true
			);
		}

		/**
		 * Set currently processing listing ID
		 *
		 * @param string|integer $listing_id
		 */
		public function set_listing( $listing_id = null ) {

			$this->listing_id = $listing_id;
			do_action( 'jet-engine/listings/setup', $this->listing_id );

		}

		/**
		 * Unset information about current listing
		 *
		 * @return void
		 */
		public function reset_listing() {

			$this->reset_data();

			do_action( 'jet-engine/listings/reset', $this->listing_id );

			$this->listing_id = null;

			jet_engine()->listings->did_posts->reset_currently_did_posts();

		}

		/**
		 * Returns currently processed listing id
		 * @return [type] [description]
		 */
		public function get_listing_id() {
			return $this->listing_id;
		}

		/**
		 * Get listing item content
		 *
		 * @param  $post
		 * @return string
		 */
		public function get_listing_item( $post ) {

			$this->setup_data( $post );

			$listing_id = apply_filters( 'jet-engine/listings/frontend/rendered-listing-id', $this->listing_id );
			$content = $this->get_listing_item_content( $listing_id );

			$content = apply_filters( 'jet-engine/listings/frontend/listing-item-content', $content, $listing_id, $post );

			do_action( 'jet-engine/listings/frontend/object-done', $post, $listing_id );

			return $content;

		}

		/**
		 * Returns listing item content by listing ID
		 * @param  [type] $listing_id [description]
		 * @return [type]             [description]
		 */
		public function get_listing_item_content( $listing_id ) {

			$content = null;

			if ( ! $listing_id ) {
				return $content;
			}

			$listing_view = jet_engine()->listings->data->get_listing_type( $listing_id );
			$content      = apply_filters( 'jet-engine/listing/content/' . $listing_view, null, $listing_id );

			return $content;
		}

		/**
		 * Setup data
		 *
		 * @param $post_obj
		 */
		public function setup_data( $post_obj = null ) {

			if ( $post_obj && 'WP_Post' === get_class( $post_obj ) ) {
				global $post;
				$post = $post_obj;
				setup_postdata( $post );
			}

			do_action( 'jet-engine/listings/frontend/setup-data', $post_obj, $this );

			jet_engine()->listings->data->set_current_object( $post_obj );

		}

		/**
		 * Reset data
		 *
		 * @return void
		 */
		public function reset_data() {

			do_action( 'jet-engine/listings/frontend/reset-data', jet_engine()->listings->data, $this );

			if ( 'posts' === jet_engine()->listings->data->get_listing_source() ) {
				wp_reset_postdata();
			}

			jet_engine()->listings->data->reset_current_object();

		}

		/**
		 * Get custom action url.
		 *
		 * @param string $action
		 * @param array  $args
		 *
		 * @return string
		 */
		public function get_custom_action_url( $action = '', $args = array() ) {
			$default_args = array(
				'action' => $action,
				'event'  => 'click',
			);

			$query_args = array_merge( $default_args, $args );

			return sprintf( '#jet-engine-action&%s', build_query( $query_args ) );
		}

	}

}
