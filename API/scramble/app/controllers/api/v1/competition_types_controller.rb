module Api
	module V1
		class CompetitionTypesController < ApplicationController
			before_action :find_competition_type, only: [:show, :destroy, :update]

			# GET /competitions
			def index
				@competition_types = CompetitionType.all
				render json: @competition_types
			end

			  # GET /competitions/1
			def show
				render json: @competition_type
			end

			  # POST /competitions
			def create
				@competition_type = CompetitionType.new(competition_params)

				if @competition_type.save
				  render json: @competition_type
				else
				  render json: @competition_type.errors, status: :unprocessable_entity
				end
			end

			  # PATCH/PUT /competition_types/1
			def update
				if @competition_type.update(competition_type_params)
					render json: @competition_type
				else
					render json: @competition_type.errors, status: :unprocessable_entity
				end
			end

			  # DELETE /competition_types/1
			def destroy
				@competition_type.destroy
			end



			private

				# Using this callback to share common setup between actions.
					def find_competition_type
						@competition_type = CompetitionType.find(params[:id])
					end

					def competition_type_params
      					params.require(:competition).permit(:title, :description)
    				end

		end
	end
end