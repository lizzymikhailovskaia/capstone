class CommentsController < ApplicationController

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(
      name: params[:name],
      text: params[:text],
      trip_id: params[:trip_id],
      location_id: params[:location_id],
      user_id: params[:user_id]
    )

    if @comment.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end


  def update
    @comment = Comment.find(params[:id])
    @comment.update(
      name: params[:name],
      text: params[:text],
      trip_id: params[:trip_id],
      location_id: params[:location_id],
      user_id: params[:user_id]
    )

    if @comment.save
      render :nothing => true, :status => 200
    else
      render :nothing => true, :status => 400
    end
  end

  def destroy
   @comment = Comment.find(params[:id])
   @comment.destroy
   render :nothing => true, :status => 200
  end
end
