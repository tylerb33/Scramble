module Api
	module V1
		class PrizesController < ApplicationController
			before_action :find_prize, only: [:show, :destroy, :update]

			# GET /prizes
			def index
				@prizes = Prize.all
				render json: @prizes
			end
			  # GET /prizes/1
			def show
				render json: @prize
			end

			  # POST /prizes
			def create
				puts params
				@prize = Prize.new(prize_params)

				if @prize.save
				  render json: @prize
				else
				  render json: @prize.errors, status: :unprocessable_entity
				end
			end

			  # PATCH/PUT /prizes/1
			def update
				if @prize.update(prize_params)
					render json: @prize
				else
					render json: @prize.errors, status: :unprocessable_entity
				end
			end

			  # DELETE /prizes/1
			def destroy
				@prize.destroy
			end



			private

				# Using this callback to share common setup between actions.
					def find_prize
						@prize = Prize.find(params[:id])
					end

					def prize_params
      					params.require(:prize).permit(:title, :description, :competition_id)
    				end

		end
	end
end