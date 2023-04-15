import React from 'react';
import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import { createUseStyles } from 'react-jss';
import useAuth from '../../../hooks/useAuth';
import { styles } from '../../../utils/styles';

const { width } = styles;

const useStyles = createUseStyles({
	btn: {
		'&:hover': {
			borderColor: '#f50 !important',
			color: '#fff !important',
		},
		...width[100].percentage,
		backgroundColor: '#f50',
		borderColor: '#f50',
		borderRadius: 3,
		color: '#fff',
		fontSize: 16,
		fontWeight: 500,
		height: 40,
	},
	btnWrapper: {
		margin: 0,
	},
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
					Continue
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
