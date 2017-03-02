class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.string :adress
      t.text :description
      t.integer :trip_id
      t.integer :start_date
      t.integer :end_date
      t.integer :position
      t.integer :lat
      t.integer :ing

      t.timestamps null: false
    end
  end
end
