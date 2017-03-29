require 'chronic'

class Trip < ActiveRecord::Base
  validates_presence_of :name, :user_id

  belongs_to :user
  has_many :locations, -> { order(created_at: :asc) }
  has_many :comments, -> { order(created_at: :desc) }

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
