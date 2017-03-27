Rails.application.routes.draw do
   root to: 'home#index'

   resources :trips, only: [:create, :show, :update, :destroy]
   resources :users, only: [:index, :create, :show, :update, :destroy]
   resources :locations, only: [:create, :show, :update, :destroy]
   get "/locations/:id/photos" => "locations#photos"
   get "/locations/:id/comments" => "locations#comments"
   get "/locations/:id/tasks" => "locations#tasks"
   get "/trips/:id/locations" => "trips#locations"
   get "/trips/:id/comments" => "trips#comments"
   get "/users/:id/trips" => "users#trips"
   resources :tasks, only: [:create, :update, :destroy]
   resources :photos, only: [:create, :destroy]
   resources :comments, only: [:create, :update, :destroy]
   post "/login" => "sessions#create"
   get "/logout" => "sessions#destroy"
 end
