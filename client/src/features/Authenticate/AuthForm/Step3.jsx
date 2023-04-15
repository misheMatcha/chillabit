import React, { useState } from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Select from 'antd/lib/select';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent, height, width } = styles;

const useStyles = createUseStyles({
	container: {},
});

const Step3 = ({ form }) => {
	const [gender, setGender] = useState('');
	const [isCustomGender, setIsCustomGender] = useState(false);
	const classes = useStyles();
	const { errors, setDisplayModal, setErrors, setToken, setUser } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.step3}>
				<label>
					Choose your display name
					<Form.Item name='username'>
						<Input />
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
							onChange={(value) => {
								if (value === 'custom') {
									setIsCustomGender(true);
								} else {
									setIsCustomGender(false);
									setGender('');
								}
							}}
						>
							<Select.Option value='female'>Female</Select.Option>
							<Select.Option value='male'>Male</Select.Option>
							<Select.Option value='custom'>Custom</Select.Option>
							<Select.Option value='na'>Prefer not to say</Select.Option>
						</Select>
					</Form.Item>
					{isCustomGender && (
						<div>
							<Input
								maxLength={16}
								onChange={(e) => setGender(e.target.value)}
							/>
						</div>
					)}
					{errors.gender && <div>{errors.gender}</div>}
				</label>
			</div>
			<FormButton />
		</div>
	);
};

export default Step3;
