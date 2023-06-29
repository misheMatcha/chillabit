import React from 'react';
import Form from 'antd/lib/form';
import { createUseStyles, useTheme } from 'react-jss';
import { Steps } from '../components/steps';
import { UploadProvider } from '../features/upload/context/UploadContext';
import { Navbar, UploadDataLayout, FormFiles, Footer } from '../features/upload/index';
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
		overflow: 'hidden',
		width: spacing[1] * 100,
	},
}));

const initialValues = {
	genre: '',
	is_private: false,
	metadata: {
		license: {
			attribution: false,
			derivatives: false,
			noncommercial: false,
			share: false,
			type: 'arr',
		},
	},
	permissions: {
		download: false,
		embed: false,
		offline: false,
		playback: false,
		rss: false,
	},
};

const Upload = () => {
	const theme = useTheme();
	const classes = useStyles({ theme });
	const [form] = Form.useForm();

	const uploadTrack = (v) => {
		console.log(v);
	};

	return (
		<UploadProvider>
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
					initialValues={initialValues}
				>
					<FormFiles />
					<UploadDataLayout />
				</Form>
				<Footer />
			</Steps>
		</UploadProvider>
	);
};

export default Upload;
