import React from 'react';
import Radio from 'antd/lib/radio';
import Upload from 'antd/lib/upload';
import { createUseStyles, useTheme } from 'react-jss';
import StyledLink from '../../../components/General/StyledLink';
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
	container: {
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

const UploadForm = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<Upload.Dragger
			className={classes.container}
			multiple
			openFileDialogOnClick={false}
		>
			<div className={classes.form}>
				<div className={classes.title}>Drag and drop your tracks & albums here</div>
				<Upload
					className={classes.uploadBtn}
					showUploadList={false}
				>
					or choose files to upload
				</Upload>
				<div>
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
				</div>
			</div>
			<div className={classes.info}>
				Provide FLAC, WAV, ALAC, or AIFF for highest audio quality.
				<StyledLink label='Learn more about lossless HD.' />
			</div>
		</Upload.Dragger>
	);
};

export default UploadForm;
