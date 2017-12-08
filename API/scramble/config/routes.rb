Rails.application.routes.draw do
  namespace 'api' do
  	namespace 'v1' do
  		resources :golf_courses
  		resources :competitions
  		resources :prizes

  		resources :users do
        resources :payment_types
        resources :competitions

      end

      resources :competition_types

  		post 'authenticate', to: 'authentication#authenticate'
      # get 'competitions', to: 'competitions#usercompetitions'

  	end
  end
end