import React from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Upload from 'antd/lib/upload';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from '../../../components/Form/FormItem';
import StyledButton from '../../../components/General/StyledButton';
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
		...displayFlex,
		marginTop: 25,
	},
	image: {
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.center,
		backgroundImage: 'linear-gradient(135deg,#846170,#70929c)',
		height: 260,
		marginRight: 18,
		paddingBottom: 26,
		width: 260,
	},
}));

const UploadBasicInfo = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	return (
		<div className={classes.container}>
			<div className={classes.image}>
				<Upload>
					<StyledButton
						icon={faCamera}
						label='Upload image'
					/>
				</Upload>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
				<FormItem
					label='Title'
					required
					inputConfig={{ type: 'text' }}
					name='title'
				/>
				<div>permalink</div>
				<div>genre</div>
				<div>additional tags</div>
				<div>description</div>
				<div>caption</div>
				<div>privacy</div>
			</div>
		</div>
	);
};

export default UploadBasicInfo;
