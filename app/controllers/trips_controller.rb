require 'unirest'

class TripsController < ApplicationController
  before_action :find_record!, only: [:show, :update, :destroy, :locations, :comments]
  before_action :check_owner!, only: [:update, :destroy]
  before_action :authenticate_user!, only: [:create]

  def show
    render json: @trip.to_json(include: :user)
  end

  def locations
    render json: @trip.locations
  end

  def comments
    render json: @trip.comments.to_json(include: :user)
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
    @trip.destroy
    render :nothing => true, :status => 200
  end

  private

  def check_owner!
    unauthorized unless current_user && current_user.id == @trip.user_id
  end

  def find_record!
    @trip = Trip.find(params[:id])
  end
end
