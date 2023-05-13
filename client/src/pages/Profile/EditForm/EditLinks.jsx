import React from 'react';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faDollarSign, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import * as cn from 'classnames';
import includes from 'lodash/includes';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import StyledButton from '../../../components/General/StyledButton';
import StyledFormItem from '../../../components/General/StyledFormItem';
import { styles } from '../../../utils/styles';

const { alignItems, displayFlex, justifyContent, spacing, typography } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		padding: '0 25px',
	},
	formBtns: {
		'& > :first-child': {
			marginRight: spacing['0_5'],
		},
		...alignItems.center,
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
		minWidth: spacing[2],
	},
	inputContactTitle: {
		width: 242,
	},
	inputContactUrl: {
		width: 484,
	},
	inputContent: {
		flexGrow: 1,
	},
	inputwrapper: {
		'& > button': {
			marginRight: spacing[1],
		},
		'& > div': {
			marginRight: spacing[1],
		},
		...displayFlex,
	},
	link: {
		...displayFlex,
		marginBottom: spacing['2_25'],
		padding: '10px 0',
	},
	linkList: {
		margin: `${spacing['2_25']}px 0`,
	},
	maxLinks: {
		...typography.captions,
		color: theme.color.error,
		marginLeft: spacing['0_7'],
	},
	moreInfoBtn: {
		'& > span': {
			'& > svg': {
				fontSize: 16,
			},
			...displayFlex,
		},
		'&:hover': {
			borderColor: `${theme.color.transparent} !important`,
		},
		borderColor: theme.color.transparent,
		margin: 0,
		padding: 0,
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
		'& > svg': {
			fontSize: spacing[2],
			marginLeft: spacing['0_5'],
		},
		borderBottom: `1px solid ${theme.background.highlight}`,
		color: '#999',
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
				{(links, { add, remove }) => {
					const linksNotMaxed = links.length < 10 ? true : false;

					return (
						<div className={classes.linkList}>
							{links.map((link, i) => {
								const isSupportLink =
									form.getFieldValue(['links', link.name, 'type']) === 'support';

								return (
									<div
										className={classes.link}
										key={link.key}
									>
										<div
											className={cn(classes.icon, { [`${classes.supportIcon}`]: isSupportLink })}
										>
											{isSupportLink && <FontAwesomeIcon icon={faDollarSign} />}
										</div>
										<div className={classes.inputContent}>
											<div className={classes.inputwrapper}>
												<StyledFormItem
													formStyles={cn(classes.formItem, {
														[`${classes.inputContactUrl}`]: !isSupportLink,
													})}
													inputStyles={classes.input}
													name={[i, 'url']}
													placeholder={
														isSupportLink
															? 'e.g.: https://paypal.me/username'
															: 'Web or email address'
													}
													rules={[
														({ getFieldValue }) => ({
															validator(_, value) {
																const titleFieldEmpty =
																	getFieldValue(['links', link.name, 'title']) === '';
																if (!isSupportLink && value === '' && !titleFieldEmpty) {
																	return Promise.reject(new Error('Enter a web or email address.'));
																} else if (
																	(isSupportLink && value === '') ||
																	(titleFieldEmpty && value === '') ||
																	includes(value, '@') ||
																	includes(value, 'https://')
																) {
																	return Promise.resolve();
																}

																return Promise.reject(new Error('This URL or email is invalid.'));
															},
														}),
													]}
													small
												/>
												{!isSupportLink && (
													<StyledFormItem
														formStyles={cn(classes.formItem, {
															[`${classes.inputContactTitle}`]: !isSupportLink,
														})}
														name={[i, 'title']}
														placeholder='Short title'
														small
													/>
												)}
												{isSupportLink && (
													<StyledButton
														icon={faCircleQuestion}
														styles={classes.moreInfoBtn}
													/>
												)}
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
									disabled={!linksNotMaxed}
									label='Add link'
									onClick={() => {
										if (linksNotMaxed) add(defaultContactLink);
									}}
								/>
								<StyledButton
									disabled={!linksNotMaxed}
									label='Add support link'
									onClick={() => {
										if (linksNotMaxed) add(defaultSupportLink);
									}}
									special
								/>
								{!linksNotMaxed && (
									<div className={classes.maxLinks}>
										A maximum of 10 links can be added to your profile.
									</div>
								)}
							</div>
						</div>
					);
				}}
			</Form.List>
		</div>
	);
};

export default EditLinks;
