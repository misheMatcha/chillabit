import React from 'react';
import Form from 'antd/lib/form';
import UploadFormData from './UploadFormData';
import UploadFormFiles from './UploadFormFiles';

const UploadForm = () => {
	const [form] = Form.useForm();

	return (
		<Form form={form}>
			{/* <UploadFormFiles /> */}
			<UploadFormData />
		</Form>
	);
};

export default UploadForm;
