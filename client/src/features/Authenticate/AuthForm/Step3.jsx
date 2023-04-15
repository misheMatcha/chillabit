import React, { useState } from 'react';
import Form from 'antd/lib/form';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import StyledInput from './StyledInput';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, width } = styles;

const useStyles = createUseStyles({
	container: {},
	error: {
		color: '#d61348',
		fontSize: 12,
		fontWeight: 500,
		margin: '6px 0 12px',
	},
	formButton: {
		paddingTop: 16,
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
	inputWrapper: {
		margin: 0,
	},
	label: {
		marginBottom: 6,
	},
	sectionWrapper: {
		'& > p': {
			fontSize: 12,
			fontWeight: 400,
		},
		...displayFlex,
		...flexDirection.column,
		fontWeight: 500,
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
});

const genderOption = [
	{ label: '', value: '' },
	{ label: 'Female', value: 'female' },
	{ label: 'Male', value: 'male' },
	{ label: 'Custom', value: 'custom' },
	{ label: 'Prefer not to say', value: 'na' },
];

const Step3 = ({ form }) => {
	const [gender, setGender] = useState('');
	const [isCustomGender, setIsCustomGender] = useState(false);
	const classes = useStyles();
	const { errors } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.step3}>
				<div className={classes.sectionWrapper}>
					<label className={classes.label}>
						Choose your display name
						<Form.Item
							className={classes.inputWrapper}
							name='username'
						>
							<StyledInput />
						</Form.Item>
					</label>
					<p>
						Your display name can be anything you like. Your name or artist name are good choices.
					</p>
				</div>
				<label>
					Enter your age
					<Form.Item
						className={classes.inputWrapper}
						name='age'
					>
						<InputNumber className={classes.inputNumber} />
					</Form.Item>
					{errors.age && <div className={classes.error}>{errors.age}</div>}
				</label>
				<label>
					Enter your gender
					<Form.Item
						className={classes.inputWrapper}
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
							options={genderOption}
						/>
					</Form.Item>
					{isCustomGender && (
						<div className={classes.genderInputWrapper}>
							<StyledInput
								maxLength={16}
								onChange={(e) => setGender(e.target.value)}
								placeholder='Custom gender'
							/>
						</div>
					)}
					{errors.gender && <div className={classes.error}>{errors.gender}</div>}
				</label>
			</div>
			<FormButton htmlType='submit'>Continue</FormButton>
		</div>
	);
};

export default Step3;
