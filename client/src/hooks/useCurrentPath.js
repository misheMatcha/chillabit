import { split } from 'lodash';
import { useLocation } from 'react-router';

const useCurrentPath = () => {
	const location = useLocation();
	const splitPath = split(location.pathname, '/', 2);

	return {
		fullPath: location.pathname,
		userIdentifier: splitPath[1],
	};
};

export default useCurrentPath;
