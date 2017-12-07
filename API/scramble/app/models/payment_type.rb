class PaymentType < ApplicationRecord
  belongs_to :user, optional: true
end
