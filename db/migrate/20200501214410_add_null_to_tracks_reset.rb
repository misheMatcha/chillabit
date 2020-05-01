class AddNullToTracksReset < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :genre, :string, null: false
    add_column :tracks, :desc, :text, null: false
  end
end
