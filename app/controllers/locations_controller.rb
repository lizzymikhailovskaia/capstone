class LocationsController < ApplicationController
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

  def update
    @location = Location.find(params[:id])
    @location.update(
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

  def destroy
   @location = Location.find(params[:id])
   @location.destroy
  render :nothing => true, :status => 200
  end
end
