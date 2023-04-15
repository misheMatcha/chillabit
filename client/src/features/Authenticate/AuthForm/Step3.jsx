import React, { useState } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import StyledInput from './StyledInput';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent, height, width } = styles;

const useStyles = createUseStyles({
	container: {},
	error: {},
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
				<label>
					Choose your display name
					<Form.Item name='username'>
						<StyledInput />
					</Form.Item>
					Your display name can be anything you like. Your name or artist name are good choices.
				</label>
				<label>
					Enter your age
					<Form.Item name='age'>
						<InputNumber />
					</Form.Item>
					{errors.age && <div>{errors.age}</div>}
				</label>
				<label>
					Enter your gender
					<Form.Item name='gender'>
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
						<div>
							<StyledInput
								maxLength={16}
								onChange={(e) => setGender(e.target.value)}
							/>
						</div>
					)}
					{errors.gender && <div className={classes.error}>{errors.gender}</div>}
				</label>
			</div>
			<FormButton />
		</div>
	);
};

export default Step3;
