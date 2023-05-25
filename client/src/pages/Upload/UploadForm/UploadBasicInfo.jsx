import React, { useState } from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Upload from 'antd/lib/upload';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from '../../../components/Form/FormItem';
import StyledButton from '../../../components/General/StyledButton';
import { TRACK_GENERE_OPTIONS } from '../../../data/trackPlaceholders';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		marginTop: 25,
	},
	formWrapper: {
		...displayFlex,
		...flexDirection.column,
		flex: 1,
	},
	image: {
		...alignItems.flexEnd,
		...displayFlex,
		...justifyContent.center,
		backgroundImage: 'linear-gradient(135deg,#846170,#70929c)',
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

const UploadBasicInfo = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [isCustomOption, setIsCustomOption] = useState(false);

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
			<div className={classes.formWrapper}>
				<FormItem
					label='Title'
					required
					inputConfig={{ type: 'text' }}
					name='title'
					rules={[
						{ message: 'Enter a profile URL.', required: true },
						{ len: 5, message: 'short.' },
						{ message: 'short.', min: 3 },
					]}
				/>
				<div>permalink</div>
				<div className={classes.selectWrapper}>
					<FormItem
						label='Genre'
						inputConfig={{
							defaultValue: '',
							onSelect: (value) =>
								value === 'custom' ? setIsCustomOption(true) : setIsCustomOption(false),
							options: TRACK_GENERE_OPTIONS,
							type: 'select',
						}}
					/>
					<FormItem
						styles={cn({ [`${classes.selectCustom}`]: !isCustomOption })}
						label='Custom Genre'
						inputConfig={{ type: 'text' }}
					/>
				</div>
				<div>additional tags</div>
				<div>description</div>
				<div>caption</div>
				<div>privacy</div>
			</div>
		</div>
	);
};

export default UploadBasicInfo;
