class User < ActiveRecord::Base
  validates_presence_of :name, :email

  has_secure_password
  has_many :trips
  has_many :comments
end
