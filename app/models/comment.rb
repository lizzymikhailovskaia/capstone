class Comment < ActiveRecord::Base
  validates_presence_of :text, :user_id
  validate :location_or_trip

  belongs_to :trip
  belongs_to :location
  belongs_to :user

  private

  def location_or_trip
    unless location_id.blank? || trip_id.blank?
      errors.add(:base, "Specify location or trip")
    end
  end
end
