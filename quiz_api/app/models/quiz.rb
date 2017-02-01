class Quiz < ApplicationRecord
  has_many :questions
  has_many :results
  has_many :users, through: :results
end
