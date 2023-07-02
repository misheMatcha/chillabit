import React, { useEffect } from 'react';
import Form from 'antd/lib/form';
import { createUseStyles, useTheme } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import { Steps } from '../components/steps';
import useUpload from '../features/upload/hooks/useUpload';
import { Navbar, UploadDataLayout, FormFiles, Footer } from '../features/upload/index';
import useAuth from '../hooks/useAuth';
import useTrack from '../hooks/useTrack';
import axios from '../utils/axios';
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

	const { currentUser, token } = useAuth();
	const { setTrack, track } = useTrack();
	const { customGenre, file } = useUpload();

	const navigate = useNavigate();

	const uploadTrack = async (v) => {
		try {
			const config = {
				headers: {
					authorization: token,
					'content-type': 'multipart/form-data',
				},
			};

			const newTrack = {
				artist_id: currentUser.id,
				audio_file: file,
				...v,
			};

			if (customGenre) newTrack.genre = customGenre;

			const response = await axios.post(
				'/tracks',
				{
					track: newTrack,
				},
				config
			);

			setTrack(response.data);
			navigate(`/${currentUser.url}/${v.permalink}`);
		} catch (err) {
			const errors = [];

			for (const [key, value] of Object.entries(err.response.data)) {
				errors.push({ errors: value, name: key });
			}

			form.setFields(errors);
		}
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
				initialValues={initialValues}
			>
				<FormFiles />
				<UploadDataLayout />
			</Form>
			<Footer />
		</Steps>
	);
};

export default Upload;
