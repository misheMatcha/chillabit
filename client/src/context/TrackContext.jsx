import { createContext, useState } from 'react';

const TrackContext = createContext({});

export const TrackProvider = ({ children }) => {
	const [track, setTrack] = useState({});

	return (
		<TrackContext.Provider
			value={{
				setTrack,
				track,
			}}
		>
			{children}
		</TrackContext.Provider>
	);
};

export default TrackContext;
