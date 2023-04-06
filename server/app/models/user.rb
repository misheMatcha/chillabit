class User < ApplicationRecord
  has_secure_password
  validates :email, :username, :password_digest, :age, :gender, :url, presence: true
  validates :email, :username, :url, uniqueness: true
  validates :password, length: { minimum: 8 }
end
