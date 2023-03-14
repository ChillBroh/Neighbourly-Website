// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initJFBAutocomplete() {
	const $ = jQuery;
	const { applyFilters } = wp.hooks;
	const service = new google.maps.places.AutocompleteService();

	//const forms = $( 'form[data-form-id]' );

	$( document ).on( 'input.JetFormBuilderMain', '.jet-form-builder__field.jet-address-autocomplete', function () {
		$( this ).trigger( 'change.JetFormBuilderMain' );
	} );
	$( document ).on( 'input.JetEngine', '.jet-form__field.jet-address-autocomplete', function () {
		$( this ).trigger( 'change.JetEngine' );
	} );


	const addItemResult = ( { text, index, list } ) => {
		const $li = $( '<li>' );
		$li.text( text ).attr( 'value', index ).addClass( 'jet-adr-visible' );

		list.append( $li );
	};

	function AutocompleteFieldInit() {
		const self = $( this );
		const settings = self.data( 'address-settings' );
		let options = {};

		if ( settings.countries ) {
			options.componentRestrictions = { country: [ ...settings.countries ] };
			delete settings.countries;
		}
		options = {
			...options,
			...settings,
		};

		self.editableSelect( applyFilters( 'jet-fb.address_autocomplete.dropdown-options', {
			effects: 'slide',
			duration: 200,
		} ) );

		let sessionToken = new google.maps.places.AutocompleteSessionToken();

		self.on( 'jet-fb.select', e => {
			sessionToken = new google.maps.places.AutocompleteSessionToken();
		} );

		self.on( 'jet-fb.input', ( e, list ) => {
			if ( ! self.val() ) {
				list.empty();
				return;
			}

			const displayPredictions = ( predictions, status ) => {
				if ( status != google.maps.places.PlacesServiceStatus.OK ) {
					self.trigger( 'jet-fb.error', [ status, list ] );
					return;
				}
				list.empty();
				predictions.forEach( ( prediction, index ) => addItemResult( {
					text: prediction.description,
					index, list,
				} ) );
			};

			service.getPlacePredictions( {
				...options,
				input: self.val(),
				sessionToken,
			}, displayPredictions );

		} );
	}

	/*forms.each( function () {
		const $form = $( this );
		$form.find( '.jet-address-autocomplete' ).each( AutocompleteFieldInit );
	} );*/

	const handleField = function ( namespace ) {
		const self = $( this ).closest( `.${ namespace }-repeater` );
		self.find( '.jet-address-autocomplete' ).each( AutocompleteFieldInit );
	};

	$( document ).on( 'jet-form-builder/init', function ( event, $scope ) {
		const self = $scope.find( 'form' );
		self.find( '.jet-address-autocomplete' ).each( AutocompleteFieldInit );
	} );

	$( document ).on( 'jet-engine/booking-form/init', function ( event, $scope ) {
		const self = $scope.find( 'form' );
		self.find( '.jet-address-autocomplete' ).each( AutocompleteFieldInit );
	} );

	$( document ).on( 'jet-form-builder/repeater-add-new', '.jet-form-builder-repeater__new', function () {
		handleField.call( this, 'jet-form-builder' );
	} );
	$( document ).on( 'jet-engine/form/repeater-add-new', '.jet-form-repeater__new', function () {
		handleField.call( this, 'jet-form' );
	} );
}

