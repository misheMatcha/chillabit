class User < ApplicationRecord
  has_secure_password
  validates :email, :username, :password_digest, :age, :gender, :url, presence: true
  validates :email, :username, :url, uniqueness: true
  validates :username, length: { maximum: 50 }
  validates :age, numericality: { only_integer: true }
  validates :password, length: { minimum: 8 }

  before_validation :generate_username, :generate_profile_url

  private

  def generate_username
    return unless username == ''

    self.username = 'User ' + rand(999_999_999).to_s
  end

  def generate_profile_url
    self.url = username.downcase.gsub(' ', '-')
  end
end
