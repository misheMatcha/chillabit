import React, { useEffect, useState } from 'react';
import Checkbox from 'antd/lib/checkbox';
import Form from 'antd/lib/form';
import Radio from 'antd/lib/radio';
import Upload from 'antd/lib/upload';
import { createUseStyles, useTheme } from 'react-jss';
import QuotaMeter from './QuotaMeter';
import StyledLink from '../../../components/General/StyledLink';
import { Step } from '../../../components/steps/index';
import useSteps from '../../../hooks/useSteps';
import { styles } from '../../../utils/styles';

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
} = styles;

const useStyles = createUseStyles((theme) => ({
	dragger: {
		'& .ant-upload .ant-upload-btn': {
			'& .ant-upload-drag-container': {
				...displayFlex,
				...flexDirection.column,
				...justifyContent.spaceBetween,
				...height[100].percentage,
			},
			...displayFlex,
			...flexDirection.column,
			padding: 0,
		},
		'& .ant-upload-drag': {
			'&:hover': {
				borderColor: `${theme.background.highlight} !important`,
				cursor: 'default',
			},
			backgroundColor: theme.background.surface,
			border: `1px solid ${theme.background.highlight}`,
			borderRadius: 0,
			boxShadow: `0 ${spacing['0_25']}px ${spacing['1_5']}px -5px rgba(0,0,0,.1)`,
			height: 391,
		},
	},
	form: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		padding: '100px 0',
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
		marginBottom: spacing['3_25'],
	},
	privacy: {
		'& > :first-child': {
			marginRight: spacing[1],
		},
		...typography.captions,
		fontSize: 13,
	},
	privacyBtn: {
		'& .ant-radio': {
			'& .ant-radio-inner': {
				'&::after': {
					backgroundColor: '#333',
					content: "''",
					display: 'block',
					height: 28,
					inset: 1,
					position: 'absolute',
					width: 28,
				},
				backgroundColor: 'transparent',
				borderColor: '#666',
			},
		},
		'& > span:last-child': {
			marginLeft: spacing['0_7'],
			padding: 0,
		},
		...typography.captions,
		fontSize: 13,
	},
	title: {
		...typography.h2,
		fontSize: 22,
		fontWeight: weight[400],
	},
	uploadBtn: {
		'& .ant-upload': {
			padding: '0px !important',
		},
		'& .ant-upload-select': {
			'& .ant-upload': {
				...alignItems.center,
				...displayFlex,
				...height[100].percentage,
				padding: '0px !important',
			},
		},
		...displayFlex,
		...justifyContent.center,
		...typography.body,
		backgroundColor: theme.button.backgroundColor.special,
		borderRadius: radius[3],
		color: theme.button.color.special,
		cursor: 'pointer',
		height: spacing[5],
		margin: `${spacing[2]}px 0 ${spacing['1_5']}px`,
		width: 300,
	},
}));

const FormFiles = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [fileList, setFilesList] = useState([]);
	const form = Form.useFormInstance();
	const { nextStep } = useSteps();

	return (
		<Step step={1}>
			<QuotaMeter />
			<Form.Item
				name='trackList'
				// valuePropName='fileList'
			>
				<Upload.Dragger
					beforeUpload={() => {
						nextStep();
						return false;
					}}
					className={classes.dragger}
					multiple
					showUploadList={false}
					openFileDialogOnClick={false}
					fileList={fileList}
				>
					{/* <div> */}
					<div className={classes.title}>Drag and drop your tracks & albums here</div>
					<Form.Item
						name='trackList'
						// valuePropName='fileList'
					>
						<Upload
							beforeUpload={() => {
								nextStep();
								return false;
							}}
							// beforeUpload={() => false}
							multiple
							showUploadList={false}
							fileList={fileList}
						>
							or choose files to upload
						</Upload>
					</Form.Item>
					<Form.Item
						name='playlist'
						valuePropName='checked'
					>
						<Checkbox> Make a playlist when multiple files are selected</Checkbox>
					</Form.Item>
					<Form.Item name='privacy'>
						<label className={classes.privacy}>
							<span>Privacy:</span>
							<Radio.Group defaultValue={true}>
								<Radio
									className={classes.privacyBtn}
									value={true}
								>
									Public
								</Radio>
								<Radio
									className={classes.privacyBtn}
									value={false}
								>
									Private
								</Radio>
							</Radio.Group>
						</label>
					</Form.Item>
					<div className={classes.info}>
						Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.
						<StyledLink label='Learn more about lossless HD.' />
					</div>
					{/* </div> */}
				</Upload.Dragger>
			</Form.Item>
		</Step>
	);
};

export default FormFiles;
