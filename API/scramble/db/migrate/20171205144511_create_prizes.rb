class CreatePrizes < ActiveRecord::Migration[5.1]
  def change
    create_table :prizes do |t|
      t.string :title
      t.text :description
      t.references :competition, foreign_key: true

      t.timestamps
    end
  end
end
