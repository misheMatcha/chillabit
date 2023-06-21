import React from 'react';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from '../../../components/Form/FormItem';
import { Y_N_Options } from '../../../data/trackPlaceholders';
import { styles } from '../../../utils/styles';

const { displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
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
}));

const UploadMetadata = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div className={classes.section}>
				<FormItem
					label='Contains music'
					name='music'
					inputConfig={{
						options: Y_N_Options,
						type: 'select',
					}}
					styles={classes.input}
				/>
				<FormItem
					label='Artist'
					name='artist_name'
					inputConfig={{
						type: 'text',
					}}
					styles={classes.item}
				/>
				<FormItem
					label='Publisher'
					name='publisher'
					inputConfig={{
						type: 'text',
					}}
					styles={classes.item}
				/>
				<FormItem
					label='ISRC'
					name='isrc'
					inputConfig={{
						placeholder: 'e.g. USS1Z1001234',
						type: 'text',
					}}
					styles={classes.item}
				/>
				<FormItem
					label='Composer'
					name='composer'
					inputConfig={{
						type: 'text',
					}}
					styles={classes.item}
				/>
				<FormItem
					label='Release title'
					name='release_title'
					inputConfig={{
						type: 'text',
					}}
					styles={classes.item}
				/>
			</div>
			<FormItem
				fullWidth
				label='Buy-link'
				name='buy_link'
				inputConfig={{
					type: 'text',
				}}
				styles={classes.item}
			/>
			<div className={classes.section}>
				<FormItem
					label='Album title'
					name='album_title'
					inputConfig={{
						type: 'text',
					}}
					styles={classes.item}
				/>
				<FormItem
					label='Record label'
					name='record_label'
					inputConfig={{
						type: 'text',
					}}
					styles={classes.item}
				/>
				<FormItem
					label='Release date'
					name='release_date'
					inputConfig={{
						type: 'text',
					}}
					styles={classes.item}
				/>
			</div>
			<div className={classes.section}>
				<FormItem
					label='Album Barcode'
					name='album_barcode'
					inputConfig={{
						type: 'text',
					}}
					styles={classes.item}
				/>
				<FormItem
					label='ISWC'
					name='iswc'
					inputConfig={{
						placeholder: 'e.g. T-034.524.680-1',
						type: 'text',
					}}
					styles={classes.input}
				/>
			</div>
			<div className={classes.section}>
				<FormItem
					label='P line'
					name='p_line'
					inputConfig={{
						placeholder: 'e.g. 2007 XYZ Record Company Limited',
						type: 'text',
					}}
					styles={classes.item}
				/>
				<FormItem
					label='Contains explicit content'
					name='explicit'
					inputConfig={{
						options: Y_N_Options,
						type: 'select',
					}}
					styles={classes.input}
				/>
			</div>
			<div>
				<div>
					<FontAwesomeIcon icon={faSquareCheck} /> License
					<div>
						<div>radio</div>
						<div>icon</div>
					</div>
					<div>
						<FormItem
							inputConfig={{
								type: 'checkbox',
								title: 'Attribution',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadMetadata;
