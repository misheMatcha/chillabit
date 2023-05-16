import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';

const useGeneral = () => useContext(GeneralContext);

export default useGeneral;
