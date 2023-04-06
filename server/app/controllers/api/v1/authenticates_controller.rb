class Api::V1::AuthenticatesController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(email: authenticate_params[:email])
    if @user && @user.authenticate(authenticate_params[:password])
      @token = encode_token(user_id: @user.id)

      render :show, status: :accepted
    else
      render json: { message: 'Invalid username and/or password' }, status: :unauthorized
    end
  end

  private

  def authenticate_params
    params.require(:user).permit(:email, :password)
  end
end
