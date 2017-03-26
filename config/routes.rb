Rails.application.routes.draw do
   root to: 'home#index'

   resources :trips, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   resources :users, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   resources :locations, only: [:new, :edit, :create, :show, :update, :destroy]
   get "/locations/:id/photos" => "locations#photos"
   get "/locations/:id/comments" => "locations#comments"
   get "/trips/:id/locations" => "trips#locations"
   get "/trips/:id/comments" => "trips#comments"
   resources :tasks, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   resources :photos, only: [:create, :new, :edit, :show, :update, :destroy]
   resources :comments, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   get "/login" => "sessions#new"
   post "/login" => "sessions#create"
   get "/logout" => "sessions#destroy"
 end
