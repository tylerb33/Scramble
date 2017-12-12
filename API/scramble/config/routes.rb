Rails.application.routes.draw do
  namespace 'api' do
  	namespace 'v1' do
  		resources :golf_courses
  		resources :competitions
      resources :competition_users
  		resources :prizes

  		resources :users do
        resources :payment_types
        resources :competitions

      end

      resources :competition_types

  		post 'authenticate', to: 'authentication#authenticate'
      get 'custom/:user_id/competitions', to: 'competitions#users_upcoming_competitions'

    end
  end

end