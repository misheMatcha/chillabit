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
      render :show
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    @user = User.friendly.find(params[:id])
    @user.assign_attributes(user_params)

    if user_params['links'].blank?
      @user.assign_attributes(links: [])
    elsif user_params['links']
      @user.assign_attributes(links: user_params['links'].values)
    end

    if @user.save!
      render :show
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password, :age, :gender, :url, :header_bg, :avatar, :city,
                                 :country, :fname, :lname, :bio, links: %i[type title url])
  end
end
