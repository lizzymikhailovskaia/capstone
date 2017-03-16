class TasksController < ApplicationController
  def index
    tasks = Task.all
    render json: tasks
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def create
    @task = Task.create(
      name: params[:name],
      location_id: params[:location_id],
      position: params[:position],
    )
    if @task.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end

  def update
    @task = Task.find(params[:id])
    @task.update(
      name: params[:name],
      location_id: params[:location_id],
      position: params[:position]
    )
    if @task.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    flash[:warning] = "Task Destroyed"
    render :nothing => true, :status => 200
  end
end
