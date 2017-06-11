require 'unirest'

class UsersController < ApplicationController
  before_action :find_record!, only: [:show, :update, :destroy, :trips]
  before_action :check_owner!, only: [:update, :destroy]

  def index
    users = User.all
    render json: users
  end

  def show
    render json: @user
  end

  def trips
    render json: @user.trips
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

    @user = User.new(
      name: params[:name],
      email: params[:email],
      photo: photo_url,
      bio: params[:bio],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if @user.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end

  def update
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

    @user.update(
      name: params[:name],
      email: params[:email],
      photo: photo_url,
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if @user.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end

  def destroy
   @user.destroy
   render :nothing => true, :status => 200
  end

  private

  def check_owner!
    unauthorized unless current_user && current_user.id == @user.id
  end

  def find_record!
    @user = User.find(params[:id])
  end
end
