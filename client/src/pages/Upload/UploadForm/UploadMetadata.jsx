import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import StyledFormItem from '../../../components/General/StyledFormItem';
import { styles } from '../../../utils/styles';

const { displayFlex, justifyContent, spacing, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
	section: {
		...displayFlex,
	},
}));

const UploadMetadata = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div>
			<div className={classes.section}>
				<StyledFormItem type='checkbox' />
				<StyledFormItem
					label='Contains music'
					small
				/>
				<StyledFormItem
					label='Artist'
					small
				/>
				<StyledFormItem
					label='Publisher'
					small
				/>
				<StyledFormItem
					label='ISRC'
					small
				/>
				<StyledFormItem
					label='Composer'
					small
				/>
				<StyledFormItem
					label='Release title'
					small
				/>
			</div>
			<StyledFormItem label='Buy-link' />
			<div className={classes.section}>
				<StyledFormItem label='Album title' />
				<StyledFormItem label='Record label' />
				<StyledFormItem label='Release date' />
			</div>
			<div className={classes.section}>
				<StyledFormItem label='Barcode' />
				<StyledFormItem label='ISWC' />
			</div>
			<div className={classes.section}>
				<StyledFormItem label='P line' />
				<StyledFormItem label='Contains explicit content' />
			</div>
			<div>license</div>
			<div>radio</div>
		</div>
	);
};

export default UploadMetadata;
