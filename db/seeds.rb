require_relative 'seed_data.rb'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# users = User.create([
#   {username: 'mishe', email: 'mishe@chillabit.com', password: 'password'},
#   {username: 'guest', email: 'guest@chillabit.com', password: 'password'},
#   {username: 'ocha', email: 'ocha@chillabit.com', password: 'password'},
# ])

users = User.create(USERS)

# tracks = Track.create([
#   {name: 'test', artist_id: 3}
# ])

require 'open-uri'

for i in 0...TRACKS.length
  newTrack = Track.create(
    name: TRACKS[i][:name],
    artist_id: i + 8,
    genre: TRACKS[i][:genre],
    tags: TRACKS[i][:tags],
    desc: TRACKS[i][:desc]
  )

  file = open(TRACKS[i][:cover])
  newTrack.cover.attach(io: file, filename: TRACKS[i][:covername])
  track_file = open(TRACKS[i][:file])
  newTrack.trackFiles.attach(io: track_file, filename: TRACKS[i][:filename])

  newTrack.save
end

# albums = Album.create([
#   {name: 'Love Story', single: false, genre: 'lofi', artist_id: 3},
# ])