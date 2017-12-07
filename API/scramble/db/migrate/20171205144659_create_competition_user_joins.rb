class CreateCompetitionUser < ActiveRecord::Migration[5.1]
  def change
    create_table :competition_user do |t|
      t.references :competition, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
