class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.integer :user_id
      t.string :description
      t.string :name
      t.integer :start_date
      t.integer :end_date
      t.boolean :public
      t.string :photo

      t.timestamps null: false
    end
  end
end
