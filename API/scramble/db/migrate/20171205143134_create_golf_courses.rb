class CreateGolfCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :golf_courses do |t|
      t.string :title
      t.string :street_address
      t.string :city
      t.string :state
      t.string :postal_code
      t.string :website_link
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
