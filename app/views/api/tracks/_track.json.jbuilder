json.id track.id
json.name track.name
json.artist_id track.artist_id
json.artist track.artists.username
json.album_id track.album_id
json.cover url_for(track.cover)
json.trackUrls track.trackFiles.map { |file| url_for(file) }