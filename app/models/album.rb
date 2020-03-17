class Album < ApplicationRecord
  validates :name, :genre, :artist_id, presence: true
  validates :single, inclusion: { in: [true, false] }

  belongs_to :artists,
    foreign_key: :artist_id,
    class_name: :User

  has_many :tracks,
    through: :artists,
    source: :tracks

  has_one_attached :album_cover
end