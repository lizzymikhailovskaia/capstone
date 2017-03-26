class CommentsController < ApplicationController
  # #TODO: remove it
  def current_user
    User.first
  end

  def index
    comments = Comments.all
    render json: comments
  end

  def show
    comment = Comment.find(params[:id])
    render json: comment
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(
      text: params[:text],
      trip_id: params[:trip_id],
      location_id: params[:location_id],
      user_id: current_user.id
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
      text: params[:text],
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
