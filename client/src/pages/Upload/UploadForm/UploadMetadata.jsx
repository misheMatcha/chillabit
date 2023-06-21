import React, { useEffect, useState } from 'react';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import Radio from 'antd/lib/radio';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { ReactComponent as AttributionIcon } from './assets/ic_by.svg';
import { ReactComponent as NoDerivativeWorkscon } from './assets/ic_nc.svg';
import { ReactComponent as NoncommercialIcon } from './assets/ic_ncc.svg';
import { ReactComponent as ShareAlikeIcon } from './assets/ic_sa.svg';
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
	checkboxWrap: {
		...displayFlex,
	},
	checkbox: {
		width: 'fit-content',
	},
	iconWrap: {
		...displayFlex,
	},
	icon: {
		height: 14,
		width: 14,
	},
}));

const checkboxOptions = [
	{
		inputConfig: {
			label:
				'Allow others to copy, distribute, display and perform your copyrighted work but only if they give credit the way you request.',
			title: 'Attribution',
			type: 'checkbox',
		},
		name: 'Attribution',
	},
	{
		inputConfig: {
			label:
				'Allow others to distribute, display and perform your work—and derivative works based upon it—but for noncommercial purposes only.',
			title: 'Noncommercial',
			type: 'checkbox',
		},
		name: 'Noncommercial',
	},
	{
		inputConfig: {
			label:
				'Allow others to copy, distribute, display and perform only verbatim copies of your work, not derivative works based upon it.',
			title: 'No Derivative Works',
			type: 'checkbox',
		},
		name: 'NoDerivativeWorks',
	},
	{
		inputConfig: {
			label:
				'Allow others to distribute derivative works only under a license identical to the license that governs your work.',
			title: 'Share Alike',
			type: 'checkbox',
		},
		name: 'ShareAlike',
	},
];

const UploadMetadata = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [displayOptions, setDisplayOptions] = useState(false);
	const form = Form.useFormInstance();

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
				</div>
				<div className={classes.iconWrap}>
					<div>
						<Radio.Group
							onChange={(obj) =>
								obj.target.value === 'creative commons'
									? setDisplayOptions(true)
									: setDisplayOptions(false)
							}
						>
							<Radio value={'all rights reservered'}>All Rights Reserved</Radio>
							<Radio value={'creative commons'}>Creative Commons</Radio>
						</Radio.Group>
					</div>
					{displayOptions && (
						<>
							<div>
								<AttributionIcon className={classes.icon} />
								<NoncommercialIcon className={classes.icon} />
								<NoDerivativeWorkscon className={classes.icon} />
								<ShareAlikeIcon className={classes.icon} />
							</div>
							<span>Some rights reserved</span>
						</>
					)}
				</div>
				{displayOptions && (
					<div className={classes.checkboxWrap}>
						{checkboxOptions.map((checkbox, i) => (
							<FormItem
								key={i}
								name={checkbox.name}
								styles={classes.checkbox}
								inputConfig={checkbox.inputConfig}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default UploadMetadata;
