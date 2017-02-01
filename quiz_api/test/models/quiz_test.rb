require 'test_helper'

class QuizTest < ActiveSupport::TestCase
 test "Quiz has a title" do
   assert_equal("Quiz One", quizzes(:one).title)
 end
end
