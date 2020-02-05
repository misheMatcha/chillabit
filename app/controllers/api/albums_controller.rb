class Api::AlbumsController < ApplicationController
  def create
    @album = Album.create(album_params)
    @album.artist_id = current_user.id
    if @album.save
      render '/api/albums/show'
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update
  end

  def destory
  end

  private
  def album_params
    params.require(:album).permit(:name, :single, :genre, :artist_id)
  end
end