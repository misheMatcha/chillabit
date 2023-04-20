import React from 'react';
import Form from 'antd/lib/form';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormButton from './FormButton';
import FormError from './FormError';
import StyledInput from './StyledInput';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, spacing, typography, width } = styles;

const useStyles = createUseStyles((theme) => ({
	ageInput: {
		'& input': {
			height: `${spacing[5]}px !important`,
		},
		'&.ant-input-number-focused, &:focus, &:hover': {
			borderColor: ({ errors }) => (errors.age ? theme.color.error : '#ccc'),
			boxShadow: 'none',
		},
		...typography.body,
		...width[100].percentage,
		backgroundColor: theme.color.white,
		borderColor: ({ errors }) => (errors.age ? theme.color.error : '#ccc'),
		borderRadius: spacing['0_5'],
		color: '#333',
		height: spacing[5],
	},
	container: {
		marginBottom: spacing[2],
	},
	customInput: {
		paddingTop: spacing[1],
	},
	select: {
		'& div': {
			'& span': {
				...alignItemsCenter,
				...displayFlex,
				...typography.body,
				height: `${spacing[5]}px !important`,
			},
			'&.ant-select-selector': {
				borderColor: ({ errors, isCustomGender }) =>
					`${errors.gender && !isCustomGender ? theme.color.error : '#d9d9d9'} !important`,
				boxShadow: 'none !important',
			},
			height: `${spacing[5]}px !important`,
		},
		height: spacing[5],
	},
	spacing: {
		margin: 0,
	},
	spacingSection: {
		marginBottom: spacing[2],
	},
	title: {
		...typography.h4,
	},
	usernameMsg: {
		...typography.captions,
		marginTop: spacing['0_7'],
	},
}));

const genderOptions = [
	{ label: '', value: '' },
	{ label: 'Female', value: 'female' },
	{ label: 'Male', value: 'male' },
	{ label: 'Custom', value: 'custom' },
	{ label: 'Prefer not to say', value: 'n/a' },
];

const Step3 = ({ isCustomGender, setGender, setIsCustomGender }) => {
	const theme = useTheme();
	const { errors } = useAuth();
	const classes = useStyles({ errors, isCustomGender, theme });

	return (
		<div className={classes.container}>
			<div>
				<div>
					<label>
						<span className={classes.title}>Choose your display name</span>
						<Form.Item
							className={classes.spacing}
							name='username'
						>
							<StyledInput />
						</Form.Item>
					</label>
					<p className={classes.usernameMsg}>
						Your display name can be anything you like. Your name or artist name are good choices.
					</p>
				</div>
				<div className={cn({ [`${classes.spacingSection}`]: !errors.age })}>
					<label>
						<span className={classes.title}>Enter your age</span>
						<Form.Item
							className={classes.spacing}
							name='age'
						>
							<InputNumber className={classes.ageInput} />
						</Form.Item>
					</label>
					{errors.age && <FormError>{errors.age}</FormError>}
				</div>
				<div className={cn({ [`${classes.spacingSection}`]: !errors.gender })}>
					<label>
						<span className={classes.title}>Enter your gender</span>
						<Form.Item
							className={classes.spacing}
							name='gender'
						>
							<Select
								className={classes.select}
								onChange={(value) => {
									if (value === 'custom') {
										setIsCustomGender(true);
									} else {
										setIsCustomGender(false);
										setGender('');
									}
								}}
								options={genderOptions}
							/>
						</Form.Item>
						{isCustomGender && (
							<div className={classes.customInput}>
								<StyledInput
									isInvalid={errors.gender}
									maxLength={16}
									onChange={(e) => setGender(e.target.value)}
									placeholder='Custom gender'
								/>
							</div>
						)}
					</label>
					{errors.gender && <FormError>{errors.gender}</FormError>}
				</div>
			</div>
			<FormButton htmlType='submit'>Continue</FormButton>
		</div>
	);
};

export default Step3;
