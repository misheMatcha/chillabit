@albums.each do |album|
  json.set! album.id do
    # json.name album.name
    # json.single album.single
    # json.genre album.genre
    # json.artist_id album.artist_id
    json.extract! :id, :name, :single, :genre, :artist_id
  end
end