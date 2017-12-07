class CreatePastRounds < ActiveRecord::Migration[5.1]
  def change
    create_table :past_rounds do |t|
      t.references :golf_course, foreign_key: true
      t.references :user, foreign_key: true
      t.integer :score
      t.datetime :date

      t.timestamps
    end
  end
end
