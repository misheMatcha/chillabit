import React from 'react';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faDollarSign, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import StyledButton from '../../../components/General/StyledButton';
import StyledFormItem from '../../../components/General/StyledFormItem';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, justifyContent, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {},
	formBtns: {
		'& > :first-child': {
			marginRight: spacing['0_5'],
		},
		...displayFlex,
	},
	formItem: {
		flexGrow: 1,
		margin: 0,
		padding: 0,
	},
	icon: {
		...alignItems.center,
		...displayFlex,
		...justifyContent.center,
		backgroundColor: theme.background.highlight,
		fontSize: spacing['1_5'],
		height: spacing[2],
		marginRight: 10,
		marginTop: spacing['0_5'],
		width: spacing[2],
	},
	inputContact: {},
	inputContent: {
		flexGrow: 1,
	},
	inputwrapper: {
		'& > button': {
			marginRight: 10,
		},
		'& > div': {
			marginRight: spacing[1],
		},
		...displayFlex,
	},
	link: {
		...displayFlex,
		// border: '1px solid black',
		marginBottom: spacing['2_25'],
		padding: '10px 0',
	},
	linkList: {
		margin: `${spacing['2_25']}px 0`,
	},
	supportIcon: {
		backgroundColor: '#38d !important',
		color: theme.color.white,
	},
	supportInfo: {
		...typography.captions,
		fontSize: 13,
		marginBottom: 5,
		marginTop: spacing['0_7'],
	},
	title: {
		borderBottom: `1px solid ${theme.background.highlight}`,
		paddingBottom: spacing['0_7'],
	},
}));

const defaultContactLink = {
	title: '',
	type: 'contact',
	url: '',
};

const defaultSupportLink = {
	type: 'support',
	url: '',
};

const EditLinks = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const form = Form.useFormInstance();

	return (
		<div className={classes.container}>
			<div className={classes.title}>
				Your links <FontAwesomeIcon icon={faCircleQuestion} />
			</div>
			<Form.List name='links'>
				{(links, { add, remove }) => (
					<div className={classes.linkList}>
						{links.map((link, i) => {
							const isSupportLink = form.getFieldValue('links')[i].type === 'support';

							return (
								<div
									className={classes.link}
									key={link.key}
								>
									<div className={cn(classes.icon, { [`${classes.supportIcon}`]: isSupportLink })}>
										{isSupportLink && <FontAwesomeIcon icon={faDollarSign} />}
									</div>
									<div className={classes.inputContent}>
										<div className={classes.inputwrapper}>
											<StyledFormItem
												formStyles={classes.formItem}
												inputStyles={classes.input}
												name={[i, 'url']}
												placeholder={
													isSupportLink
														? 'e.g.: https://paypal.me/username'
														: 'Web or email address'
												}
												small
											/>
											{!isSupportLink && (
												<StyledFormItem
													formStyles={classes.formItem}
													name={[i, 'title']}
													placeholder='Short title'
													small
												/>
											)}
											{isSupportLink && <StyledButton icon={faCircleQuestion} />}
										</div>
										{isSupportLink && (
											<div className={classes.supportInfo}>
												Supported platforms: PayPal, Cash app, Venmo, Bandcamp, Shopify,
												Kickstarter, Patreon, and Gofundme. <Link>Learn more</Link>
											</div>
										)}
									</div>

									<StyledButton
										icon={faTrash}
										onClick={() => remove(link.name)}
									/>
								</div>
							);
						})}
						<div className={classes.formBtns}>
							<StyledButton
								label='Add link'
								onClick={() => {
									if (links.length < 10) add(defaultContactLink);
								}}
							/>
							<StyledButton
								label='Add support link'
								onClick={() => {
									if (links.length < 10) add(defaultSupportLink);
								}}
								special
							/>
						</div>
					</div>
				)}
			</Form.List>
		</div>
	);
};

export default EditLinks;
