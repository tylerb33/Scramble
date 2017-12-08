class User < ApplicationRecord
	has_secure_password
	
	has_many :payment_types
	
	has_many :past_rounds
  	has_many :golf_courses, through: :past_rounds

  	has_many :competition_user_joins
  	has_many :competitions, through: :competition_user_joins
  
end
