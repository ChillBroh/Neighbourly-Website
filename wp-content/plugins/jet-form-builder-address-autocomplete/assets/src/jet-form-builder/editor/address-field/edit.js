import {
	countriesList,
	labels,
	help,
	types
} from '@/source-field';

const {
	AdvancedFields,
	GeneralFields,
	ToolBarFields,
	FieldWrapper,
} = JetFBComponents;

const {
	TextControl,
	SelectControl,
	PanelBody
} = wp.components;
const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor;


function AddressEdit( props ) {
	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey }
	} = props;

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<PanelBody
				title={ __( 'Field Settings' ) }
				key={ uniqKey( 'PanelBody' ) }
			>
				<SelectControl
					multiple
					className='field-mime-types'
					label={ labels.countries }
					value={ attributes.countries }
					labelPosition='top'
					onChange={ countries => setAttributes( { countries } ) }
					options={ countriesList }
				/>
				<SelectControl
					multiple
					className='field-mime-types'
					label={ labels.types }
					value={ attributes.types }
					labelPosition='top'
					onChange={ types => setAttributes( { types } ) }
					options={ types }
				/>
				<p>{ help.types_link_label }
					<a href={ help.types_link }>{ help.types_link_name }</a>
				</p>
			</PanelBody>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<TextControl
					placeholder={ attributes.placeholder }
					key={ uniqKey( 'place_holder_block' ) }
					onChange={ () => {
					} }
				/>
			</FieldWrapper>
		</div>
	];
}

export default AddressEdit;