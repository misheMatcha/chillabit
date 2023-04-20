import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './features/Authenticate/RequireAuth';
import Helmet from './pages/Helmet';
import Home from './pages/Home';
import Landing from './pages/Landing/index';
import { light } from './utils/themes';

const App = () => {
	return (
		<ThemeProvider theme={light}>
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
		</ThemeProvider>
	);
};

export default App;
