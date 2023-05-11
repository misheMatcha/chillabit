import React, { useEffect, useState } from 'react';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import {
	faCamera,
	faDollarSign,
	faPencil,
	faTrash,
	faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { isEmpty, omitBy } from 'lodash';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import StyledButton from '../../components/General/StyledButton';
import StyledFormItem from '../../components/General/StyledFormItem';
import StyledInput from '../../components/General/StyledInput';
import useAuth from '../../hooks/useAuth';
import useModal from '../../hooks/useModal';
import axios from '../../utils/axios';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';

const {
	alignItems,
	displayFlex,
	flexDirection,
	justifyContent,
	radius,
	spacing,
	typography,
	weight,
	width,
} = styles;

const useStyles = createUseStyles((theme) => ({
	avatarWrapper: {
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.center,
		backgroundImage: ({ currentUser }) =>
			currentUser.avatar ? `url(${currentUser.avatar})` : 'linear-gradient(135deg,#8e8485,#70929c)',
		borderRadius: '50%',
		height: 260,
		marginRight: spacing['2_25'],
		minWidth: 260,
		paddingBottom: spacing[4],
	},
	container: {
		'& > div:not(:last-child)': {
			padding: 25,
		},
		'& input, textarea': {
			borderRadius: radius[3],
		},
	},
	formBtnGroup: {
		'& > :first-child': {
			'&:hover': {
				borderColor: 'transparent !important',
			},
			borderColor: 'transparent',
			marginRight: 5,
		},
		'& > :last-child': {
			fontWeight: weight[600],
		},
		...displayFlex,
		...justifyContent.flexEnd,
		borderTop: `1px solid ${theme.background.highlight}`,
		padding: 25,
	},
	input: {
		...typography.captions,
		fontSize: 13,
		height: spacing['3_25'],
		padding: `${spacing['0_25']}px 7px`,
	},
	mainWrapper: {
		'& > div:nth-child(2)': {
			...width[100].percentage,
		},
		...displayFlex,
	},
	rowWrapper: {
		...displayFlex,
		...justifyContent.spaceBetween,
	},
	title: {
		...typography.h2,
		borderBottom: `1px solid ${theme.background.highlight}`,
		fontSize: spacing['2_5'] + spacing['0_25'],
		fontWeight: weight[500],
		marginBottom: spacing[3],
	},
	urlEdit: {
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.spaceBetween,
		color: '#333',
		flexGrow: 1,
	},
	urlWrapper: {
		'& input': {
			height: spacing['3_25'],
			padding: spacing['0_25'],
		},
		...alignItems.center,
		...displayFlex,
		color: '#999',
		height: spacing[3_25],
		textTransform: 'lowercase',
	},
}));

const ProfileEditForm = () => {
	const theme = useTheme();
	const [form] = Form.useForm();
	const { currentUser, token } = useAuth();
	const classes = useStyles({ currentUser, theme });
	const [loading, setLoading] = useState(true);
	const [editUrl, setEditUrl] = useState(false);
	const [editWebsite, setEditWebsite] = useState(false);
	const [editSupportUrl, setEditSupportUrl] = useState(false);
	const { closeModal } = useModal();

	useEffect(() => {
		if (currentUser) {
			form.setFieldValue('url', currentUser.url);
			setLoading(false);
		}
	}, [currentUser, form, loading]);

	const updateUser = async (values) => {
		const config = {
			headers: {
				authorization: token,
				'content-type': 'multipart/form-data',
			},
		};

		const updatedValues = omitBy(values, (v) => isEmpty(v));

		try {
			const response = await axios.put(`users/${currentUser.url}`, { user: updatedValues }, config);
			console.log(response.data);
		} catch (err) {
			console.log(err.response.data);
		}
	};

	const handleInputChange = (e, field) => {
		form.setFieldValue(field, e.target.value);
	};

	return loading ? (
		<></>
	) : (
		<Form
			className={classes.container}
			form={form}
			initialValues={currentUser}
			onFinish={(values) => updateUser(values)}
		>
			<div className={classes.title}>Edit your Profile</div>
			<div className={classes.mainWrapper}>
				<div className={classes.avatarWrapper}>
					<StyledButton
						icon={faCamera}
						label='Update image'
					/>
				</div>
				<div>
					<StyledFormItem
						label='Display name'
						onChange={(e) => handleInputChange(e, 'username')}
						name='username'
						required
					/>
					<StyledFormItem
						label='Profile URL'
						name='url'
						required
					>
						<div className={classes.urlWrapper}>
							{CHILLABIT}.com/
							{editUrl ? (
								<>
									<StyledInput
										defaultValue={currentUser.url}
										styles={classes.input}
									/>
									<StyledButton
										icon={faXmark}
										onClick={() => setEditUrl(false)}
									/>
								</>
							) : (
								<span className={classes.urlEdit}>
									{form.getFieldValue('url')}
									<StyledButton
										icon={faPencil}
										onClick={() => setEditUrl(true)}
									/>
								</span>
							)}
						</div>
					</StyledFormItem>
					<div className={classes.rowWrapper}>
						<StyledFormItem
							label='First name'
							name='fname'
							onChange={(e) => handleInputChange(e, 'fname')}
							small
						/>
						<StyledFormItem
							label='Last name'
							name='lname'
							onChange={(e) => handleInputChange(e, 'lname')}
							small
						/>
					</div>
					<div className={classes.rowWrapper}>
						<StyledFormItem
							label='City'
							name='city'
							onChange={(e) => handleInputChange(e, 'city')}
							small
						/>
						<StyledFormItem
							label='Country'
							name='country'
							onChange={(e) => handleInputChange(e, 'country')}
							small
						/>
					</div>
					<StyledFormItem
						label='Bio'
						name='bio'
					>
						<Input.TextArea
							onChange={(e) => handleInputChange(e, 'bio')}
							name='bio'
							placeholder='Tell the world a little bit about yourself. The shorter the better.'
							rows={3}
						/>
					</StyledFormItem>
				</div>
			</div>
			<div className={classes.linkWrapper}>
				<div>
					Your links <FontAwesomeIcon icon={faCircleQuestion} />
				</div>
				<div className={classes.linkGroup}>
					{editWebsite ? (
						<StyledFormItem name='website'>
							<>
								<StyledInput name='website' />
							</>
						</StyledFormItem>
					) : (
						<StyledButton
							label='Add link'
							onClick={() => setEditWebsite(true)}
						/>
					)}
					{editSupportUrl ? (
						<StyledFormItem name='support_url'>
							<>
								<StyledInput name='support_url' />
							</>
						</StyledFormItem>
					) : (
						<StyledButton
							label='Add support link'
							onClick={() => setEditSupportUrl(true)}
							special
						/>
					)}
				</div>
			</div>
			<div className={classes.formBtnGroup}>
				<StyledButton
					label='Cancel'
					onClick={closeModal}
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
