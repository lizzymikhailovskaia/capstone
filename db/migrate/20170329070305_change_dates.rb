class ChangeDates < ActiveRecord::Migration
  def change
    remove_column :trips, :start_date
    add_column :trips, :start_date, :datetime
    remove_column :trips, :end_date
    add_column :trips, :end_date, :datetime

    remove_column :locations, :start_date
    add_column :locations, :start_date, :datetime
    remove_column :locations, :end_date
    add_column :locations, :end_date, :datetime
  end
end
