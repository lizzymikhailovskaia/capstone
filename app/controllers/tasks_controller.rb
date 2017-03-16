class TasksController < ApplicationController

  def index
    if session[:count] == nil
      session[:count] = 0
    end
    session[:count] += 1
    @visit_count = session[:count]
    @tasks = Task.all
    if params[:category]
      @tasks = Category.find_by(name: params[:category]).tasks
    end
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
