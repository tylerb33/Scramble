class Competition < ApplicationRecord
  belongs_to :competition_type
  has_many :prizes, dependent: :destroy
  belongs_to :golf_course, optional: true

  has_many :competition_users
  has_many :users, through: :competition_users
end
