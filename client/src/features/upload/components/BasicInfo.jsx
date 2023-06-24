import React, { useEffect, useState } from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Form from 'antd/lib/form';
import Upload from 'antd/lib/upload';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from '../../../components/form/FormItem';
import FormUrl from '../../../components/form/FormUrl';
import StyledButton from '../../../components/General/StyledButton';
import { Step } from '../../../components/steps/index';
import { TRACK_GENERE_OPTIONS } from '../../../data/trackPlaceholders';
import { styles } from '../../../utils/styles';
import useUpload from '../hooks/useUpload';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	captions: {
		'& > textarea': {
			// backgroundColor: 'lavender',
		},
		'&:hover': {
			// borderColor: 'red',
		},
		height: 86,

		'& .ant-input-affix-wrapper': {
			// borderColor: 'red',
			backgroundColor: 'lavender !important',
		},
		'& .ant-input-affix-wrapper-focused': {
			// backgroundColor: 'lavender !important',
			// borderColor: 'red',
		},
		// '& .ant-input-textarea-affix-wrapper ant-input-textarea-show-count css-dev-only-do-not-override-w8mnev ant-input-show-count':
		// 	{},
	},
	container: {
		...displayFlex,
		marginTop: 25,
	},
	inputsWrapper: {
		...displayFlex,
		...flexDirection.column,
		flex: 1,
	},
	image: {
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.center,
		// backgroundImage: 'linear-gradient(135deg,#846170,#70929c)',
		backgroundImage: ({ coverPreview }) =>
			coverPreview ? `url(${coverPreview})` : 'linear-gradient(135deg,#846170,#70929c)',
		backgroundSize: 'cover',
		border: `1px solid #ccc`,
		height: 260,
		marginRight: spacing['2_25'],
		paddingBottom: spacing['3_25'],
		width: 260,
	},
	selectCustom: {
		opacity: 0,
	},
	selectWithHeader: {
		'& .ant-select-item-option-content': {
			'& > :first-child': {
				...typography.captions,
				borderBottom: `1px solid ${theme.background.highlight}`,
				color: '#999',
				cursor: 'default',
				fontSize: 13,
				height: spacing['2_5'],
				letterSpacing: -1,
				marginBottom: spacing[1],
				marginTop: spacing['2_5'],
				paddingLeft: spacing['0_25'],
				textTransform: 'uppercase',
			},
			'& > :last-child': {
				...alignItems.center,
				...displayFlex,
				height: spacing['3_5'],
				padding: `0 ${spacing['2_25']}px`,
			},
		},
		padding: '0 !important',
	},
	selectWrapper: {
		'& > div': {
			width: '50%',
		},
		'& > div:first-child': {
			marginRight: 10,
		},
		...displayFlex,
	},
}));

const BasicInfo = () => {
	const theme = useTheme();
	const [coverPreview, setCoverPreview] = useState('');
	const classes = useStyles({ coverPreview, theme });
	const [editCustomGenre, setEditCustomGenre] = useState(false);
	const { customGenre, setCustomGenre } = useUpload();

	const form = Form.useFormInstance();

	return (
		<Step step={3}>
			<div className={classes.container}>
				<FormItem
					name='track_cover'
					normalize={(values) => values.file}
					valuePropName='file'
					styles={classes.image}
				>
					<Upload
						beforeUpload={(file) => {
							setCoverPreview(URL.createObjectURL(file));
							return false;
						}}
						showUploadList={false}
					>
						<StyledButton
							icon={faCamera}
							label='Update image'
						/>
					</Upload>
				</FormItem>
				<div className={classes.inputsWrapper}>
					<FormItem
						label='Title'
						required
						inputConfig={{ type: 'text' }}
						name='title'
						rules={[{ message: 'Enter a title.', required: true }]}
					/>
					<FormUrl
						label='Permalink'
						name='permalink'
					/>
					<div className={classes.selectWrapper}>
						<FormItem
							label='Genre'
							name='genre'
							inputConfig={{
								onSelect: (value) => {
									if (value === 'custom') {
										setEditCustomGenre(true);
									} else {
										setEditCustomGenre(false);
										setCustomGenre('');
									}
								},
								options: TRACK_GENERE_OPTIONS,
								type: 'select',
							}}
						/>
						<FormItem
							styles={cn({ [`${classes.selectCustom}`]: !editCustomGenre })}
							label='Custom Genre'
							inputConfig={{
								onChange: (e) => setCustomGenre(e.target.value),
								type: 'text',
								value: customGenre,
							}}
						/>
					</div>
					{/* <div>additional tags</div> */}
					{/* <FormItem
						label='Description'
						name='desc'
						inputConfig={{ placeholder: 'Describe your track', rows: 6, type: 'textarea' }}
					/> */}
					{/* <FormItem
						label='Caption'
						name='caption'
						inputConfig={{
							maxLength: 140,
							placeholder: 'Add a caption to your post (optional)',
							showCount: true,
							styles: classes.captions,
							type: 'textarea',
					}} /> */}
					{/* <div>privacy</div> */}
				</div>
			</div>
		</Step>
	);
};

export default BasicInfo;
