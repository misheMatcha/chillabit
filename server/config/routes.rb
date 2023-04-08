Rails.application.routes.draw do
  get 'authenticates/create'
  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      post 'login', to: 'authenticates#create'
      post 'verify/handle', to: 'authenticates#verify_handle'
      resources :users
    end
  end
end
