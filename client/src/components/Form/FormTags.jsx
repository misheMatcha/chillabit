import React, { useState } from 'react';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from 'antd/lib/input';
import Tag from 'antd/lib/tag';
import * as cn from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import FormItem from './FormItem';
import { styles } from '../../utils/styles';

const { alignItems, displayFlex, height, justifyContent, radius, spacing, weight, width } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...displayFlex,
		...width[100].percentage,
		border: '1px solid black',
		borderRadius: radius[3],
		flexWrap: 'wrap',
		minHeight: spacing['3_25'],
		padding: `${spacing['0_25']}px 7px`,
	},
	input: {
		'&:focus, &:focus:hover': {
			boxShadow: 'none !important',
		},
		...displayFlex,
		border: 'none',
		flex: 1,
		fontSize: spacing['1_5'],
		fontWeight: weight[500],
		height: 'fit-content',
		padding: 0,
	},
	tag: {
		'& > svg': {
			color: '#999',
			marginRight: 1,
		},
		'&:hover': {
			textDecoration: 'line-through #999',
		},
		border: 'none',
		fontWeight: weight[500],
		letterSpacing: 0.5,
		padding: 0,
	},
}));

const FormInput = (props) => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [tags, setTags] = useState([]);
	const [tag, setTag] = useState('');

	const removeTag = (index) => {
		setTags(tags.splice(index, 1));
	};

	return (
		<FormItem {...props}>
			<div className={classes.container}>
				{tags.map((tag, i) => (
					<Tag
						className={classes.tag}
						key={i}
						// onClick={removeTag(i)}
					>
						<FontAwesomeIcon icon={faHashtag} />
						{tag}
					</Tag>
				))}
				<Input
					className={classes.input}
					type='text'
					onChange={(e) => setTag(e.target.value)}
					onPressEnter={(e) => {
						setTags([...tags, e.target.value]);
						setTag('');
					}}
					value={tag}
				/>
			</div>
		</FormItem>
	);
};

export default FormInput;
