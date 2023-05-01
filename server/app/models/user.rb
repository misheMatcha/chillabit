class User < ApplicationRecord
  has_secure_password
  validates :email, :username, :password_digest, :url, presence: true
  validates :email, :url, uniqueness: true
  validates :username, length: { maximum: 50 }
  validates_numericality_of :age,  greater_than_or_equal_to: 13,
                                   message: "Sorry, but you don't meet Chillabit's minimum age requirements", allow_blank: true
  validates :age, presence: { message: 'Enter your age.' }
  validates :gender, presence: { message: 'Please indicate your gender.' }
  validates :password, length: { minimum: 8 }

  before_validation :generate_username, :generate_profile_url

  private

  def generate_username
    return unless username.blank?

    self.username = 'User ' + rand(999_999_999).to_s
  end

  def generate_profile_url
    self.url = username.downcase.gsub(' ', '-')
  end
end
