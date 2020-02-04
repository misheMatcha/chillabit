class Track < ApplicationRecord
  validates :name, :album_id, :artist_id, presence: true

  belongs_to :artists,
    foreign_key: :artist_id,
    class_name: :User

  has_many :albums,
    through: :artists,
    source: :albums
end