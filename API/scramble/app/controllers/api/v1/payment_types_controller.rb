module Api
	module V1
		class PaymentTypesController < ApplicationController
			before_action :find_payment_type, only: [:show, :destroy, :update]

			# GET /payment_types
			def index
				@payment_types = PaymentType.where(user_id: params[:user_id])
				render json: @payment_types
			end
			  # GET /payment_types/1
			def show
				render json: @payment_type
			end

			  # POST /payment_types
			def create
				@payment_type = PaymentType.new(payment_type_params)

				if @payment_type.save
				  render json: @payment_type
				else
				  render json: @payment_type.errors, status: :unprocessable_entity
				end
			end

			  # PATCH/PUT /payment_types/1
			def update
				if @payment_type.update(payment_type_params)
					render json: @payment_type
				else
					render json: @payment_type.errors, status: :unprocessable_entity
				end
			end

			  # DELETE /payment_types/1
			def destroy
				@payment_type.destroy
			end



			private

				# Using this callback to share common setup between actions.
					def find_payment_type
						@payment_type = PaymentType.find(params[:id])
					end

					def payment_type_params
      					params.require(:payment_type).permit(:card_number, :title, :csc, :name_on_card)
    				end

		end
	end
end