import React, { useState } from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Form from 'antd/lib/form';
import Upload from 'antd/lib/upload';
import omit from 'lodash/omit';
import { createUseStyles, useTheme } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import EditInputs from './EditInputs';
import EditLinks from './EditLinks';
import StyledButton from '../../../components/General/StyledButton';
import useAuth from '../../../hooks/useAuth';
import useGeneral from '../../../hooks/useGeneral';
import useModal from '../../../hooks/useModal';
import axios from '../../../utils/axios';
import { hasErrors } from '../../../utils/general';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	avatar: {
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.center,
		backgroundImage: ({ avatarPreview }) =>
			avatarPreview ? `url(${avatarPreview})` : 'linear-gradient(135deg,#8e8485,#70929c)',
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
	const { currentUser, setCurrentUser, token } = useAuth();
	const { setUser } = useGeneral();
	const [avatarPreview, setAvatarPreview] = useState(currentUser.avatar);
	const classes = useStyles({ avatarPreview, currentUser, theme });
	const [form] = Form.useForm();
	const { closeModal } = useModal();

	const navigate = useNavigate();

	const onSubmit = async (values) => {
		if (hasErrors(form.getFieldsError())) return;

		const config = {
			headers: {
				authorization: token,
				'content-type': 'multipart/form-data',
			},
		};

		const updatedValues = typeof values.avatar === 'string' ? omit(values, ['avatar']) : values;

		try {
			const response = await axios.put(
				`/users/${currentUser.url}`,
				{ user: updatedValues },
				config
			);
			setCurrentUser(response.data);
			setUser(response.data);
			closeModal();
			navigate(`/${updatedValues.url}`, { replace: true });
		} catch (err) {
			console.log(err.response.data);
		}
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
					<Form.Item
						name='avatar'
						normalize={(values) => values.file}
						valuePropName='file'
					>
						<Upload
							beforeUpload={(file) => {
								setAvatarPreview(URL.createObjectURL(file));
								return false;
							}}
							showUploadList={false}
						>
							<StyledButton
								icon={faCamera}
								label='Update image'
							/>
						</Upload>
					</Form.Item>
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
