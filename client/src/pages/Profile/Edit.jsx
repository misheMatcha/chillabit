import React from 'react';
import Form from 'antd/lib/form';
import { createUseStyles, useTheme } from 'react-jss';
import StyledButton from '../../components/General/StyledButton';
import useAuth from '../../hooks/useAuth';
import { styles } from '../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	radius,
	spacing,
	textAlign,
	truncateText,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		// width: 850,
	},
	avatarWrapper: {
		height: 260,
		width: 260,
		backgroundColor: 'blue',
		borderRadius: '50%',
	},
}));

const ProfileEditForm = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [form] = Form.useForm();
	const { currentUser } = useAuth();

	return (
		<Form
			className={classes.container}
			form={form}
		>
			<div>Edit your Profile</div>
			<div>
				<div className={classes.avatarWrapper}>Update image</div>
				<div>
					<div>Display name</div>
					<div>Profile URL</div>
					<div>
						<div>First name</div>
						<div>Last name</div>
						<div>City</div>
						<div>Country</div>
						<div>Bio</div>
					</div>
				</div>
			</div>
			<div>Your links</div>
			<div>
				<StyledButton label='Add link' />
				<StyledButton
					label='Add support link'
					special
				/>
			</div>
			<div>submit cancel</div>
		</Form>
	);
};

export default ProfileEditForm;
