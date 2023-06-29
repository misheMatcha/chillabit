import React, { useEffect, useState } from 'react';
import Form from 'antd/lib/form';
import { createUseStyles, useTheme } from 'react-jss';
import { styles } from '../../../../utils/styles';
import useUpload from '../../hooks/useUpload';

const { displayFlex, height, justifyContent, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	contianer: {
		marginTop: 30,
	},
	dataProgressBar: {
		backgroundColor: theme.color.special,
	},
	fileProgressBar: {
		backgroundColor: '#06c',
	},
	info: {
		...displayFlex,
		...justifyContent.spaceBetween,
		...typography.captions,
		fontSize: 13,
		height: spacing['2_5'],
	},
	status: {
		'& > div': {
			...height[100].percentage,
			width: 399.5,
		},
		...displayFlex,
		...justifyContent.spaceBetween,
		height: 5,
	},
}));

const Status = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const form = Form.useFormInstance();
	const { file, fileList } = useUpload();

	useEffect(() => {});

	return (
		<div className={classes.contianer}>
			<div className={classes.info}>
				<span>{file && file.name}</span>
				<span>Ready. Click Save to post this track.</span>
			</div>
			<div className={classes.status}>
				<div className={classes.fileProgressBar} />
				<div className={classes.dataProgressBar} />
			</div>
		</div>
	);
};

export default Status;
