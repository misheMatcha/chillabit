class User < ApplicationRecord
  has_secure_password
  validates :email, :username, :password_digest, :age, :gender, :url, presence: true
  validates :email, :username, :url, uniqueness: true
  validates :age, numericality: { only_integer: true }
  validates :password, length: { minimum: 8 }

  before_validation :generate_profile_url

  private

  def generate_profile_url
    self.url = username + '-' + rand(9999).to_s
  end
end
