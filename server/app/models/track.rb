class Track < ApplicationRecord
  extend FriendlyId
  friendly_id :permalink, use: :slugged

  validates :title, presence: true, uniqueness: { scope: :artist_id }
  validates :permalink, presence: true, uniqueness: true

  has_one_attached :cover_image
  has_one_attached :audio_file

  belongs_to :artist, class_name: 'User'

  private

  def should_generate_new_friendly_id?
    permalink_changed?
  end
end
