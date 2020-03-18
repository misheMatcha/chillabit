json.array! @tracks do |track|
  json.id track.id
  json.name track.name
  json.artist_id track.artist_id
  json.album_id track.album_id
end