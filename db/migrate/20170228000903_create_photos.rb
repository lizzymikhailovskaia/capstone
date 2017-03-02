class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :location_id
      t.string :file

      t.timestamps null: false
    end
  end
end
