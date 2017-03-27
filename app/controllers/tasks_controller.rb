class TasksController < ApplicationController
  before_action :find_record!, only: [:update, :destroy]
  before_action :check_owner!, only: [:update, :destroy]
  before_action :authenticate_user!, only: [:create]

  def create
    location = Location.find(params[:location_id])
    unauthorized unless current_user && current_user.id == location.trip.user_id

    @task = Task.create(
      name: params[:name],
      location_id: params[:location_id]
    )
    if @task.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end

  def update
    @task.update(
      name: params[:name]
    )
    if @task.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end

  def destroy
    @task.destroy
    flash[:warning] = "Task Destroyed"
    render :nothing => true, :status => 200
  end

  private

  def check_owner!
    unauthorized unless current_user && current_user.id == @task.location.trip.user_id
  end

  def find_record!
    @task = Task.find(params[:id])
  end
end
