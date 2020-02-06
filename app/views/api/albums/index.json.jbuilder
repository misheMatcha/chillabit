@albums.each do |album|
  json.set! album.id do
    json.extract! :id, :name, :single, :genre, :artist_id
  end
end