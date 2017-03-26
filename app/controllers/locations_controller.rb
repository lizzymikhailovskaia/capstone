class LocationsController < ApplicationController
  def index
    locations = Location.all
    render json: locations
  end

  def show
    location = Location.find(params[:id])
    render json: location
  end

  def create
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
    location = Location.find(params[:id])
    render json: location.photos
  end

  def update
    @location = Location.find(params[:id])
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
   @location = Location.find(params[:id])
   @location.destroy
  render :nothing => true, :status => 200
  end
end
