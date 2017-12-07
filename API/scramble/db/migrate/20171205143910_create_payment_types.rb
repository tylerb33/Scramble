class CreatePaymentTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :payment_types do |t|
      t.references :user, foreign_key: true
      t.string :title
      t.bigint :card_number
      t.string :name_on_card
      t.integer :csc

      t.timestamps
    end
  end
end
