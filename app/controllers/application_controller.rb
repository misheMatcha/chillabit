class ApplicationController < ActionController::Base
  helper_methods: :current_user, :logged_in?

  private
  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login(user)
    user.reset_session_token!

  end

  def logged_in?
    !!current_user
  end

  def logout
    user.reset_session_token!
    session[:session_token] = nil
  end

  def require_logged_in
  end
end