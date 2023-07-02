class Api::V1::TracksController < ApplicationController
  before_action :authorized, only: %i[create]

  def index
    @tracks = Track.all
    render json: @tracks
  end

  def show
    @track = Track.friendly.find(params[:id])
    if @track
      render :show
    else
      render json: @track.errors, status: :unprocessable_entity
    end
  end

  def create
    @track = Track.new(track_params)
    @track.assign_attributes(tags: track_params['tags'].values) if track_params['tags']
    if @track.save!
      render :show
    else
      render json: @track.errors, status: :unprocessable_entity
    end
  end

  def update
    @track = Track.friendly.find(params[:id])

    @track.assign_attributes(track_params) if @track.artist_id == track_params['artist_id'].to_i

    if track_params['tags'].blank?
      @track.assign_attributes(tags: [])
    elsif track_params['tags']
      @track.assign_attributes(tags: track_params['tags'])
    end

    if @track.save
      render :show
    else
      render json: @track.errors, status: :unprocessable_entity
    end
  end

  private

  def track_params
    params.require(:track).permit(:artist_id, :title, :permalink, :genre, :desc, :caption, :is_private, :cover_image,
                                  :audio_file, metadata: {}, permissions: {}, tags: {})
  end
end
