class AddLatitudeAndLongitudeToLocation < ActiveRecord::Migration
  def change
    add_column :locations, :latitude, :float
    add_column :locations, :longitude, :float
    add_column :locations, :address, :string

    remove_column :locations, :lat, :integer
    remove_column :locations, :ing, :integer
    remove_column :locations, :address, :string
  end
end
