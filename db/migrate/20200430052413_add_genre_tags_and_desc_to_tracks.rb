class AddGenreTagsAndDescToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :genre, :string, null: true
    add_column :tracks, :tags, :string, array: true, null: true
    add_column :tracks, :desc, :text, null: true
  end
end
