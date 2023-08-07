import { useContext } from 'react';
import StepsContext from '../context/StepsContext';

const useSteps = () => useContext(StepsContext);

export default useSteps;
