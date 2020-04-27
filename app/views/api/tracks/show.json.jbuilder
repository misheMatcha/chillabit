# json.partial! '/api/tracks/track', track: @track


json.id @track.id
json.name @track.name
json.artist_id @track.artist_id
json.artist @track.artists.username
json.album_id @track.album_id
# json.trackURL url_for(track.song)
json.trackUrls @track.files.map { |file| url_for(file) }