export const fetchAllAlbums = () => (
  $.ajax({
    method: 'GET',
    url: `/api/albums`
  })
);

export const fetchAlbum = albumId => (
  $.ajax({
    method: 'GET',
    url: `/api/albums/${albumId}`
  })
);

export const createAlbum = album => (
  $.ajax({
    method: 'POST',
    url: `/api/albums/`,
    data: { album }
  })
);

export const updateAlbum = album => (
  $.ajax({
    method: 'PATCH',
    url: `/api/albums/${album.id}`,
    data: {album }
  })
);

export const removeAlbum = albumId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/albums/${albumId}`,
  })
);