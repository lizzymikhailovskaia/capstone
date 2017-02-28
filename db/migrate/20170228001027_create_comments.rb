class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :trip_id
      t.integer :location_id
      t.integer :user_id
      t.string :name
      t.text :text

      t.timestamps null: false
    end
  end
end
