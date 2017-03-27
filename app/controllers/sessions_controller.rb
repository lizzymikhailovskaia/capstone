class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
     session[:user_id] = user.id
     flash[:success] = 'Successfully logged in!'
     render :nothing => true, :status => 200
    else
     flash[:warning] = 'Invalid email or password!'
     render :nothing => true, :status => 400
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = 'Successfully logged out!'
    render :nothing => true, :status => 200
  end
end
