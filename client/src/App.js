import React from 'react';
import { ThemeProvider } from 'react-jss';
import { Route, Routes } from 'react-router-dom';
import AuthModal from './features/Authenticate/AuthModal';
import RequireAuth from './features/Authenticate/RequireAuth';
import Helmet from './pages/Helmet';
import Home from './pages/Home';
import Landing from './pages/Landing/index';
import { light } from './utils/themes';

const App = () => {
	return (
		<ThemeProvider theme={light}>
			<AuthModal>
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
							path='/home'
							element={<Home />}
						/>
					</Route>

					{/* private */}
					<Route element={<RequireAuth />}>
						{/* editing or updating, all other pages should be public */}
					</Route>
				</Routes>
			</AuthModal>
		</ThemeProvider>
	);
};

export default App;
