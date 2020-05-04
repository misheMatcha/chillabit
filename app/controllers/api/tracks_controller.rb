class Api::TracksController < ApplicationController
  def index
    @tracks = Track.all
    render '/api/tracks/index'
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render '/api/tracks/show'
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  def show
    @track = Track.with_attached_cover.find(params[:id])
    render '/api/tracks/show'
  end

  def update
  end

  def destory
  end

  private
  def track_params
    params.require(:track).permit(:name, :artist_id, :cover, :genre, :desc, tags: [], trackFiles: [])
  end
end