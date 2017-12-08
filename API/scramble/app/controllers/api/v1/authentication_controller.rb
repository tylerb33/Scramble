module Api
	module V1

		class AuthenticationController < ApplicationController 
			skip_before_action :authenticate_request 

			def authenticate 
				command = AuthenticateUser.call(params[:email], params[:password]) 
				puts command.result[:token]
				if command.success? 
					render json: { auth_token: command.result[:token], user_id: command.result[:user_id] } 
				else 
					render json: { error: command.errors }, status: :unauthorized 
				end 
			end 
		end
	end
end