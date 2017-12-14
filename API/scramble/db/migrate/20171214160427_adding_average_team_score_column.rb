class AddingAverageTeamScoreColumn < ActiveRecord::Migration[5.1]
  def change
  	add_column :competition_users, :team_average_score, :integer
  end
end
