class AddingLatAndLongToGolfCourses < ActiveRecord::Migration[5.1]
  def change
  	add_column :golf_courses, :latitude, :float
  	add_column :golf_courses, :longitude, :float
  end
end
