<?php
namespace Jet_Engine\Query_Builder\Dynamic_Tags;

use Jet_Engine\Query_Builder\Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Query_Count_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function get_name() {
		return 'jet-query-count';
	}

	public function get_title() {
		return __( 'Query Results Count', 'jet-engine' );
	}

	public function get_group() {
		return \Jet_Engine_Dynamic_Tags_Module::JET_GROUP;
	}

	public function get_categories() {
		return array(
			\Jet_Engine_Dynamic_Tags_Module::TEXT_CATEGORY,
			\Jet_Engine_Dynamic_Tags_Module::NUMBER_CATEGORY,
			\Jet_Engine_Dynamic_Tags_Module::POST_META_CATEGORY,
		);
	}

	public function is_settings_required() {
		return true;
	}

	protected function register_controls() {

		$this->add_control(
			'query_id',
			array(
				'label'   => __( 'Query', 'jet-engine' ),
				'type'    => \Elementor\Controls_Manager::SELECT,
				'options' => Manager::instance()->get_queries_for_options(),
			)
		);

		$this->add_control(
			'count_type',
			array(
				'label'       => __( 'Returned Count', 'jet-engine' ),
				'type'        => \Elementor\Controls_Manager::SELECT,
				'label_block' => true,
				'default'     => 'total',
				'options'     => array(
					'total'   => __( 'Total query results count', 'jet-engine' ),
					'visible' => __( 'Currently visible query results count (per page)', 'jet-engine' ),
				),
			)
		);

	}

	public function render() {
		$query_id   = $this->get_settings( 'query_id' );
		$count_type = $this->get_settings( 'count_type' );

		echo Manager::instance()->get_query_count_html( $query_id, $count_type );
	}

}
