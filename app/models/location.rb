class Location < ActiveRecord::Base
  validates_presence_of :name, :trip_id
  belongs_to :trip
  has_many :tasks
  has_many :photos
  has_many :comments
end
