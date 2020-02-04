class Api::TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
    if @track.save
      
    else
    end
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