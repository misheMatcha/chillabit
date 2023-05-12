import split from 'lodash/split';
import { useLocation } from 'react-router';
import useAuth from './useAuth';

const useCurrentPath = () => {
	const location = useLocation();
	const splitPath = split(location.pathname, '/', 2);
	const { currentUser, isLoggedIn } = useAuth();

	return {
		fullPath: location.pathname,
		identifier: splitPath[1],
		userIdentifier: splitPath[1],
		userPathMatches: isLoggedIn && currentUser.url === splitPath[1],
	};
};

export default useCurrentPath;
