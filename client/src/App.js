import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './features/Authenticate/RequireAuth';
import Discover from './pages/Discover';
import Landing from './pages/Landing/index';
import Layout from './pages/Layout';
import Profile from './pages/Profile';
import Albums from './pages/Profile/Pages/Albums';
import All from './pages/Profile/Pages/All';
import Playlists from './pages/Profile/Pages/Playlists';
import PopularTracks from './pages/Profile/Pages/PopularTracks';
import Reposts from './pages/Profile/Pages/Reposts';
import Tracks from './pages/Profile/Pages/Tracks';
import Track from './pages/Track';
import Upload from './pages/Upload';

const App = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Landing />}
			/>
			<Route
				path='/'
				element={<Layout />}
			>
				<Route
					path='/discover'
					element={<Discover />}
				/>
				<Route
					path='/:user'
					element={<Profile />}
				>
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
				<Route
					path='/:user/:track'
					element={<Track />}
				/>
				<Route
					path='/upload'
					element={<Upload />}
				/>
			</Route>

			{/* private */}
			<Route element={<RequireAuth />}>
				{/* editing or updating, all other pages should be public */}
			</Route>
		</Routes>
	);
};

export default App;
