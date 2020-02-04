class Api::TracksController < ApplicationController
  private
  def track_params
    params.require(:track).permit(:name, :album_id, :artist_id)
  end
end