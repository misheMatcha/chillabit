import React from 'react';
import Form from 'antd/lib/form';
import Upload from 'antd/lib/upload';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import QuotaMeter from './QuotaMeter';
import { FormCheckbox, FormItem, FormRadioGroup } from '../../../components/form/index';
import StyledButton from '../../../components/General/StyledButton';
import StyledLink from '../../../components/General/StyledLink';
import { Step } from '../../../components/steps/index';
import useSteps from '../../../hooks/useSteps';
import { styles } from '../../../utils/styles';
import useUpload from '../hooks/useUpload';

const { displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	dragger: {
		'& .ant-upload-drag': {
			'&:hover': {
				borderColor: `${theme.background.highlight} !important`,
				cursor: 'default',
			},
			backgroundColor: theme.background.surface,
			border: `1px solid ${theme.background.highlight}`,
			borderRadius: 0,
			boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
		},
	},
	info: {
		'& > a': {
			...typography.captions,
			marginLeft: spacing['0_5'],
		},
		...displayFlex,
		...justifyContent.center,
		...typography.captions,
		fontWeight: weight[400],
		paddingBottom: spacing['1_5'],
	},
	main: {
		padding: '100px 0',
	},
	noBottomMargin: {
		marginBottom: 0,
	},
	privacy: {
		'& .ant-form-item-label > label': {
			...typography.captions,
			fontSize: `${spacing['1_5']}px !important`,
		},
		...displayFlex,
		...justifyContent.center,
	},
	title: {
		...typography.h2,
		fontSize: 22,
		fontWeight: weight[400],
	},
	uploadBtn: {
		'& .ant-btn': {
			...displayFlex,
			...justifyContent.center,
			fontWeight: weight[500],
			width: spacing['3_7'] * 10,
		},
		'& .ant-upload-select': {
			paddingBottom: `${spacing['0_7']}px !important`,
		},
	},
}));

const FormFiles = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const { fileList, setFile, setFileList } = useUpload();
	const { nextStep } = useSteps();

	const beforeUpload = (file, fileList) => {
		setFile(file);
		setFileList(fileList);
		nextStep();
		return false;
	};

	return (
		<Step step={1}>
			<QuotaMeter />
			<Form.Item name='trackList'>
				<Upload.Dragger
					beforeUpload={beforeUpload}
					className={classes.dragger}
					multiple
					showUploadList={false}
					openFileDialogOnClick={false}
					fileList={fileList}
				>
					<div className={classes.main}>
						<div className={classes.title}>Drag and drop your tracks & albums here</div>
						<FormItem
							styles={classes.noBottomMargin}
							name='trackList'
						>
							<Upload
								beforeUpload={beforeUpload}
								className={classes.uploadBtn}
								multiple
								showUploadList={false}
								fileList={fileList}
							>
								<StyledButton
									special
									label='or choose files to upload'
								/>
							</Upload>
						</FormItem>
						<FormCheckbox
							formConfig={{
								name: 'isPlaylist',
								styles: classes.noBottomMargin,
								valuePropName: 'checked',
							}}
							label='Make a playlist when multiple files are selected'
						/>
						<FormRadioGroup
							formConfig={{
								className: cn(classes.noBottomMargin, classes.privacy),
								colon: true,
								label: 'Privacy',
								name: 'public',
								topLabel: false,
							}}
							options={[
								{
									label: 'Public',
									styles: classes.radioBtn,
									value: true,
								},
								{
									label: 'Private',
									styles: classes.radioBtn,
									value: false,
								},
							]}
						/>
					</div>
					<div className={classes.info}>
						Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.
						<StyledLink label='Learn more about lossless HD.' />
					</div>
				</Upload.Dragger>
			</Form.Item>
		</Step>
	);
};

export default FormFiles;
