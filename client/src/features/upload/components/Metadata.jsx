import React from 'react';
import { createUseStyles } from 'react-jss';
import MetadataLicense from './MetadataLicense';
import { FormInput, FormSelect } from '../../../components/form';
import { Step } from '../../../components/steps/index';
import { Y_N_Options } from '../../../data/trackPlaceholders';
import { styles } from '../../../utils/styles';

const { displayFlex, justifyContent } = styles;

const useStyles = createUseStyles({
	container: {
		'& > div:first-child': {
			marginBottom: 38,
			padding: '10px 0',
		},
	},
	input: {
		padding: '0 5px',
		width: 250,
	},
	item: {
		flexGrow: 1,
		padding: '0 5px',
	},
	section: {
		...displayFlex,
		...justifyContent.spaceBetween,
		flexWrap: 'wrap',
	},
});

const Metadata = () => {
	const classes = useStyles();

	return (
		<Step step={4}>
			<div className={classes.container}>
				<div className={classes.section}>
					<FormSelect
						formConfig={{
							label: 'Contains music',
							name: 'music',
							styles: classes.input,
						}}
						options={Y_N_Options}
					/>
					<FormInput
						formConfig={{
							label: 'Artist',
							name: 'artist_name',
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'Publisher',
							name: 'publisher',
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'ISRC',
							name: 'isrc',
							styles: classes.item,
						}}
						placeholder='e.g. USS1Z1001234'
					/>
					<FormInput
						formConfig={{
							label: 'Composer',
							name: 'composer',
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'Release title',
							name: 'release_title',
							styles: classes.item,
						}}
					/>
				</div>
				<FormInput
					formConfig={{
						label: 'Buy-link',
						name: 'buy_link',
						styles: classes.item,
					}}
				/>
				<div className={classes.section}>
					<FormInput
						formConfig={{
							label: 'Album title',
							name: 'album_title',
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'Record label',
							name: 'record_label',
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'Release date',
							name: 'release_date',
							styles: classes.item,
						}}
					/>
				</div>
				<div className={classes.section}>
					<FormInput
						formConfig={{
							label: 'Album Barcode',
							name: 'album_barcode',
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'ISWC',
							name: 'iswc',
							styles: classes.input,
						}}
						placeholder='e.g. T-034.524.680-1'
					/>
				</div>
				<div className={classes.section}>
					<FormInput
						formConfig={{
							label: 'P line',
							name: 'p_line',
							styles: classes.item,
						}}
						placeholder='e.g. 2007 XYZ Record Company Limited'
					/>
					<FormSelect
						formConfig={{
							label: 'Contains explicit content',
							name: 'explicit',
							styles: classes.input,
						}}
						options={Y_N_Options}
					/>
				</div>
				<MetadataLicense />
			</div>
		</Step>
	);
};

export default Metadata;
