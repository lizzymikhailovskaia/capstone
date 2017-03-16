class TripsController < ApplicationController
  # before_action :find_blog, only: [:show, :edit, :update, :destroy]
  # before_action :check_owner!, only: [:edit, :update, :destroy]
  # before_action :authenticate_user!, only: [:create, :new]
  #
  # #TODO: remove it
  def current_user
    User.first
  end

 def index
   if session[:count] == nil
     session[:count] = 0
   end
   session[:count] += 1
   @visit_count = session[:count]
   @trips = Trip.all
   if params[:category]
     @trips = Category.find_by(name: params[:category]).trips
   end
 end

 # def new
 # end

 def create
   @trip = Trip.create(
     description: params[:description],
     name: params[:name],
     public: params[:public],
     end_date: params[:end_date],
     start_date: params[:start_date],
     photo: params[:photo],
     user_id: current_user.id
    )
   if @trip.save
   render :nothing => true, :status => 200
   else
   render :nothing => true, :status => 400
   end
 end

 def show
 end

 # def edit
 # end

 def update
   @trip = Trip.find(params[:id])
   @trip.update(
     description: params[:description],
     name: params[:name],
     public: params[:public],
     end_date: params[:end_date],
     start_date: params[:start_date],
     photo: params[:photo],
     user_id: current_user.id
   )
   if @trip.save
   render :nothing => true, :status => 200
   else
   render :nothing => true, :status => 400
   end
 end

  def destroy
    @trip = Trip.find(params[:id])
    @trip.destroy
    render :nothing => true, :status => 200
  end

 # private
 # #
 # def check_owner!
 #   redirect_to '/' unless current_user && current_user.id == @trip.user_id
 # end

 # def find_blog
 #    @trip = Trip.find_by(id: params[:id])
 # end
end
