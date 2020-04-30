class AddNullToTracks < ActiveRecord::Migration[5.2]
  def change
    change_column_default :tracks, :genre, from: true, to: false
    change_column_default :tracks, :desc, from: true, to: false
  end
end