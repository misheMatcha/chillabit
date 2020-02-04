class Api::AlbumsController < ApplicationController
  
  private
  def album_params
    params.require(:album).permit(:name, :single, :genre, :artist_id)
  end
end