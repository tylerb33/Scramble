module Api
	module V1
		class CompetitionsController < ApplicationController
			before_action :find_competition, only: [:show, :destroy, :update]

			# GET /competitions
			def users_upcoming_competitions
				@user = User.find(params[:user_id])
				@competitions = @user.competitions
				render json: @competitions
			end

			# GET /competitions
			def index
				if params[:user_id]
					@competitions = Competition.where(user_id: params[:user_id])
				else 
					@competitions = Competition.all
				end

				render json: @competitions
			end
			
			
			  # GET /competitions/1
			def show
				render json: @competition
			end

			  # POST /competitions
			def create
				@competition = Competition.new(competition_params)

				if @competition.save
				  render json: @competition
				else
				  render json: @competition.errors, status: :unprocessable_entity
				end
			end

			  # PATCH/PUT /competitions/1
			def update
				if @competition.update(competition_params)
					render json: @competition
				else
					render json: @competition.errors, status: :unprocessable_entity
				end
			end

			  # DELETE /competitions/1
			def destroy
				@competition.destroy
			end



			private

				# Using this callback to share common setup between actions.
					def find_competition
						@competition = Competition.find(params[:id])
					end

					def competition_params
      					params.require(:competition).permit(:title, :description, :competition_type_id, :golf_course_id, :date, :time, :contact_email, :entry_fee, :user_id)
    				end

		end
	end
end