
User.create(name: "Lizzy", email: "liza@liza.com", password: "password" , public: true, bio: "ewgjewfvewgvfgewvfgwevvgvdfvgvvchgd" )
User.create(name: "Vova", email: "vova@vova.com", password: "password" , public: true, bio: "cool man" )
User.create(name: "Andrew", email: "andy@andy.com", password: "password" , public: true, bio: "blabla" )
User.create(name: "Sofia", email: "son@son.com", password: "password" , public: false, bio: "nonnonono" )

Trip.create(user_id: 1, description: "SF", name: "cool" , start_date: 2, end_date: 5, public: true )
Trip.create(user_id: 2, description: "La", name: "cool_trip" , start_date: 2, end_date: 5, public: true )
Trip.create(user_id: 3, description: "DS", name: "cvery_cool_trip" , start_date: 2, end_date: 5, public: false )
Trip.create(user_id: 4, description: "NY", name: "super-cool-trip" , start_date: 2, end_date: 5, public: true )

Location.create(name: "cool plase", address: "near old tree", description:"no", trip_id: 1, start_date: 1, end_date: 7)
Location.create(name: "cool plase1", address: "near new tree", description:"no", trip_id: 2, start_date: 1, end_date: 7)
Location.create(name: "cool plase2", address: "near old car", description:"vo", trip_id: 3, start_date: 1, end_date: 7)
Location.create(name: "cool plase3", address: "near new tree", description:"no", trip_id: 4, start_date: 1, end_date: 7)
Location.create(name: "cool plase4", address: "near old poo", description:"no", trip_id: 5, start_date: 1, end_date: 7)


Task.create(name: "see the tree", location_id: 1, position: "rigth")
Task.create(name: "see the tree", location_id: 2, position: "riglth")
Task.create(name: "see the tree", location_id: 3, position: "left")

Photo.create(location_id: 1)

Comment.create(trip_id: 1, location_id: 1, user_id: 1, name: "ok", text: "okokokokokokok")
Comment.create(trip_id: 2, location_id: 2, user_id: 2, name: "ok", text: "okokokokokokok")
Comment.create(trip_id: 3, location_id: 3, user_id: 3, name: "ok", text: "okokokokokokok")
Comment.create(trip_id: 4, location_id: 4, user_id: 4, name: "ok", text: "okokokokokokok")
