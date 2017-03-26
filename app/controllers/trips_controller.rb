require 'unirest'

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
    trips = Trip.all
    render json: trips
  end

  def show
    trip = Trip.find(params[:id])
    render json: trip
  end

  def locations
    trip = Trip.find(params[:id])
    render json: trip.locations
  end

  def comments
    trip = Trip.find(params[:id])
    render json: trip.comments.to_json(include: :user)
  end

  def create
    photo_url = nil
    unless params[:photo] == 'null'
      response = Unirest.post(
        "http://uploads.im/api?upload",
        parameters: {
          file: params[:photo]
          }
      ).body
      photo_url = response["data"]["img_url"]
    end

    @trip = Trip.create(
      description: params[:description],
      name: params[:name],
      public: params[:public],
      end_date: params[:end_date],
      start_date: params[:start_date],
      photo: photo_url,
      user_id: current_user.id
    )
    if @trip.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end

  def update
    @trip = Trip.find(params[:id])

    photo_url = @trip.photo
    unless params[:photo] == 'null'
      response = Unirest.post(
       "http://uploads.im/api?upload",
       parameters: {
         file: params[:photo]
         }
      ).body
      photo_url = response["data"]["img_url"]
    end

    @trip.update(
      description: params[:description],
      name: params[:name],
      public: params[:public],
      end_date: params[:end_date],
      start_date: params[:start_date],
      photo: photo_url,
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
