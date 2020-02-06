class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def create
    @album = current_user.albums.new(album_params)
    if @album.save
      render '/api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = Album.find(params[:id])
  end

  def update
    @album = current_user.albums.find(params[:id])
    if @album.update(album_params)
      render '/api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destory
    render '/api/albums/show'
  end

  private
  def album_params
    params.require(:album).permit(:name, :single, :genre, :artist_id)
  end
end