class User < ApplicationRecord
  extend FriendlyId
  friendly_id :url, use: :slugged

  has_secure_password
  validates :email, :username, :password_digest, :url, presence: true
  validates :email, :url, uniqueness: true
  validates :username, length: { maximum: 50 }
  validates_numericality_of :age,  greater_than_or_equal_to: 13,
                                   message: "Sorry, but you don't meet Chillabit's minimum age requirements", allow_blank: true
  validates :age, presence: { message: 'Enter your age.' }
  validates :gender, presence: { message: 'Please indicate your gender.' }
  validates :password, length: { minimum: 8 }, on: :create

  before_validation :generate_username, :generate_profile_url

  has_one_attached :header_bg
  has_one_attached :avatar

  has_many :tracks, class_name: 'Track', foreign_key: 'artist_id'

  private

  def generate_username
    return unless username.blank?

    self.username = 'User ' + rand(999_999_999).to_s
  end

  def generate_profile_url
    self.url = url.blank? ? username.parameterize : url.parameterize
  end

  def should_generate_new_friendly_id?
    url_changed?
  end
end
