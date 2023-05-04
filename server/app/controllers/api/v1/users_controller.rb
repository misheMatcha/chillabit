class Api::V1::UsersController < ApplicationController
  before_action :authorized, only: %i[update]

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render 'api/v1/authenticates/show'
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.friendly.find(params[:id])
    if @user
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.friendly.find(params[:id])
    return render json: @user if @user && @user.update(user_params.compact_blank)

    render json: @user.errors, status: :unprocessable_entity
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :age, :gender, :url)
  end
end
