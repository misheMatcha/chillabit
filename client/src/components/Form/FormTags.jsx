import React, { useEffect, useRef, useState } from 'react';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Tag from 'antd/lib/tag';
import * as cn from 'classnames';
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
	display: {
		// display: 'none',
		opacity: 0,
	},
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

const FormTags = ({ label, name }) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [tags, setTags] = useState([]);
	const [tag, setTag] = useState('');
	const [displayAddTag, setDisplayAddTag] = useState(false);

	const form = Form.useFormInstance();
	const inputRef = useRef(null);

	useEffect(() => {
		const handleFocusOutInput = (e) => {
			const div = document.getElementById('addTagDiv');
			const outsideInput = inputRef.current && !inputRef.current.input.contains(e.target);
			const notAddTagDiv = e.target !== div;

			if (outsideInput && notAddTagDiv) setDisplayAddTag(false);
		};

		document.addEventListener('click', handleFocusOutInput, true);
		return () => {
			document.removeEventListener('click', handleFocusOutInput, true);
		};
	}, []);

	useEffect(() => {
		const input = inputRef.current.input;

		let timeout = null;
		const handleKeyDown = (e) => {
			clearTimeout(timeout);

			timeout = setTimeout(() => {
				if (tag) setDisplayAddTag(true);
			}, 1000);
		};

		const handleKeyUp = (e) => setDisplayAddTag(false);

		const handleFocusInInput = (e) => {
			if (tag) setDisplayAddTag(true);
		};

		input.addEventListener('focusin', handleFocusInInput, true);
		input.addEventListener('keydown', handleKeyUp, true);
		input.addEventListener('keyup', handleKeyDown, true);
		return () => {
			input.removeEventListener('focusin', handleFocusInInput, true);
			input.removeEventListener('keydown', handleKeyUp, true);
			input.removeEventListener('keyup', handleKeyDown, true);
		};
	}, [tag]);

	useEffect(() => {
		form.setFieldValue(name, tags);
	}, [form, name, tags]);

	const addTag = (e) => {
		e.preventDefault();

		if (tags.includes(tag)) {
			setTag('');
			setDisplayAddTag(false);
		} else if (tags.length === 0 || tag) {
			setTags([...tags, tag]);
			setTag('');
			setDisplayAddTag(false);
		}
	};

	const removeTag = (e) => {
		const newTags = [...tags];
		const index = newTags.indexOf(e.target.innerHTML);
		newTags.splice(index, 1);
		setTags(newTags);
	};

	return (
		<FormItem
			label={label}
			name={name}
		>
			<div className={classes.container}>
				<div className={classes.tags}>
					{tags.map((tag, i) => (
						<Tag
							className={classes.tag}
							key={`${i}-${tag}`}
							closable
							closeIcon={<>{tag}</>}
							onClose={removeTag}
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
						ref={inputRef}
						value={tag}
					/>
				</div>
				<div
					id='addTagDiv'
					className={cn(classes.addTag, { [`${classes.display}`]: !displayAddTag })}
					onClick={addTag}
				>
					Add "{tag}"
				</div>
			</div>
		</FormItem>
	);
};

export default FormTags;
