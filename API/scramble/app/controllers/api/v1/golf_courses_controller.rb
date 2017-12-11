module Api
	module V1
		class GolfCoursesController < ApplicationController
			before_action :find_golf_course, only: [:show]

			def index
				@golf_courses = GolfCourse.all
				render json: @golf_courses
			end

			def create
				@golf_course = GolfCourse.new(golf_course_params)

				if @golf_course.save
				  render json: @golf_course
				else
				  render json: @golf_course.errors, status: :unprocessable_entity
				end
			end

			def show
				render json: @golf_course
			end

			private

			# Using this callback to share common setup between actions.
				def find_golf_course
					@golf_course = GolfCourse.find(params[:id])
				end

				def golf_course_params
  					params.require(:golf_course).permit(:title, :street_address, :city, :state, :postal_code, :website_link, :latitude, :longitude)
    			end

		end
	end
end