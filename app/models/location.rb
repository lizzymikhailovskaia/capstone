class Location < ActiveRecord::Base
  validates_presence_of :name, :trip_id
  belongs_to :trip
  has_many :tasks, -> { order(created_at: :asc) }
  has_many :photos, -> { order(created_at: :desc) }
  has_many :comments, -> { order(created_at: :desc) }
end
