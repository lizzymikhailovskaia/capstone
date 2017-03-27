class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
#   protect_from_forgery with: :null_session
#
#   helper_method :current_user, :is_admin?
#
  def current_user
    @current_user ||= User.find_by(id: session[:user_id]) if session[:user_id]
  end
#
#   def is_admin?
#     #returns true or false
#     current_user && current_user.admin
#   end
#
  def authenticate_user!
    render :json => { error: "please log in" }, :status => 401
  end

  def unauthorized
    render :json => { error: "Unauthorized" }, :status => 401
  end


#
#   def authenticate_admin!
#     unless current_user && current_user.admin
#       redirect_to '/'
#     end
#   end
#
#
#
#   private ####################
#
 end
