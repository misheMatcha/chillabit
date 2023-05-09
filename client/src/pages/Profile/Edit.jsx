import React, { useEffect, useState } from 'react';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import { createUseStyles, useTheme } from 'react-jss';
import StyledButton from '../../components/General/StyledButton';
import StyledInput from '../../components/General/StyledInput';
import useAuth from '../../hooks/useAuth';
import useModal from '../../hooks/useModal';
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
	container: {},
	formBtnGroup: {
		...displayFlex,
	},
	linkGroup: {
		...displayFlex,
	},
	mainWrapper: {
		...displayFlex,
	},
	rowWrapper: {
		...displayFlex,
	},
	urlWrapper: {
		...displayFlex,
	},
}));

const ProfileEditForm = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [form] = Form.useForm();
	const { currentUser } = useAuth();
	const [loading, setLoading] = useState(true);
	const { closeModal } = useModal();

	useEffect(() => {
		if (currentUser) setLoading(false);
	}, [currentUser, loading]);

	return loading ? (
		<></>
	) : (
		<Form
			className={classes.container}
			form={form}
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
					<Form.Item name='username'>
						Display name *
						<StyledInput defaultValue={currentUser.username} />
					</Form.Item>
					<Form.Item name='username'>
						Profile URL *
						<div className={classes.urlWrapper}>
							{CHILLABIT}.com/
							<StyledInput defaultValue={currentUser.url} />
						</div>
					</Form.Item>
					<div className={classes.rowWrapper}>
						<Form.Item name='username'>
							First name
							<StyledInput defaultValue={currentUser.fname} />
						</Form.Item>
						<Form.Item name='username'>
							Last name
							<StyledInput defaultValue={currentUser.lname} />
						</Form.Item>
					</div>
					<div className={classes.rowWrapper}>
						<label>
							City
							<StyledInput defaultValue={currentUser.city} />
						</label>
						<label>
							Country
							<StyledInput defaultValue={currentUser.country} />
						</label>
					</div>
					<label>
						Bio
						<StyledInput defaultValue={currentUser.bio} />
					</label>
				</div>
			</div>
			<div>
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
			</div>
			<div className={classes.formBtnGroup}>
				<StyledButton
					label='Cancel'
					onClick={closeModal}
				/>
				<StyledButton label='Save changes' />
			</div>
		</Form>
	);
};

export default ProfileEditForm;
