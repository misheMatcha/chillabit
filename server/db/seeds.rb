# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all

User.create!([
               {
                 # full seed later
                 # for quick testing - remove on prod
                 email: 'm@m.com',
                 username: 'm',
                 password: 'qweasdzxc',
                 age: 99,
                 gender: 'na',
                 url: 'm'
               },
               {
                 email: 'j@j.com',
                 username: 'j',
                 password: 'qweasdzxc',
                 age: 99,
                 gender: 'na',
                 url: 'j'
               }
             ])

Track.destroy_all

Track.create!([
                {
                  title: 'hi',
                  artist_id: 1,
                  permalink: 'hi'
                },
                {
                  title: 'hi',
                  artist_id: 2,
                  permalink: 'he'
                }
              ])
