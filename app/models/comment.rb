class Comment < ActiveRecord::Base
  validates_presence_of :name, :trip_id, :location_id, :user_id
  belongs_to :trip
  belongs_to :location
  belongs_to :user
end
