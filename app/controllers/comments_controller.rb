class CommentsController < ApplicationController
  before_action :find_record!, only: [:update, :destroy]
  before_action :check_owner!, only: [:update, :destroy]
  before_action :authenticate_user!, only: [:create]

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
   @comment.destroy
   render :nothing => true, :status => 200
  end

  private

  def check_owner!
    unauthorized unless current_user && current_user.id == @comment.user_id
  end

  def find_record!
    @comment = Comment.find(params[:id])
  end
end
