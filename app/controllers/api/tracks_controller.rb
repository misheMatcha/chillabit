class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render '/api/tracks/index'
  end

  def create
    @track = current_user.track.new(track_params)
    if @track.save
      render '/api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
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