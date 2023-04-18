import React from 'react';
import Form from 'antd/lib/form';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import StyledInput from './StyledInput';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, width } = styles;

const useStyles = createUseStyles({
	container: {
		marginBottom: 16,
	},
	error: {
		color: '#d61348',
		fontSize: 12,
		fontWeight: 500,
		margin: '6px 0 12px',
	},
	formItem: {
		margin: 0,
	},
	genderInputWrapper: {
		paddingTop: 8,
	},
	inputNumber: {
		'& input': {
			height: '40px !important',
		},
		'&:focus': {
			borderColor: '#ccc',
			boxShadow: 'none',
		},
		'&:hover': {
			borderColor: '#ccc',
		},
		...width[100].percentage,
		backgroundColor: '#fff',
		borderColor: '#ccc',
		borderRadius: 5,
		color: '#333',
		fontSize: 18,
		height: 40,
	},
	inputNumberError: {
		'&:focus': {
			borderColor: '#d61348',
		},
		'&:hover': {
			borderColor: '#d61348',
		},
		borderColor: '#d61348',
	},
	sectionWrapper: {
		marginBottom: 16,
	},
	select: {
		'& div': {
			'& span': {
				...displayFlex,
				...alignItemsCenter,
				fontSize: 18,
				height: '40px !important',
			},
			height: '40px !important',
		},
		height: 40,
	},
	usernameSection: {
		'& > p': {
			fontSize: 12,
			fontWeight: 400,
		},
		fontWeight: 500,
	},
});

const genderOptions = [
	{ label: '', value: '' },
	{ label: 'Female', value: 'female' },
	{ label: 'Male', value: 'male' },
	{ label: 'Custom', value: 'custom' },
	{ label: 'Prefer not to say', value: 'na' },
];

const Step3 = ({ isCustomGender, setGender, setIsCustomGender }) => {
	const { errors } = useAuth();
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div>
				<div className={classes.usernameSection}>
					<label>
						Choose your display name
						<Form.Item
							className={classes.formItem}
							name='username'
						>
							<StyledInput />
						</Form.Item>
					</label>
					<p>
						Your display name can be anything you like. Your name or artist name are good choices.
					</p>
				</div>
				<div className={cn({ [`${classes.sectionWrapper}`]: !errors.age })}>
					<label>
						Enter your age
						<Form.Item
							className={classes.formItem}
							name='age'
						>
							<InputNumber
								className={cn(classes.inputNumber, { [`${classes.inputNumberError}`]: errors.age })}
							/>
						</Form.Item>
					</label>
					{errors.age && <div className={classes.error}>{errors.age}</div>}
				</div>
				<div className={cn({ [`${classes.sectionWrapper}`]: !errors.gender })}>
					<label>
						Enter your gender
						<Form.Item
							className={classes.formItem}
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
							<div className={classes.genderInputWrapper}>
								<StyledInput
									error={errors.gender}
									maxLength={16}
									onChange={(e) => setGender(e.target.value)}
									placeholder='Custom gender'
								/>
							</div>
						)}
					</label>
					{errors.gender && <div className={classes.error}>{errors.gender}</div>}
				</div>
			</div>
			<FormButton htmlType='submit'>Continue</FormButton>
		</div>
	);
};

export default Step3;
