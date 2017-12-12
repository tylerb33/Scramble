class AddingTeamNameAndPaymentIdColumnsToJoin < ActiveRecord::Migration[5.1]
  def change
  	add_column :competition_users, :payment_type_id, :integer
  	add_column :competition_users, :team_name, :string
  end
end
