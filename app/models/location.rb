class Location < ActiveRecord::Base
  belongs_to :trip
  has_many :tasks
  has_many :photos
  has_many :comments
end
