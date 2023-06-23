import { useContext } from 'react';
import UploadContext from '../context/UploadContext';

const useUpload = () => useContext(UploadContext);

export default useUpload;
