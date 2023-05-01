class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :username, null: false
      t.string :password_digest, null: false
      t.integer :age, null: false
      t.string :gender, null: false
      t.string :city
      t.string :country
      t.text :bio
      t.string :url, null: false
      t.string :website
      t.string :support_url

      t.index :email, unique: true
      t.index :username, unique: true
      t.index :url, unique: true
      t.timestamps
    end
  end
end
