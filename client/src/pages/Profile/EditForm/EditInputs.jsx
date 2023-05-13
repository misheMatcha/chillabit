import React, { useEffect, useRef, useState } from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import { createUseStyles, useTheme } from 'react-jss';
import StyledButton from '../../../components/General/StyledButton';
import StyledFormItem from '../../../components/General/StyledFormItem';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, justifyContent, radius, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		'& > div:last-child': {
			marginBottom: 0,
		},
		borderRadius: radius[3],
	},
	row: {
		...displayFlex,
		...justifyContent.spaceBetween,
	},
	urlForm: {
		'& .ant-form-item-control-input-content': {
			...alignItems.center,
			...displayFlex,
		},
		'& .ant-form-item-control-input::before': {
			color: '#666',
			content: `'${CHILLABIT}.com/'`,
			marginRight: ({ editUrl }) => (editUrl ? 0 : spacing['0_5']),
			textTransform: 'lowercase',
		},
		margin: `${spacing['0_5']}px 0 ${spacing['1_5']}px`,
	},
	urlInput: {
		'&:focus, &:hover': {
			borderColor: '#ccc',
			boxShadow: 'none',
		},
		...typography.captions,
		backgroundColor: theme.color.white,
		borderColor: '#ccc',
		borderRadius: radius[4],
		color: '#333',
		fontSize: 13,
		fontWeight: weight[400],
		height: spacing['3_25'],
		padding: spacing['0_25'],
	},
	urlPath: {
		flexGrow: 1,
	},
}));

const EditInputs = () => {
	const theme = useTheme();
	const [editUrl, setEditUrl] = useState(false);
	const classes = useStyles({ editUrl, theme });
	const form = Form.useFormInstance();
	const ref = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (ref.current && !ref.current.input.contains(e.target) && form.getFieldValue('url') !== '')
				setEditUrl(false);
		};

		document.addEventListener('click', handleOutsideClick, true);
		return () => {
			document.removeEventListener('click', handleOutsideClick, true);
		};
	}, [form, ref]);

	return (
		<div className={classes.container}>
			<StyledFormItem
				label='Display name'
				name='username'
				rules={[
					{ message: 'Enter your display name. You can change it later.', required: true },
					{ max: 50, message: 'Enter a display name that is up to 50 characters.' },
				]}
				required
			/>
			<StyledFormItem
				formStyles={classes.urlForm}
				label='Profile URL'
				name='url'
				required
				rules={[{ message: 'Enter a profile URL.', required: true }]}
			>
				{editUrl ? (
					<Input
						name='url'
						ref={ref}
						className={classes.urlInput}
					/>
				) : (
					<>
						<span className={classes.urlPath}>{form.getFieldValue('url')}</span>
						<StyledButton
							icon={faPencil}
							onClick={() => setEditUrl(true)}
						/>
					</>
				)}
			</StyledFormItem>
			<div className={classes.row}>
				<StyledFormItem
					label='First name'
					name='fname'
					small
				/>
				<StyledFormItem
					label='Last name'
					name='lname'
					small
				/>
			</div>
			<div className={classes.row}>
				<StyledFormItem
					label='City'
					name='city'
					small
				/>
				<StyledFormItem
					label='Country'
					name='country'
					small
				/>
			</div>
			<StyledFormItem
				label='Bio'
				name='bio'
			>
				<Input.TextArea
					name='bio'
					rows={3}
				/>
			</StyledFormItem>
		</div>
	);
};

export default EditInputs;
