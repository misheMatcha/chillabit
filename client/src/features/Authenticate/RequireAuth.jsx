import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {
	const { user } = useAuth();
	const location = useLocation();

	return user ? (
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
