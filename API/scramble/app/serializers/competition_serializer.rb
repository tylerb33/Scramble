class CompetitionSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :time
  belongs_to :competition_type
  belongs_to :golf_course
end
