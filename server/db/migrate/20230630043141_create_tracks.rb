class CreateTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :permalink, null: false
      t.string :genre
      t.string :tags, array: true, default: []
      t.text :desc
      t.string :caption
      t.boolean :is_private, default: false
      t.jsonb :metadata, default: {}
      t.jsonb :permissions, default: {}
      t.string :slug
      t.references :artist, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end

    add_index :tracks, :permalink, unique: true
    add_index :tracks, [:title, :artist_id], unique: true
  end
end
