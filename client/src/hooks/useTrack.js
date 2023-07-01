import { useContext } from 'react';
import TrackContext from '../context/TrackContext';

const useTrack = () => useContext(TrackContext);

export default useTrack;
