require 'chronic'

class Location < ActiveRecord::Base
  validates_presence_of :name, :trip_id, :address

  belongs_to :trip
  has_many :tasks, -> { order(created_at: :asc) }
  has_many :photos, -> { order(created_at: :desc) }
  has_many :comments, -> { order(created_at: :desc) }

  geocoded_by :address
  after_validation :geocode, if: ->(obj){ obj.address.present? and obj.address_changed? }

  attr_accessor :start_date, :end_date

  def start_date
    read_attribute(:start_date).strftime('%m/%d/%Y') if read_attribute(:start_date)
  end

  def end_date
    read_attribute(:end_date).strftime('%m/%d/%Y') if read_attribute(:end_date)
  end

  def start_date=(value)
    write_attribute(:start_date, Chronic.parse(value))
  end

  def end_date=(value)
    write_attribute(:end_date, Chronic.parse(value))
  end
end
