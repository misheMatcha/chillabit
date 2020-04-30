class AddNullToTracksFix < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :genre
    remove_column :tracks, :desc
  end
end