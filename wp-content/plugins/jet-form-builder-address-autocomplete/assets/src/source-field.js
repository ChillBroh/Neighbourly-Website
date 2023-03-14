import countriesList from "./countries.json";

const { __ } = wp.i18n;

const defaultResponse = {
	countries: [],
	types: []
};

const labels = {
	countries: __( 'Countries allowed' ),
	types: __( 'Place types' ),
};

const help = {
	types_link_label: __( 'View types supported by autocomplete ' ),
	types_link_name: __( 'here' ),
	types_link: 'https://developers.google.com/maps/documentation/places/web-service/supported_types#table3'
}

const types = [
	{
		value: 'geocode',
		label: 'Geocode'
	},
	{
		value: 'address',
		label: 'Address'
	},
	{
		value: 'establishment',
		label: 'Establishment'
	},
	{
		value: '(regions)',
		label: 'Regions'
	},
	{
		value: '(cities)',
		label: 'Cities'
	}
];


export {
	labels,
	types,
	help,
	defaultResponse,
	countriesList
};

