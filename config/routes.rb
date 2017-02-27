Rails.application.routes.draw do

 root to: 'trips#index'

 resources :trips, only: [:index, :new, :create, :show, :edit, :update, :destroy]
 resources :users, only: [:new, :create, :show, :edit, :update, :destroy]
 resources :locations, only: [:index, :new, :create, :show, :edit, :update, :destroy]

 get "/login" => "sessions#new"
 post "/login" => "sessions#create"
 get "/logout" => "sessions#destroy"

 end
