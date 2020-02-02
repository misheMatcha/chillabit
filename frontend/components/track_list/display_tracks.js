
// const ALBUM_COVERS = ['notturna.jpg', 'notturna.jpg', 'notturna.jpg', 'notturna.jpg', 'notturna.jpg', 'notturna.jpg', 'notturna.jpg', 'notturna.jpg', 'notturna.jpg', 'notturna.jpg', 'notturna.jpg', 'notturna.jpg'];
const TITLES = ['notturna', 'notturna', 'notturna', 'notturna', 'notturna', 'notturna', 'notturna', 'notturna', 'notturna', 'notturna', 'notturna', 'notturna'];
const ARTISTS = ['o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two', 'o k h o, Wun Two'];

const tracks_obj = {};

for (let i = 0; i < TITLES.length; i++) {
  // const trackCover = ALBUM_COVERS[i];
  const trackTitle = TITLES[i];
  const trackArtist = ARTISTS[i];
  tracks_obj[i] = {
    // album_cover: trackCover,
    title: trackTitle,
    artist: trackArtist
  };
}

export const TRACK_DISPLAY = Object.values(tracks_obj);