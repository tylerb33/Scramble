module Api
	module V1
		class GolfCoursesController < ApplicationController
			before_action :find_golf_course, only: [:show]

			def index
				@golf_courses = GolfCourse.all
				render json: @golf_courses
			end

			def show
				render json: @golf_course
			end

			private

			# Using this callback to share common setup between actions.
				def find_golf_course
				@golf_course = GolfCourse.find(params[:id])
				end

		end
	end
end