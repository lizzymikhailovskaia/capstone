User.destroy_all
Trip.destroy_all


names = ['Test', 'Bob' , 'Jane', 'Lisa', 'Lucky']
names.each do |name|
  user = User.create(name: name, email: "#{name}@#{name}.com".downcase, password: "password")
  # 3.times do
  #   trip = Trip.create(
  #   description: Faker::Lorem.sentence,
  #   name: Faker::Lorem.sentence,
  #   user_id: user.id
  #   )
  # end
end




puts "done!"
