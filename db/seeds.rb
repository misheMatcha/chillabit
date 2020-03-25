# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {username: 'mishe', email: 'mishe@chillabit.com', password: 'password'},
  {username: 'guest', email: 'guest@chillabit.com', password: 'password'},
  {username: 'ocha', email: 'ocha@chillabit.com', password: 'password'},
])

# tracks = Track.create([
#   {name: 'test', artist_id: 3}
# ])

albums = Album.create([
  {name: 'Love Story', single: false, genre: 'lofi', artist_id: 3},
])