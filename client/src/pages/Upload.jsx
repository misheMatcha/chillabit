import React from 'react';
import Form from 'antd/lib/form';
import { createUseStyles, useTheme } from 'react-jss';
import { Steps } from '../components/steps';
import { Navbar, FormDataLayout, FormFiles } from '../features/upload/index';
import { styles } from '../utils/styles';

const { alignItems, displayFlex, flexDirection, spacing } = styles;

const useStyles = createUseStyles((theme) => ({
	container: {
		...alignItems.center,
		...displayFlex,
		...flexDirection.column,
		backgroundColor: theme.background.surface,
	},
	form: {
		width: spacing[1] * 100,
	},
}));

const Upload = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [form] = Form.useForm();

	const uploadTrack = (v) => {
		console.log(v);
	};

	return (
		<Steps
			numSteps={2}
			defaultStep={1}
			styles={classes.container}
		>
			<Navbar />
			<Form
				className={classes.form}
				form={form}
				onFinish={uploadTrack}
			>
				<FormFiles />
				<FormDataLayout />
			</Form>
		</Steps>
	);
};

export default Upload;
