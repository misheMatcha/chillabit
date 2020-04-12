class ChangeAlbums < ActiveRecord::Migration[5.2]
  def change
    change_column_null :tracks, :album_id, true
  end
end
