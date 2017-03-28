class LocationsController < ApplicationController
  before_action :find_record!, only: [:show, :update, :destroy, :tasks, :comments, :photos]
  before_action :check_owner!, only: [:update, :destroy]
  before_action :authenticate_user!, only: [:create]

  def show
    render json: @location.to_json(include: { trip: { include: :user }})
  end

  def create
    trip = Trip.find(params[:trip_id])
    unauthorized unless current_user && current_user.id == trip.user_id

    @location = Location.create(
      name: params[:name],
      adress: params[:adress],
      description: params[:description],
      trip_id: params[:trip_id],
      start_date: params[:start_date],
      end_date: params[:end_date],
      position: params[:position],
      lat: params[:lat],
      ing: params[:ing]
    )
    if @location.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end

  def photos
    render json: @location.photos
  end

  def comments
    render json: @location.comments.to_json(include: :user)
  end

  def tasks
    render json: @location.tasks
  end

  def update
    @location.update(
      name: params[:name],
      adress: params[:adress],
      description: params[:description],
      start_date: params[:start_date],
      end_date: params[:end_date],
      position: params[:position],
      lat: params[:lat],
      ing: params[:ing]
    )
    if @location.save
      render :nothing => true, :status => 200
    else
      render :json => @location.errors, :status => 400
    end
  end

  def destroy
   @location.destroy
  render :nothing => true, :status => 200
  end

  private

  def check_owner!
    unauthorized unless current_user && current_user.id == @location.trip.user_id
  end

  def find_record!
    @location = Location.find(params[:id])
  end
end
