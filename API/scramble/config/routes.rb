Rails.application.routes.draw do
  namespace 'api' do
  	namespace 'v1' do
  		resources :golf_courses
  		resources :payment_types
  		resources :competitions
  		resources :prizes
  		resources :users

  		post 'authenticate', to: 'authentication#authenticate'
  	end
  end
end
