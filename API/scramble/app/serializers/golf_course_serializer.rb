class GolfCourseSerializer < ActiveModel::Serializer
  attributes :id, :title, :street_address, :city, :state, :postal_code, :website_link, :latitude, :longitude
end
