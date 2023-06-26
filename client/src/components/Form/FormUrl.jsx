import React, { useEffect, useRef, useState } from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import { createUseStyles } from 'react-jss';
import FormItem from './FormItem';
import useAuth from '../../hooks/useAuth';
import { CHILLABIT } from '../../utils/constants';
import { styles } from '../../utils/styles';
import StyledButton from '../General/StyledButton';

const { alignItems, displayFlex, justifyContent, radius, spacing, typography } = styles;

const useStyles = createUseStyles({
	container: {
		'& .ant-form-item-control-input::before': {
			color: '#666',
			content: ({ currentUser }) => `'${CHILLABIT}.com/${currentUser.url}/'`,
			marginRight: ({ editUrl }) => (editUrl ? 0 : spacing['0_5']),
			textTransform: 'lowercase',
		},
	},
	input: {
		'&:focus, &:hover': {
			borderColor: '#ccc',
			boxShadow: 'none',
		},
		borderRadius: radius[3],
		...typography.captions,
		height: spacing['3_25'],
		padding: spacing['0_25'],
	},
	wrapper: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...alignItems.center,
	},
});

const FormUrl = ({ name, ...props }) => {
	const [editUrl, setEditUrl] = useState(false);
	const [url, setUrl] = useState('');
	const { currentUser } = useAuth();
	const classes = useStyles({ currentUser, editUrl });

	const form = Form.useFormInstance();
	const ref = useRef(null);

	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (ref.current && !ref.current.input.contains(e.target) && form.getFieldValue(name) !== '')
				setEditUrl(false);
		};

		document.addEventListener('click', handleOutsideClick, true);
		return () => {
			document.removeEventListener('click', handleOutsideClick, true);
		};
	}, [form, name, ref]);

	return (
		<FormItem
			name={name}
			{...props}
			styles={classes.container}
		>
			<div className={classes.wrapper}>
				{editUrl ? (
					<Input
						className={classes.input}
						name={name}
						onChange={(e) => setUrl(e.target.value)}
						onPressEnter={() => setEditUrl(false)}
						ref={ref}
						value={url}
					/>
				) : (
					<>
						<span>{form.getFieldValue(name)}</span>
						<StyledButton
							icon={faPencil}
							onClick={() => setEditUrl(true)}
						/>
					</>
				)}
			</div>
		</FormItem>
	);
};

export default FormUrl;
