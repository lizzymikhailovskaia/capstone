require 'unirest'

class PhotosController < ApplicationController
  def create
    response = Unirest.post("http://uploads.im/api?upload", parameters: {file: params[:file]}).body
    @photo = Photo.create(
      location_id: params[:location_id],
      file: response["data"]["img_url"]
    )
    render :nothing => true, :status => 200
  end

  def show
    photo = Photo.find(params[:id])
    render json: photo
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    flash[:warning] = "photo Destroyed"
    render :nothing => true, :status => 200
  end
end
