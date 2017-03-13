class Photo < ActiveRecord::Base
  validates_presence_of :file, :location_id
  belongs_to :location
end
