class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render '/api/tracks/index'
  end

  def create
  end

  def show
    @track = Track.find(params[:id])
    render '/api/tracks/show'
  end

  def update
  end

  def destory
  end

  private
  def track_params
    params.require(:track).permit(:name, :artist_id)
  end
end