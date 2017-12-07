class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :city
      t.string :state
      t.string :postal_code
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
