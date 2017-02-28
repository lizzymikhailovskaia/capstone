class Trip < ActiveRecord::Base
  belongs_to :user
  has_many :locations
  has_many :comments
end
