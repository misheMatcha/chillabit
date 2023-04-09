class Api::V1::AuthenticatesController < ApplicationController
  skip_before_action :authorized, only: %i[create handle]

  def create
    @user = User.find_by(email: authenticate_params[:email])
    if @user && @user.authenticate(authenticate_params[:password])
      @token = encode_token(user_id: @user.id)

      render :show, status: :accepted
    else
      render json: { message: 'Invalid username and/or password' }, status: :unauthorized
    end
  end

  def handle
    if (authenticate_params[:email] == '' && authenticate_params[:url] == '') || (authenticate_params[:email] != '' && !URI::MailTo::EMAIL_REGEXP.match?(authenticate_params[:email]))
      return render json: { message: 'Enter a valid email address or profile url.' }, status: :unprocessable_entity
    end

    email = nil
    if authenticate_params[:email] != ''
      email = User.find_by(email: authenticate_params[:email])
    elsif authenticate_params[:url] != ''
      email = User.find_by(url: authenticate_params[:url])
    end

    isVerified = false
    if email
      isVerified = true
      email = email.email
    elsif authenticate_params[:url] != ''
      return render json: { message: 'That profile url does not exist' }, status: :unprocessable_entity
    elsif authenticate_params[:email] != ''
      email = authenticate_params[:email]
    end

    render json: { email: email, isVerified: isVerified }, status: :ok
  end

  private

  def authenticate_params
    params.require(:user).permit(:email, :password, :url)
  end
end
