<?php

namespace Jet_FB_Address_Autocomplete;


use Jet_FB_Address_Autocomplete\JetEngine\Fields\ManagerFields;
use Jet_FB_Address_Autocomplete\JetEngine\FormTabs\ManagerTabs as EngineManagerTabs;
use Jet_FB_Address_Autocomplete\JetFormBuilder\Blocks\ManagerBlocks;
use Jet_FB_Address_Autocomplete\JetFormBuilder\Tabs\ManagerTabs as BuilderManagerTabs;

if ( ! defined( 'WPINC' ) ) {
	die();
}

class Plugin {
	/**
	 * Instance.
	 *
	 * Holds the plugin instance.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @var Plugin
	 */
	public static $instance = null;

	public $slug = 'jet-form-builder-address-autocomplete';

	public function __construct() {
		$this->init_components();
	}

	public function init_components() {
		ManagerBlocks::register();
		BuilderManagerTabs::register();

		ManagerFields::register();

		EngineManagerTabs::register();
		new ElementorStyleControls();

		add_action( 'jet-engine/forms/booking/after-end-form', function ( $builder ) {
			AddressAutocomplete::clear();
		} );

		add_filter( 'jet-form-builder/after-end-form', function ( $content, $builder ) {
			AddressAutocomplete::clear();

			return $content;
		}, 10, 2 );

		$can_init_license = (
			is_admin()
			&& function_exists( 'jet_form_builder' )
			&& array_key_exists( 'addons_manager', get_object_vars( jet_form_builder() ) )
		);

		if ( $can_init_license ) {
			require $this->plugin_dir( 'includes/class-jfb-license-manager.php' );

			new \JFB_License_Manager();
		}
	}

	public function get_version() {
		return JET_FB_ADDRESS_AUTOCOMPLETE_VERSION;
	}

	public function plugin_url( $path ) {
		return JET_FB_ADDRESS_AUTOCOMPLETE_URL . $path;
	}

	public function plugin_dir( $path ) {
		return JET_FB_ADDRESS_AUTOCOMPLETE_PATH . $path;
	}

	public function get_template_path( $template ) {
		$path = JET_FB_ADDRESS_AUTOCOMPLETE_PATH . 'templates' . DIRECTORY_SEPARATOR;

		return ( $path . $template );
	}


	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @return Plugin An instance of the class.
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

}

Plugin::instance();