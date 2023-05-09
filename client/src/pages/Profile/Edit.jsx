import React, { useEffect, useState } from 'react';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { isEmpty, omitBy } from 'lodash';
import { createUseStyles, useTheme } from 'react-jss';
import StyledButton from '../../components/General/StyledButton';
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
	avatarWrapper: {
		height: 260,
		minWidth: 260,
		backgroundColor: 'blue',
		borderRadius: '50%',
		marginRight: 18,
	},
	container: {
		// ...displayFlex,
		// ...flexDirection.column,
		// border: '1px solid blue',
	},
	formItem: {
		'& .ant-row': {
			// border: '1px solid red',
		},
		'& .ant-form-item-row': {
			...flexDirection.column,
		},
		'& .ant-col': {
			flex: 0,
		},
		'& .ant-form-item-label': {
			'& label': {
				'&::after': {
					content: "''",
				},
				...alignItems.flexStart,
				...displayFlex,
				...typography.captions,
				fontSize: 13,
				// fontSize: spacing['1_5'],
				height: 25,
			},
		},
		'& .ant-form-item-control': {},
		// border: '1px solid blue',
		marginBottom: 15,
	},
	formBtnGroup: {
		...displayFlex,
	},
	halfWidth: {
		width: 256,
	},
	input: {
		height: 26,
		// backgroundColor: 'yellow',
	},
	linkGroup: {
		...displayFlex,
	},
	mainWrapper: {
		'& > div:nth-child(2)': {
			...width[100].percentage,
		},
		...displayFlex,
	},
	required: {
		'& .ant-form-item-label > label::after': {
			content: "'*'",
		},
	},
	rowWrapper: {
		...displayFlex,
		...justifyContent.spaceBetween,
	},
	urlWrapper: {
		...displayFlex,
	},
}));

const ProfileEditForm = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [form] = Form.useForm();
	const { currentUser, token } = useAuth();
	const [loading, setLoading] = useState(true);
	const { closeModal } = useModal();

	const { avatar, bio, city, country, fname, lname, support_url, url, username, website } =
		currentUser;

	useEffect(() => {
		if (currentUser) setLoading(false);
	}, [currentUser, loading]);

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
			<div>Edit your Profile</div>
			<div className={classes.mainWrapper}>
				<div className={classes.avatarWrapper}>
					<StyledButton
						icon={faCamera}
						label='Update image'
					/>
				</div>
				<div>
					<Form.Item
						className={cn(classes.formItem, classes.required)}
						label='Display name'
						name='username'
					>
						<StyledInput onChange={(e) => handleInputChange(e, 'username')} />
					</Form.Item>
					<Form.Item
						className={cn(classes.formItem, classes.required)}
						label='Profile URL'
						name='url'
					>
						<div className={classes.urlWrapper}>
							{CHILLABIT}.com/
							<StyledInput defaultValue={currentUser.url} />
						</div>
					</Form.Item>
					<div className={classes.rowWrapper}>
						<Form.Item
							className={cn(classes.formItem, classes.halfWidth)}
							label='First name'
							name='fname'
						>
							<StyledInput
								onChange={(e) => handleInputChange(e, 'fname')}
								styles={classes.input}
							/>
						</Form.Item>
						<Form.Item
							className={cn(classes.formItem, classes.halfWidth)}
							label='Last name'
							name='lname'
						>
							<StyledInput
								onChange={(e) => handleInputChange(e, 'lname')}
								styles={classes.input}
							/>
						</Form.Item>
					</div>
					<div className={classes.rowWrapper}>
						<Form.Item
							className={cn(classes.formItem, classes.halfWidth)}
							label='City'
							name='city'
						>
							<StyledInput
								onChange={(e) => handleInputChange(e, 'city')}
								styles={classes.input}
							/>
						</Form.Item>
						<Form.Item
							className={cn(classes.formItem, classes.halfWidth)}
							label='Country'
							name='country'
						>
							<StyledInput
								onChange={(e) => handleInputChange(e, 'country')}
								styles={classes.input}
							/>
						</Form.Item>
					</div>
					<Form.Item name='bio'>
						<StyledInput onChange={(e) => handleInputChange(e, 'bop')} />
					</Form.Item>
				</div>
			</div>
			{/* <div>
				<div>
					Your links <FontAwesomeIcon icon={faCircleQuestion} />
				</div>
				<div className={classes.linkGroup}>
					<StyledButton label='Add link' />
					<StyledButton
						label='Add support link'
						special
					/>
				</div>
			</div> */}
			<div className={classes.formBtnGroup}>
				<StyledButton
					label='Cancel'
					onClick={closeModal}
				/>
				<StyledButton
					htmlType='submit'
					label='Save changes'
				/>
			</div>
		</Form>
	);
};

export default ProfileEditForm;
