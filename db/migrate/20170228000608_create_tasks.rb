class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :location_id
      t.string :position

      t.timestamps null: false
    end
  end
end
