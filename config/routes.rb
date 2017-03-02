Rails.application.routes.draw do

 root to: 'trips#index'

 resources :trips, only: [:index, :new, :create, :show, :edit, :update, :destroy]
 resources :users, only: [:new, :create, :show, :edit, :update, :destroy]
 resources :locations, only: [:index, :new, :create, :show, :edit, :update, :destroy]
 resources :tasks, only: [:index, :new, :create, :show, :edit, :update, :destroy]
 resources :photos, only: [:index, :new, :create, :show, :edit, :update, :destroy]
 resources :comments, only: [:index, :new, :create, :show, :edit, :update, :destroy]
 get "/login" => "sessions#new"
 post "/login" => "sessions#create"
 get "/logout" => "sessions#destroy"

 end
