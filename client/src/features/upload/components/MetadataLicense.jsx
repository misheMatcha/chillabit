import React, { useState } from 'react';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import { AnimatePresence, motion } from 'framer-motion';
import { createUseStyles, useTheme } from 'react-jss';
import { FormRadioGroup, FormCheckbox } from '../../../components/form';
import { ANIMATE_VARIANTS } from '../../../utils/constants';
import { styles } from '../../../utils/styles';
import { ReactComponent as AttributionIcon } from '../assets/ic_by.svg';
import { ReactComponent as NoDerivativeWorkscon } from '../assets/ic_nc.svg';
import { ReactComponent as NoncommercialIcon } from '../assets/ic_ncc.svg';
import { ReactComponent as ShareAlikeIcon } from '../assets/ic_sa.svg';

const { fadeInAndOut, openAndClose } = ANIMATE_VARIANTS;

const { alignItems, displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	checkbox: {
		width: 'fit-content',
	},
	checkboxWrapper: {
		...displayFlex,
	},
	container: {},
	icon: {
		width: 14,
	},
	iconWrapper: {
		// border: '1px solid black',
	},
	radioGroup: {
		// border: '1px solid black',
	},
	radioWrapper: {
		// border: '1px solid black',
	},
	title: {
		borderBottom: `1px solid ${theme.background.highlight}`,
	},
}));

const MetadataLicense = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [display, setDisplay] = useState(false);
	const form = Form.useFormInstance();

	const checkboxOptions = [
		{
			formConfig: {
				name: 'Attribution',
			},
			label:
				'Allow others to copy, distribute, display and perform your copyrighted work but only if they give credit the way you request.',
			special: true,
			title: 'Attribution',
		},
		{
			formConfig: {
				name: 'Noncommercial',
			},
			label:
				'Allow others to distribute, display and perform your work—and derivative works based upon it—but for noncommercial purposes only.',
			special: true,
			title: 'Noncommercial',
		},
		{
			formConfig: {
				name: 'NoDerivativeWorks',
			},
			label:
				'Allow others to copy, distribute, display and perform only verbatim copies of your work, not derivative works based upon it.',
			onChange: (e) => {
				if (e.target.checked && form.getFieldValue('ShareAlike')) {
					form.setFieldValue('ShareAlike', false);
				}
			},
			special: true,
			title: 'No Derivative Works',
		},
		{
			formConfig: {
				name: 'ShareAlike',
			},
			label:
				'Allow others to distribute derivative works only under a license identical to the license that governs your work.',

			onChange: (e) => {
				if (e.target.checked && form.getFieldValue('NoDerivativeWorks')) {
					form.setFieldValue('NoDerivativeWorks', false);
				}
			},
			special: true,
			title: 'Share Alike',
		},
	];

	return (
		<div className={classes.container}>
			<div className={classes.title}>
				<FontAwesomeIcon icon={faSquareCheck} /> License
			</div>
			<div className={classes.radioWrapper}>
				<FormRadioGroup
					onChange={(e) => setDisplay(e.target.value === 'CC' ? true : false)}
					formConfig={{ name: 'license', styles: classes.radioGroup }}
					options={[
						{ label: 'All Rights Reserved', value: 'ARR' },
						{ label: 'Creative Commons', value: 'CC' },
					]}
				/>
				{display && (
					<div className={classes.iconWrapper}>
						<AttributionIcon className={classes.icon} />
						<NoncommercialIcon className={classes.icon} />
						<NoDerivativeWorkscon className={classes.icon} />
						<ShareAlikeIcon className={classes.icon} />
					</div>
				)}
			</div>
			<AnimatePresence>
				{display && (
					<motion.div {...openAndClose}>
						<motion.div
							{...fadeInAndOut}
							className={classes.checkboxWrapper}
						>
							{checkboxOptions.map(({ formConfig, ...props }, i) => (
								<FormCheckbox
									key={`${i}-${props.label}`}
									formConfig={{ ...formConfig, valuePropName: 'checked' }}
									styles={classes.checkbox}
									{...props}
								/>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default MetadataLicense;
