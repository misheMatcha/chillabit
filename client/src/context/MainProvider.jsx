import { ThemeProvider } from 'react-jss';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { GeneralProvider } from './GeneralContext';
import { ModalProvider } from './ModalContext';
import { light } from '../utils/themes';

const MainProvider = ({ children }) => (
	<ThemeProvider theme={light}>
		<BrowserRouter>
			<AuthProvider>
				<GeneralProvider>
					<ModalProvider>{children}</ModalProvider>
				</GeneralProvider>
			</AuthProvider>
		</BrowserRouter>
	</ThemeProvider>
);

export default MainProvider;
