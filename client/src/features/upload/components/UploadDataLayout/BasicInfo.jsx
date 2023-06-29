import React, { useState } from 'react';
import Tooltip from 'antd/lib/tooltip';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import {
	FormImageUpload,
	FormInput,
	FormRadioGroup,
	FormSelect,
	FormTags,
	FormTextarea,
	FormUrl,
} from '../../../../components/form/index';
import StyledButton from '../../../../components/General/StyledButton';
import { Step } from '../../../../components/steps/index';
import { TRACK_GENERE_OPTIONS } from '../../../../data/trackPlaceholders';
import { styles } from '../../../../utils/styles';
import useUpload from '../../hooks/useUpload';

const { alignItems, displayFlex, flexDirection, justifyContent, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		marginTop: 25,
	},
	inputsWrapper: {
		...displayFlex,
		...flexDirection.column,
		flex: 1,
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
	tooltip: {
		'& .ant-tooltip-content': {
			width: 200,
		},
		'& .ant-tooltip-inner': {
			'& > span:last-child': {
				...displayFlex,
				...justifyContent.flexEnd,
			},
			...typography.captions,
			backgroundColor: theme.background.surface,
			border: '1px solid #ccc',
			borderRadius: 0,
			boxShadow: `0 2px 7px -1px rgba
      (0,0,0,.4)`,
			color: '#333',
			fontSize: spacing['1_5'],
			padding: 10,
		},
	},
	tooltipBtn: {
		fontSize: 11,
		height: 22,
		padding: `${spacing['0_25']}px ${spacing[1]}px`,
	},
}));

const BasicInfo = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [editCustomGenre, setEditCustomGenre] = useState(false);
	const { customGenre, setCustomGenre } = useUpload();

	return (
		<Step step={3}>
			<div className={classes.container}>
				<FormImageUpload formConfig={{ name: 'track_cover' }} />
				<div className={classes.inputsWrapper}>
					<FormInput
						formConfig={{
							label: 'Title',
							marginTop: false,
							name: 'title',
							required: true,
							rules: [{ message: 'Enter a title.', required: true }],
						}}
						placeholder='Name your track'
					/>
					<FormUrl
						label='Permalink'
						name='permalink'
						required
					/>
					<div className={classes.selectWrapper}>
						<FormSelect
							formConfig={{
								label: 'Genre',
								name: 'genre',
							}}
							onSelect={(value) => {
								if (value === 'custom') {
									setEditCustomGenre(true);
								} else {
									setEditCustomGenre(false);
									setCustomGenre('');
								}
							}}
							options={TRACK_GENERE_OPTIONS}
						/>
						<FormInput
							formConfig={{
								label: 'Custom Genre',
								styles: cn({ [`${classes.selectCustom}`]: !editCustomGenre }),
							}}
							onChange={(e) => setCustomGenre(e.target.value)}
							value={customGenre}
						/>
					</div>
					<FormTags
						label='Additional tags'
						name='tags'
					/>
					<FormTextarea
						formConfig={{
							label: 'Description',
							name: 'desc',
						}}
						placeholder='Describe your track'
						rows={6}
					/>
					<FormTextarea
						formConfig={{
							label: 'Caption',
							name: 'caption',
							rules: [{ max: 140, message: 'Enter a track caption that is up to 140 characters.' }],
						}}
						placeholder='Add a caption to your post (optional)'
						disableReize
						showCount={{
							formatter: ({ count }) => 140 - count,
						}}
					/>
					<FormRadioGroup
						animated
						column
						formConfig={{
							label: 'Privacy:',
							name: 'public',
						}}
						options={[
							{
								alignFlexStart: true,
								animated: true,
								label: 'Public',
								labelDesc: 'Anyone will be able to listen to this track.',
								value: true,
							},
							{
								alignFlexStart: true,
								animated: true,
								label: 'Private',
								labelDesc:
									'Only you and people you share a secret link with will be able to listen to this track.',
								value: false,
							},
							{
								disabled: true,
								label: (
									<Tooltip
										arrow={false}
										overlayClassName={classes.tooltip}
										placement='bottom'
										title={
											<>
												<span>
													Get a Next Pro subscription to schedule when your tracks go live.
												</span>
												<span>
													<StyledButton
														styles={classes.tooltipBtn}
														special
													>
														Upgrade now
													</StyledButton>
												</span>
											</>
										}
									>
										Scheduled
									</Tooltip>
								),
								value: '',
							},
						]}
					/>
				</div>
			</div>
		</Step>
	);
};

export default BasicInfo;
