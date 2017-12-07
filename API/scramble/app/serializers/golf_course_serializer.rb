class GolfCourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :street_address, :city, :state, :postal_code, :website_link, :user_id
end
