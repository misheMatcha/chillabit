import React, { useEffect, useState } from 'react';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faCamera, faDollarSign, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import * as cn from 'classnames';
import { isEmpty, omitBy } from 'lodash';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
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
	formItem: {
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
				height: 25,
			},
		},
		'& .ant-form-item-row': {
			...flexDirection.column,
		},
		paddingBottom: 15,
	},
	halfWidth: {
		'& .ant-form-item-control-input': {
			minHeight: spacing['3_25'],
		},
		width: 256,
	},
	input: {
		...typography.captions,
		fontSize: 13,
		height: spacing['3_25'],
		padding: `${spacing['0_25']}px 7px`,
	},
	linkContact: {
		'& > input:nth-child(2)': {
			width: 485,
		},
		'& > input:nth-child(3)': {
			width: 243,
		},
	},
	linkGroup: {
		...displayFlex,
	},
	linkList: {
		'& li': {
			...displayFlex,
			...justifyContent.spaceBetween,
		},
		margin: 0,
		padding: 0,
	},
	linkWrapper: {
		border: '1px solid black',
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
	const [linkList, setLinkList] = useState([{ type: 'contact' }, { type: 'support' }]);
	const { closeModal } = useModal();

	useEffect(() => {
		if (currentUser) {
			form.setFieldValue('url', currentUser.url);
			// setLinkList(currentUser.links);
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

		form.setFieldValue('links', linkList);
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
							{editUrl ? (
								<StyledInput
									defaultValue={currentUser.url}
									styles={classes.input}
								/>
							) : (
								<span className={classes.urlEdit}>
									{form.getFieldValue('url')}{' '}
									<StyledButton
										icon={faPencil}
										onClick={() => setEditUrl(true)}
									/>
								</span>
							)}
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
					<Form.Item
						className={classes.formItem}
						label='Bio'
						name='bio'
					>
						<Input.TextArea
							name='bio'
							placeholder='Tell the world a little bit about yourself. The shorter the better.'
							rows={3}
						/>
					</Form.Item>
				</div>
			</div>
			<div className={classes.linkWrapper}>
				<div>
					Your links <FontAwesomeIcon icon={faCircleQuestion} />
				</div>
				<ul className={classes.linkList}>
					{linkList.map((link, i) =>
						link.type === 'contact' ? (
							<li
								className={classes.linkContact}
								key={i}
							>
								<FontAwesomeIcon icon={faTrash} />
								<StyledInput
									placeholder='Web or email address'
									styles={classes.input}
								/>
								<StyledInput
									placeholder='Short title'
									styles={classes.input}
								/>
								<StyledButton icon={faTrash} />
							</li>
						) : (
							<li
								className={classes.linkItem}
								key={i}
							>
								<FontAwesomeIcon icon={faDollarSign} />
								<div>
									<StyledInput
										placeholder='e.g.: http://paypal.me/username'
										styles={classes.input}
									/>
									<div>
										Supported platforms: PayPal, Cash app, Venmo, Bandcamp, Shopify, Kickstarter,
										Patreon, and Gofundme. <Link>Learn more</Link>
									</div>
								</div>
								<StyledButton icon={faCircleQuestion} />
								<StyledButton icon={faTrash} />
							</li>
						)
					)}
				</ul>
				<div className={classes.linkGroup}>
					<StyledButton
						label='Add link'
						onClick={() => setLinkList([...linkList, { title: '', type: 'contact', url: '' }])}
					/>
					<StyledButton
						label='Add support link'
						onClick={() => setLinkList([...linkList, { type: 'support', url: '' }])}
						special
					/>
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
