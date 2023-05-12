import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './features/Authenticate/RequireAuth';
import Discover from './pages/Discover';
import Helmet from './pages/Helmet';
import Landing from './pages/Landing/index';
import Profile from './pages/Profile';

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Landing />}
			/>
			<Route
				path='/'
				element={<Helmet />}
			>
				<Route
					path='/discover'
					element={<Discover />}
				/>
				<Route
					path='/:url'
					element={<Profile />}
				>
					{/* added for testing outlet */}
					<Route
						path=''
						element={<Discover />}
					/>
					<Route
						path='popular-tracks'
						element={<Discover />}
					/>
					<Route
						path='tracks'
						element={<Discover />}
					/>
					<Route
						path='albums'
						element={<Discover />}
					/>
					<Route
						path='sets'
						element={<Discover />}
					/>
					<Route
						path='reposts'
						element={<Discover />}
					/>
				</Route>
			</Route>

			{/* private */}
			<Route element={<RequireAuth />}>
				{/* editing or updating, all other pages should be public */}
			</Route>
		</Routes>
	);
};

export default App;
