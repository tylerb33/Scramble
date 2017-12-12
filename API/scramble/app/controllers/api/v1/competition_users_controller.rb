module Api
	module V1
		class CompetitionUsersController < ApplicationController
			before_action :find_competition_user, only: [:show, :destroy, :update]

			# GET /competition_users
			def index
				@competition_users = CompetitionUser.all
				render json: @competition_users
			end

			  # GET /competition_users/1
			def show
				render json: @competition_user
			end

			  # POST /competition_users
			def create
				@competition_user = CompetitionUser.new(competition_user_params)

				if @competition_user.save
				  render json: @competition_user
				else
				  render json: @competition_user.errors, status: :unprocessable_entity
				end
			end

			  # PATCH/PUT /competition_users/1
			def update
				if @competition_user.update(competition_user_params)
					render json: @competition_user
				else
					render json: @competition_user.errors, status: :unprocessable_entity
				end
			end

			  # DELETE /competition_users/1
			def destroy
				@competition_user.destroy
			end



			private

				# Using this callback to share common setup between actions.
					def find_competition_user
						@competition_user = CompetitionUser.find(params[:id])
					end

					def competition_user_params
      					params.require(:competition_user).permit(:competition_id, :user_id, :team_name, :payment_type_id)
    				end

		end
	end
end