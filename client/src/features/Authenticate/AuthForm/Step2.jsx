import React from 'react';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import FormButton from './FormButton';
import useAuth from '../../../hooks/useAuth';
import axios from '../../../utils/axios';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent, height, width } = styles;

const useStyles = createUseStyles({
	container: {},
});

const Step2 = ({ form }) => {
	const classes = useStyles();
	const { errors, setDisplayModal, setErrors, setToken, setUser } = useAuth();

	return (
		<div className={classes.container}>
			<div className={classes.step2}>
				{/* <Input value={form.getFieldValue('email')} /> */}
				<Form.Item
					name='password'
					rules={[
						{ message: 'Password must be at least 8 characters.', min: 8 },
						{ max: 72, message: 'Password must be less than 72 characters.' },
					]}
				>
					<Input
						placeholder='Your password'
						type='password'
					/>
				</Form.Item>
				{errors.message && <div>{errors.message}</div>}
			</div>
			<FormButton />
		</div>
	);
};

export default Step2;
