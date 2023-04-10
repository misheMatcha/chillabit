import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './components/Authenticate/RequireAuth';
import Helmet from './pages/Helmet';
import Home from './pages/Home';
import Landing from './pages/Landing/index';

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Helmet />}
			>
				<Route
					path='/'
					element={<Landing />}
				/>

				{/* private */}
				<Route element={<RequireAuth />}>
					<Route
						path='/home'
						element={<Home />}
					/>
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
