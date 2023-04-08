class User < ApplicationRecord
  has_secure_password
  validates  :username, :password_digest, :age, :gender, :url, presence: true
  validates  :username, :url, uniqueness: true
  validates_format_of :email, presence: true, uniqueness: true, with: URI::MailTo::EMAIL_REGEXP,
                              message: 'Enter a valid email address or profile url.'
  validates :age, numericality: { only_integer: true }
  validates :password, length: { minimum: 8 }

  before_validation :generate_profile_url

  private

  def generate_profile_url
    self.url = username + '-' + rand(9999).to_s
  end
end
