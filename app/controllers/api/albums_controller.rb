class Api::AlbumsController < ApplicationController
  def create
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