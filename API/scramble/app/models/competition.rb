class Competition < ApplicationRecord
  belongs_to :competition_type
  has_many :prizes
  belongs_to :golf_course, optional: true

  has_many :competition_user_joins
  has_many :users, through: :competition_user_joins
end
