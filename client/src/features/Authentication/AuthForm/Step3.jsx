import React, { useState } from 'react';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import FormButton from './FormButton';
import Header from './Header';
import { FormItem, FormInput, FormInputNumber, FormSelect, Steps } from '../../../components/form';
import useAuthForm from '../../../hooks/useAuthForm';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, radius, spacing, typography, weight, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		marginBottom: spacing[2],
	},
	formItem: {
		'& .ant-form-item-control-input-content': {
			flexDirection: 'column',
		},
	},
	spacing: {
		margin: 0,
	},
	spacingSection: {
		marginBottom: spacing[2],
	},
}));

const genderOptions = [
	{ label: '', value: '' },
	{ label: 'Female', value: 'female' },
	{ label: 'Male', value: 'male' },
	{ label: 'Custom', value: 'custom' },
	{ label: 'Prefer not to say', value: 'n/a' },
];

const Step3 = () => {
	const theme = useTheme();
	const { isCustomGender } = useAuthForm();
	const classes = useStyles({ isCustomGender, theme });
	const [isCustom, setIsCustom] = useState(false);
	const form = Form.useFormInstance();

	return (
		<Steps.Step step={3}>
			<Header>Create your {CHILLABIT} account</Header>
			<div className={cn(classes.container)}>
				<div>
					<div>
						<FormInput
							formConfig={{
								label: 'Choose your display name',
								name: 'username',
							}}
							large
						/>
						<p className={classes.usernameMsg}>
							Your display name can be anything you like. Your name or artist name are good choices.
						</p>
					</div>
					{/* <div className={cn({ [`${classes.spacingSection}`]: !errors.age })}> */}
					<div>
						<FormInputNumber
							formConfig={{
								label: 'Enter your age',
								name: 'age',
							}}
							large
						/>
					</div>
					{/* <div className={cn({ [`${classes.spacingSection}`]: !errors.gender })}> */}
					<div>
						<FormItem
							label='Enter your gender'
							styles={classes.formItem}
						>
							<FormSelect
								formConfig={{
									name: 'gender',
								}}
								large
								onChange={(value) => {
									if (value === 'custom') {
										setIsCustom(true);
									} else {
										setIsCustom(false);
										form.setFieldValue('customGender', '');
									}
								}}
								options={genderOptions}
							/>
							{isCustom && (
								<FormInput
									formConfig={{
										name: 'customGender',
									}}
									large
									maxLength={16}
									placeholder='Custom gender'
								/>
							)}
						</FormItem>
					</div>
				</div>
				<FormButton htmlType='submit'>Continue</FormButton>
			</div>
			<Footer>
				<p className={classes.content}>
					<span>
						By signing up I accept the
						<Link className={classes.link}>Terms of Use</Link>. I have read and understood the
						<Link className={classes.link}>Privacy Policy</Link>
						and
						<Link className={classes.link}>Cookies Policy</Link>.
					</span>
				</p>
			</Footer>
		</Steps.Step>
	);
};

export default Step3;
