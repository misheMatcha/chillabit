class ApplicationController < ActionController::API
  before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, ENV['HMAC_KEY'], 'HS256')
  end

  def decode_token
    header = request.headers['Authorization']
    return unless header

    token = header.split(' ')[1]
    begin
      JWT.decode(token, ENV['HMAC_KEY'], true, algorithm: 'HS256')
    rescue JWT.DecodeError
      nil
    end
  end

  def authorized
    return if !!current_user

    render json: { message: 'Please sign in' }
  end

  def current_user
    return unless decode_token

    user_id = decode_token[0]['user_id']
    @user = User.find_by(id: user_id)
  end
end
