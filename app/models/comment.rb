class Comment < ActiveRecord::Base
  belongs_to :trip
  belongs_to :location
  belongs_to :user
end
