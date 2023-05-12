import { useContext } from 'react';
import AuthFormContext from '../context/AuthFormContext';

const useAuthForm = () => useContext(AuthFormContext);

export default useAuthForm;
