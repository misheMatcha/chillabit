class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.integer :album_id, null: false
      t.integer :artist_id, null: false
      t.index :album_id

      t.timestamps
    end

    add_index :tracks, [:artist_id, :name], unique: true
  end
end
