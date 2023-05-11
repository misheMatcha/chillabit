import React, { useState } from 'react';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import { createUseStyles, useTheme } from 'react-jss';
import StyledButton from '../../../components/General/StyledButton';
import StyledFormItem from '../../../components/General/StyledFormItem';
import StyledInput from '../../../components/General/StyledInput';
import { CHILLABIT } from '../../../utils/constants';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, justifyContent, radius, spacing, typography } = styles;

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
	url: {
		...alignItems.center,
		...displayFlex,
	},
	urlForm: {
		margin: `${spacing['0_5']}px 0 ${spacing['1_5']}px`,
	},
	urlInput: {
		...typography.captions,
		fontSize: 13,
		height: spacing['3_25'],
		padding: spacing['0_25'],
	},
	urlPath: {
		flexGrow: 1,
	},
	urlPrefix: {
		color: '#999',
		marginRight: ({ editUrl }) => (editUrl ? 0 : spacing['0_5']),
		textTransform: 'lowercase',
	},
}));

const EditInputs = () => {
	const theme = useTheme();
	const [editUrl, setEditUrl] = useState(false);
	const classes = useStyles({ editUrl, theme });
	const form = Form.useFormInstance();

	return (
		<div className={classes.container}>
			<StyledFormItem
				label='Disyplay name'
				name='username'
				required
			/>
			<StyledFormItem
				formStyles={classes.urlForm}
				label='Profile URL'
				name='url'
				required
			>
				<div className={classes.url}>
					<span className={classes.urlPrefix}>{`${CHILLABIT}.com/`}</span>
					{editUrl ? (
						<div className={classes.urlPath}>
							<StyledInput
								name='url'
								styles={classes.urlInput}
							/>
						</div>
					) : (
						<>
							<span className={classes.urlPath}>{form.getFieldValue('url')}</span>
							<StyledButton
								icon={faPencil}
								onClick={() => setEditUrl(true)}
							/>
						</>
					)}
				</div>
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
