import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {
	const { isLoggedIn } = useAuth();
	const location = useLocation();

	return isLoggedIn ? (
		<Outlet />
	) : (
		<Navigate
			to='/'
			state={{ from: location }}
			replace
		/>
	);
};

export default RequireAuth;
