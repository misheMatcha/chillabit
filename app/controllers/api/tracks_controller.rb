class Api::TracksController < ApplicationController
  def create
  end

  def update
  end

  def destory
  end

  private
  def track_params
    params.require(:track).permit(:name, :album_id, :artist_id)
  end
end