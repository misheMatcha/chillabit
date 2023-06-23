import { createContext, useState } from 'react';

const UploadContext = createContext({});

export const UploadProvider = ({ children }) => {
	const [file, setFile] = useState({});
	const [fileList, setFileList] = useState([]);

	return (
		<UploadContext.Provider
			value={{
				file,
				fileList,
				setFile,
				setFileList,
			}}
		>
			{children}
		</UploadContext.Provider>
	);
};

export default UploadContext;
