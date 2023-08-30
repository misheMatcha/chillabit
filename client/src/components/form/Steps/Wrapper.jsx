import React from 'react';
import { StepsProvider } from '../../../context/StepsContext';

const Wrapper = ({ children }) => {
	return <StepsProvider>{children}</StepsProvider>;
};

export default Wrapper;
