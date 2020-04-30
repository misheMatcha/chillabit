class Track < ApplicationRecord
  validates :name, :artist_id, presence: true

  belongs_to :artists,
    foreign_key: :artist_id,
    class_name: :User

  has_many :albums,
    through: :artists,
    source: :albums

  # active storage for AWS
  has_one_attached :cover
  has_many_attached :trackFiles
end