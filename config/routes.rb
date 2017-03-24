Rails.application.routes.draw do
   root to: 'home#index'

   resources :trips, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   resources :users, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   resources :locations, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   get "/locations/:id/photos" => "locations#photos"
   resources :tasks, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   resources :photos, only: [:create, :new, :edit, :show, :update, :destroy]
   resources :comments, only: [:index, :new, :edit, :create, :show, :update, :destroy]
   get "/login" => "sessions#new"
   post "/login" => "sessions#create"
   get "/logout" => "sessions#destroy"
 end
