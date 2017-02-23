class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :password
      t.boolean :public
      t.text :bio
      t.string :photo
      t.integer :facebook_id
      t.string :facebook_taken

      t.timestamps null: false
    end
  end
end
