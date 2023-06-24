import { createContext, useState } from 'react';

const UploadContext = createContext({});

export const UploadProvider = ({ children }) => {
	const [file, setFile] = useState({});
	const [fileList, setFileList] = useState([]);
	const [customGenre, setCustomGenre] = useState('');

	return (
		<UploadContext.Provider
			value={{
				customGenre,
				file,
				fileList,
				setCustomGenre,
				setFile,
				setFileList,
			}}
		>
			{children}
		</UploadContext.Provider>
	);
};

export default UploadContext;
