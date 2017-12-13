class CompetitionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :time, :entry_fee, :contact_email, :user_id
  belongs_to :competition_type
  belongs_to :golf_course
end
