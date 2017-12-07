class CreateCompetitions < ActiveRecord::Migration[5.1]
  def change
    create_table :competitions do |t|
      t.string :title
      t.text :description
      t.references :competition_type, foreign_key: true
      t.references :golf_course, foreign_key: true
      t.references :user, foreign_key: true
      t.datetime :date
      t.time :time
      t.string :contact_email
      t.integer :entry_fee

      t.timestamps
    end
  end
end
