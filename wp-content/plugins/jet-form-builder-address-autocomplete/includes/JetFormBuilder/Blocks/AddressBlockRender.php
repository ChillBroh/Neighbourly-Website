<?php


namespace Jet_FB_Address_Autocomplete\JetFormBuilder\Blocks;

use Jet_FB_Address_Autocomplete\Traits\AddressFieldRenderTrait;
use Jet_Form_Builder\Blocks\Render\Base;
use JetAddressAutocompleteCore\JetFormBuilder\RenderBlock;

class AddressBlockRender extends Base {

	use RenderBlock;
	use AddressFieldRenderTrait {
		AddressFieldRenderTrait::attributes_values insteadof RenderBlock;
	}

	public function get_name() {
		return 'address-field';
	}

	public function get_address_autocomplete_args() {
		return esc_attr( wp_json_encode(
			$this->get_args( array(
				'countries',
				'types'
			) )
		) );
	}


}