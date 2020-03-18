json.array! @albums do |album|
  # json.set! album.id do
  #   json.partial! '/api/albums/album', album: album
  # end
  json.id album.id
  json.name album.name
  json.single album.single
  json.genre album.genre
  json.artist_id current_user.id
end