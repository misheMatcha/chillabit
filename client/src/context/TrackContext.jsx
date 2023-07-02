import { createContext, useState } from 'react';
import axios from '../utils/axios';

const TrackContext = createContext({});

export const TrackProvider = ({ children }) => {
	const [track, setTrack] = useState({});

	const getTrack = async (title) => await axios.get(`/tracks/${title}`);

	return (
		<TrackContext.Provider
			value={{
				getTrack,
				setTrack,
				track,
			}}
		>
			{children}
		</TrackContext.Provider>
	);
};

export default TrackContext;
