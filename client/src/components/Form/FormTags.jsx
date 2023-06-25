import React, { useEffect, useRef, useState } from 'react';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Tag from 'antd/lib/tag';
import isEmpty from 'lodash/isEmpty';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';

const { displayFlex, radius, spacing, truncateText, typography, weight } = styles;

const useStyles = createUseStyles((theme) => ({
	addTag: {
		...typography.captions,
		...truncateText,
		backgroundColor: theme.background.highlight,
		border: '1px solid #ccc',
		borderRadius: radius[3],
		boxShadow: `${spacing['0_25']}px ${spacing['0_5']}px ${spacing['0_5']}px rgba(0,0,0,.1)`,
		cursor: 'pointer',
		marginTop: -1,
		maxWidth: spacing['2_5'] * 10,
		padding: '4px 8px',
		position: 'absolute',
		zIndex: 1,
	},
	container: {},
	input: {
		'&:focus, &:focus:hover': {
			boxShadow: 'none !important',
		},
		...typography.captions,
		...displayFlex,
		border: 'none',
		flex: 1,
		fontSize: 14,
		fontWeight: weight[500],
		letterSpacing: 0.25,
		minWidth: 20,
		padding: '1.5px 0 0',
	},
	tag: {
		'& .ant-tag-close-icon': {
			...typography.captions,
			color: '#333',
			fontSize: 14,
			letterSpacing: 0.25,
		},
		'& > svg': {
			color: '#999',
			marginRight: -2,
		},
		'&:hover': {
			textDecoration: 'line-through #999',
		},
		border: 'none',
		padding: 0,
	},
	tags: {
		'&:focus': {
			// borderColor: '#999 !important',
		},
		...displayFlex,
		border: '1px solid #ccc',
		borderRadius: radius[3],
		flexWrap: 'wrap',
		minHeight: spacing['3_25'],
		padding: `${spacing['0_25']}px 7px`,
	},
}));

const FormInput = (props) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [tags, setTags] = useState([]);
	const [tag, setTag] = useState('');
	const [displayAddTag, setDisplayAddTag] = useState(false);

	const form = Form.useFormInstance();
	const ref = useRef(null);

	useEffect(() => {
		const tagInput = ref.current.input;

		let timeout = null;

		const handleInputTyping = (e) => {
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				if (tag) setDisplayAddTag(true);
				// console.log(e.target.value);
			}, 1000);
			// console.log(ref);
		};

		const handleStartTyping = (e) => {
			setDisplayAddTag(false);
			// console.log(ref.current.focus);
		};

		const handleFocus = (e) => {
			e && tag ? setDisplayAddTag(true) : setDisplayAddTag(false);
		};

		// tagInput.addEventListener('focus', handleFocus, true);
		// tagInput.addEventListener('keydown', handleStartTyping, true);
		// tagInput.addEventListener('keyup', handleInputTyping, true);
		return () => {
			// tagInput.addEventListener('focusout', handleFocus, true);
			// tagInput.addEventListener('keydown', handleStartTyping, true);
			// tagInput.removeEventListener('keyup', handleInputTyping, true);
		};
	}, [ref, tag, tags]);

	const addTag = (e) => {
		e.preventDefault();

		if (tag) {
			setTags([...tags, tag]);
			setTag('');
			setDisplayAddTag(false);
		}
	};

	const removeTag = (i) => {
		console.log(i);
		const tagsCopy = tags.slice();
		if (tagsCopy.length === 1) {
			setTags([]);
		} else {
			tagsCopy.splice(i, 1);
			setTags(tagsCopy);
		}
		setDisplayAddTag(false);
	};

	return (
		<FormItem {...props}>
			<div className={classes.container}>
				<div className={classes.tags}>
					{tags.map((tag, i) => (
						<Tag
							className={classes.tag}
							key={i}
							closable
							closeIcon={<>{tag}</>}
							onClose={(e) => {
								console.log('e: ', e.target);
								// console.log('i: ', i);
							}}
						>
							<FontAwesomeIcon icon={faHashtag} />
						</Tag>
					))}
					<Input
						className={classes.input}
						type='text'
						onChange={(e) => setTag(e.target.value)}
						onPressEnter={addTag}
						placeholder={
							isEmpty(tags) ? 'Add tags to describe the genre and mood of your track' : ''
						}
						ref={ref}
						value={tag}
					/>
				</div>
				{displayAddTag && (
					<div
						className={classes.addTag}
						onClick={addTag}
					>
						Add "{tag}"
					</div>
				)}
			</div>
		</FormItem>
	);
};

export default FormInput;
