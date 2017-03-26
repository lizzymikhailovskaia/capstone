Rails.application.routes.draw do
   root to: 'home#index'

   resources :trips, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   resources :users, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   resources :locations, only: [:new, :edit, :create, :show, :update, :destroy]
   get "/locations/:id/photos" => "locations#photos"
   get "/locations/:id/comments" => "locations#comments"
   get "/locations/:id/tasks" => "locations#tasks"
   get "/trips/:id/locations" => "trips#locations"
   get "/trips/:id/comments" => "trips#comments"
   resources :tasks, only: [:new, :edit, :create, :show, :update, :destroy]
   resources :photos, only: [:new, :create, :edit, :show, :update, :destroy]
   resources :comments, only: [:new, :edit, :create, :show, :update, :destroy]
   get "/login" => "sessions#new"
   post "/login" => "sessions#create"
   get "/logout" => "sessions#destroy"
 end
