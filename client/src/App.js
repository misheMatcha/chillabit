import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Helmet from './pages/Helmet';
import Home from './pages/Home';
import Landing from './pages/Landing';

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
				<Route
					path='/home'
					element={<Home />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
