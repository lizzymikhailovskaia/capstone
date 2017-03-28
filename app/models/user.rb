class User < ActiveRecord::Base
  validates_presence_of :name, :email

  has_secure_password
  has_many :trips, -> { order(created_at: :desc) }
  has_many :comments
end
