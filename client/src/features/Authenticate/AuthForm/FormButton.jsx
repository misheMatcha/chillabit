import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles } from 'react-jss';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { alignItemsCenter, displayFlex, flexDirection, justifyContent, height, width } = styles;

const useStyles = createUseStyles({
	btn: {},
	btnWrapper: {},
});

const FormButton = ({ form, onClick }) => {
	const classes = useStyles();
	const { step } = useAuth();

	// const formButton = () => {
	// 	switch (step) {
	// 		case 1:
	// 			return <Button onClick={verifyHandle}>Continue</Button>;
	// 		case 2:
	// 			return isVerified ? (
	// 				<Button htmlType='submit'>Sign in</Button>
	// 			) : (
	// 				<Button
	// 					onClick={(e) => {
	// 						e.preventDefault();
	// 						const passwordLength = size(form.getFieldValue('password'));
	// 						if (passwordLength >= 8 && passwordLength <= 72) {
	// 							setStep(3);
	// 						}
	// 					}}
	// 				>
	// 					Accept & continue
	// 				</Button>
	// 			);
	// 		default:
	// 			return <Button htmlType='submit'>Continue</Button>;
	// 	}
	// };

	return (
		<Form.Item className={classes.btnWrapper}>
			{step === 1 && (
				<Button
					className={classes.btn}
					onClick={onClick}
				>
					Continue Step 1
				</Button>
			)}
			{step === 2 && (
				<Button
					className={classes.btn}
					onClick={onClick}
				>
					Continue Step 2
				</Button>
			)}
			{step === 3 && (
				<Button
					className={classes.btn}
					onClick={onClick}
				>
					Continue Step 3
				</Button>
			)}
		</Form.Item>
	);
};

export default FormButton;
