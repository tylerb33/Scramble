class AuthenticateUser 
	prepend SimpleCommand 
	def initialize(email, password) 
		@email = email 
		@password = password 
	end 

	def call 
		token = JsonWebToken.encode(user_id: user.id) if user
		user_id = user.id
		token_with_user_id = {token: token, user_id: user_id}
		return token_with_user_id
	end 

	private 

	attr_accessor :email, :password 

	def user 
		user = User.find_by_email(email) 
		return user if user && user.authenticate(password) 

		errors.add :user_authentication, 'invalid credentials' 
		nil 
	end 
end