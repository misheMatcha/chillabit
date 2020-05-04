json.id track.id
json.name track.name
json.artist_id track.artist_id
json.artist track.artists.username
json.album_id track.album_id
json.cover url_for(track.cover)
json.genre url_for(track.genre)
json.tags track.tags
json.desc url_for(track.desc)
json.trackUrls track.trackFiles.map { |file| url_for(file) }