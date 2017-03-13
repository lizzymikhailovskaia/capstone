class Trip < ActiveRecord::Base
  validates_presence_of :name, :user_id

  belongs_to :user
  has_many :locations
  has_many :comments
end
