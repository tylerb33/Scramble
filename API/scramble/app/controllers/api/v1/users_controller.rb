module Api
	module V1
		class UsersController < ApplicationController
			skip_before_action :authenticate_request, only: [:create]
			before_action :find_user, only: [:show, :destroy, :update]

			# GET /users
			def index
				@users = User.all
				render json: @users
			end
			  # GET /users/1
			def show
				render json: @user
			end

			  # POST /users
			def create
				@user = User.new(user_params)

				if @user.save
				  render json: @user
				else
				  render json: @user.errors, status: :unprocessable_entity
				end
			end

			  # PATCH/PUT /users/1
			def update
				if @user.update(user_params)
					render json: @user
				else
					render json: @user.errors, status: :unprocessable_entity
				end
			end

			  # DELETE /users/1
			def destroy
				@user.destroy
			end



			private

				# Using this callback to share common setup between actions.
					def find_user
						@user = User.find(params[:id])
					end

					def user_params
      					params.require(:user).permit(:first_name, :last_name, :city, :state, :postal_code, :email, :password, :password_confirmation)
    				end

		end
	end
end