class Task < ActiveRecord::Base
  validates_presence_of :name, :location_id
  belongs_to :location
end
