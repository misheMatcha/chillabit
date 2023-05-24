import React from 'react';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import Select from 'antd/lib/select';
import Upload from 'antd/lib/upload';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from '../../../components/Form/FormItem';
import StyledButton from '../../../components/General/StyledButton';
import { TRACK_GENERE_LIST } from '../../../data/trackPlaceholders';
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
	select: {
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
				height: 28,
				padding: '0 18px',
			},
		},
		padding: '0 !important',
	},
}));

const UploadBasicInfo = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });

	const getCustomOptions = () => (
		<>
			{TRACK_GENERE_LIST.map((genre, i) => {
				if (genre === 'None') {
					return (
						<Select.Option
							key={i}
							value=''
						>
							{genre}
						</Select.Option>
					);
				} else if (genre === 'Alternative Rock' || genre === 'Audiobooks') {
					return (
						<Select.Option
							className={classes.select}
							key={i}
							value={genre}
						>
							<div>{genre === 'Alternative Rock' ? 'Music' : 'Audio'}</div>
							<div>{genre}</div>
						</Select.Option>
					);
				} else {
					return (
						<Select.Option
							key={i}
							value={genre}
						>
							{genre}
						</Select.Option>
					);
				}
			})}
		</>
	);

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
					rules={[
						{ message: 'Enter a profile URL.', required: true },
						{ len: 5, message: 'short.' },
						{ message: 'short.', min: 3 },
					]}
				/>
				<div>permalink</div>
				<FormItem
					label='Genre'
					inputConfig={{ customoption: getCustomOptions(), defaultValue: '', type: 'select' }}
				/>
				<div>additional tags</div>
				<div>description</div>
				<div>caption</div>
				<div>privacy</div>
			</div>
		</div>
	);
};

export default UploadBasicInfo;
