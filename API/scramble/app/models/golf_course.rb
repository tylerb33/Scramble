class GolfCourse < ApplicationRecord
  has_many :competitions

  has_many :past_rounds
  has_many :users, through: :past_rounds
end
