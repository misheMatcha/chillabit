import { ThemeProvider } from 'react-jss';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { GeneralProvider } from './GeneralContext';
import { ModalProvider } from './ModalContext';
import { TrackProvider } from './TrackContext';
import { UploadProvider } from '../features/upload/context/UploadContext';
import { light } from '../utils/themes';

const MainProvider = ({ children }) => (
	<ThemeProvider theme={light}>
		<BrowserRouter>
			<AuthProvider>
				<GeneralProvider>
					<ModalProvider>
						<TrackProvider>
							<UploadProvider>{children}</UploadProvider>
						</TrackProvider>
					</ModalProvider>
				</GeneralProvider>
			</AuthProvider>
		</BrowserRouter>
	</ThemeProvider>
);

export default MainProvider;
