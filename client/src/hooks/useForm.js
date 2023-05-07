import { useContext } from 'react';
import FormContext from '../context/FormContext';

const useForm = () => useContext(FormContext);

export default useForm;
