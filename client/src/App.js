import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './features/Authenticate/RequireAuth';
import Discover from './pages/Discover';
import Helmet from './pages/Helmet';
import Landing from './pages/Landing/index';
import Profile from './pages/Profile';
import Albums from './pages/Profile/Pages/Albums';
import All from './pages/Profile/Pages/All';
import Playlists from './pages/Profile/Pages/Playlists';
import PopularTracks from './pages/Profile/Pages/PopularTracks';
import Reposts from './pages/Profile/Pages/Reposts';
import Tracks from './pages/Profile/Pages/Tracks';

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
						element={<All />}
					/>
					<Route
						path='popular-tracks'
						element={<PopularTracks />}
					/>
					<Route
						path='tracks'
						element={<Tracks />}
					/>
					<Route
						path='albums'
						element={<Albums />}
					/>
					<Route
						path='sets'
						element={<Playlists />}
					/>
					<Route
						path='reposts'
						element={<Reposts />}
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
