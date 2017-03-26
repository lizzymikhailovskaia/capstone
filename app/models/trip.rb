class Trip < ActiveRecord::Base
  validates_presence_of :name, :user_id

  belongs_to :user
  has_many :locations, -> { order(created_at: :asc) }
  has_many :comments, -> { order(created_at: :desc) }
end
