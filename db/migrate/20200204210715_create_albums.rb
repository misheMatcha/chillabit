class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :name, null: false
      t.boolean :single, null: false
      t.string :genre, null: false
      t.integer :artist_id, null: false
      t.index :name
      t.index :genre
      t.index :artist_id

      t.timestamps
    end
  end
end
