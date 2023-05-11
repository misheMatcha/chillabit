import React, { useEffect } from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Form from 'antd/lib/form';
import { createUseStyles, useTheme } from 'react-jss';
import EditInputs from './EditInputs';
import EditLinks from './EditLinks';
import StyledButton from '../../../components/General/StyledButton';
import useAuth from '../../../hooks/useAuth';
import useModal from '../../../hooks/useModal';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	avatar: {
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.center,
		backgroundImage: ({ currentUser }) =>
			currentUser.avatar ? `url(${currentUser.avatar})` : 'linear-gradient(135deg,#8e8485,#70929c)',
		borderRadius: '50%',
		height: 260,
		marginRight: spacing['2_25'],
		minWidth: 260,
		paddingBottom: spacing['3_5'],
	},
	containerBtns: {
		'& > :first-child': {
			marginRight: spacing['0_7'],
		},
		...displayFlex,
		...justifyContent.flexEnd,
		borderTop: `1px solid ${theme.background.highlight}`,
		padding: 25,
	},
	main: {
		'& > div:last-child': {
			flexGrow: 1,
		},
		...displayFlex,
		padding: '25px 25px 0',
	},
	title: {
		'& > span': {
			...displayFlex,
			borderBottom: `1px solid ${theme.background.highlight}`,
		},
		...typography.h2,
		fontSize: 22,
		fontWeight: weight[500],
		marginBottom: spacing[3],
		padding: '25px 25px 9px',
	},
}));

const ProfileEditForm = () => {
	const theme = useTheme();
	const { currentUser } = useAuth();
	const classes = useStyles({ currentUser, theme });
	const [form] = Form.useForm();
	const { closeModal } = useModal();

	useEffect(() => {
		// temp placeholder for testing form lists
		const links = [
			{
				type: 'support',
				url: 'hello',
			},
			{
				title: 'hi there',
				type: 'contact',
				url: 'url',
			},
		];

		form.setFieldValue('links', links);
	}, [form]);

	const onSubmit = (values) => {
		console.log(values);
	};

	return (
		<Form
			form={form}
			initialValues={currentUser}
			onFinish={(values) => onSubmit(values)}
		>
			<div className={classes.title}>
				<span>Edit your Profile</span>
			</div>
			<div className={classes.main}>
				<div className={classes.avatar}>
					<StyledButton
						icon={faCamera}
						label='Update image'
					/>
				</div>
				<EditInputs />
			</div>
			<EditLinks />
			<div className={classes.containerBtns}>
				<StyledButton
					label='Cancel'
					onClick={() => closeModal()}
				/>
				<StyledButton
					htmlType='submit'
					label='Save changes'
					special
				/>
			</div>
		</Form>
	);
};

export default ProfileEditForm;
