class User < ApplicationRecord
  has_many :results
  has_many :quizzes, through: :results
end
