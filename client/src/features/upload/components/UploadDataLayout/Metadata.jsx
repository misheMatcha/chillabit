import React from 'react';
import { createUseStyles } from 'react-jss';
import MetadataLicense from './MetadataLicense';
import { FormInput, FormSelect } from '../../../../components/form';
import { Step } from '../../../../components/steps/index';
import { Y_N_Options } from '../../../../data/trackPlaceholders';
import { styles } from '../../../../utils/styles';

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
							name: ['metadata', 'contains_music'],
							styles: classes.input,
						}}
						options={Y_N_Options}
					/>
					<FormInput
						formConfig={{
							label: 'Artist',
							name: ['metadata', 'artist_name'],
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'Publisher',
							name: ['metadata', 'publisher'],
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'ISRC',
							name: ['metadata', 'isrc'],
							styles: classes.item,
						}}
						placeholder='e.g. USS1Z1001234'
					/>
					<FormInput
						formConfig={{
							label: 'Composer',
							name: ['metadata', 'composer'],
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'Release title',
							name: ['metadata', 'release_title'],
							styles: classes.item,
						}}
					/>
				</div>
				<FormInput
					formConfig={{
						label: 'Buy-link',
						name: ['metadata', 'buy_link'],
						styles: classes.item,
					}}
				/>
				<div className={classes.section}>
					<FormInput
						formConfig={{
							label: 'Album title',
							name: ['metadata', 'album_title'],
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'Record label',
							name: ['metadata', 'record_label'],
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'Release date',
							name: ['metadata', 'release_date'],
							styles: classes.item,
						}}
					/>
				</div>
				<div className={classes.section}>
					<FormInput
						formConfig={{
							label: 'Album Barcode',
							name: ['metadata', 'album_barcode'],
							styles: classes.item,
						}}
					/>
					<FormInput
						formConfig={{
							label: 'ISWC',
							name: ['metadata', 'iswc'],
							styles: classes.input,
						}}
						placeholder='e.g. T-034.524.680-1'
					/>
				</div>
				<div className={classes.section}>
					<FormInput
						formConfig={{
							label: 'P line',
							name: ['metadata', 'p_line'],
							styles: classes.item,
						}}
						placeholder='e.g. 2007 XYZ Record Company Limited'
					/>
					<FormSelect
						formConfig={{
							label: 'Contains explicit content',
							name: ['metadata', 'explicit'],
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
