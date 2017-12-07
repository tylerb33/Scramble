class Prize < ApplicationRecord
  belongs_to :competition, optional: true
end
