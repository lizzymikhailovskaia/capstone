require 'unirest'

class PhotosController < ApplicationController
  before_action :find_record!, only: [:destroy]
  before_action :check_owner!, only: [:destroy]
  before_action :authenticate_user!, only: [:create]

  def create
    location = Location.find(params[:location_id])
    unauthorized unless current_user && current_user.id == location.trip.user_id

    response = Unirest.post("http://uploads.im/api?upload", parameters: {file: params[:file]}).body
    @photo = Photo.create(
      location_id: params[:location_id],
      file: response["data"]["img_url"]
    )
    render :nothing => true, :status => 200
  end

  def destroy
    @photo.destroy
    flash[:warning] = "photo Destroyed"
    render :nothing => true, :status => 200
  end

  private

  def check_owner!
    unauthorized unless current_user && current_user.id == @photo.location.trip.user_id
  end

  def find_record!
    @photo = Photo.find(params[:id])
  end
end
