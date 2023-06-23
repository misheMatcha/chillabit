import React from 'react';
import Checkbox from 'antd/lib/checkbox';
import Form from 'antd/lib/form';
import Radio from 'antd/lib/radio';
import Upload from 'antd/lib/upload';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import QuotaMeter from './QuotaMeter';
import FormItem from '../../../components/form/FormItem';
import FormRadio from '../../../components/form/FormRadio';
import StyledButton from '../../../components/General/StyledButton';
import StyledLink from '../../../components/General/StyledLink';
import { Step } from '../../../components/steps/index';
import useSteps from '../../../hooks/useSteps';
import { styles } from '../../../utils/styles';
import useUpload from '../hooks/useUpload';

const {
	alignItems,
	displayFlex,
	flexDirection,
	height,
	justifyContent,
	radius,
	spacing,
	textAlign,
	typography,
	weight,
} = styles;

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
	const form = Form.useFormInstance();
	const { nextStep } = useSteps();

	return (
		<Step step={1}>
			<QuotaMeter />
			<Form.Item name='trackList'>
				<Upload.Dragger
					beforeUpload={(file, fileList) => {
						// setFile(file);
						// setFileList(fileList);
						// nextStep();
						return false;
					}}
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
								beforeUpload={(file, fileList) => {
									// setFile(file);
									// setFileList(fileList);
									// nextStep();
									return false;
								}}
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
						<FormItem
							styles={classes.noBottomMargin}
							name='isPlaylist'
							valuePropName='checked'
						>
							<Checkbox>Make a playlist when multiple files are selected</Checkbox>
						</FormItem>
						<Form.Item
							className={cn(classes.noBottomMargin, classes.privacy)}
							label='Privacy'
							name='public'
						>
							<Radio.Group defaultValue={true}>
								<FormRadio
									styles={classes.radioBtn}
									value={true}
								>
									Public
								</FormRadio>
								<FormRadio
									styles={classes.radioBtn}
									value={false}
								>
									Private
								</FormRadio>
							</Radio.Group>
						</Form.Item>
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
