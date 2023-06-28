import React, { useState } from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Upload from 'antd/lib/upload';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';
import StyledButton from '../General/StyledButton';

const { alignItems, displayFlex, justifyContent, spacing } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.center,
		backgroundImage: ({ preview }) =>
			preview ? `url(${preview})` : 'linear-gradient(135deg,#846170,#70929c)',
		backgroundSize: 'cover',
		border: `1px solid #ccc`,
		height: 260,
		marginRight: spacing['2_25'],
		paddingBottom: spacing['3_25'],
		width: 260,
	},
	upload: {
		...displayFlex,
		...justifyContent.center,
	},
}));

const FormImageUpload = ({ formConfig, styles, ...props }) => {
	const theme = useTheme();
	const [preview, setPreview] = useState('');
	const classes = useStyles({ preview, theme });

	return (
		<FormItem
			normalize={(values) => values.file}
			valuePropName='file'
			styles={cn(classes.container, formConfig.styles)}
			{...formConfig}
		>
			<Upload
				beforeUpload={(file) => {
					setPreview(URL.createObjectURL(file));
					return false;
				}}
				showUploadList={false}
				className={cn(classes.upload, styles)}
				{...props}
			>
				<StyledButton
					icon={faCamera}
					label='Update image'
				/>
			</Upload>
		</FormItem>
	);
};

export default FormImageUpload;
