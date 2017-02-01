require 'test_helper'

class QuizTest < ActiveSupport::TestCase
 test "Quiz has a title" do
   assert_equal("Quiz One", quizzes(:one).title)
 end
 test "Quiz can count questions" do
  assert_equal(1, quizzes(:one).questions.count)
 end
 test "Quiz has results" do
   assert_equal(1, quizzes(:one).results.count)
 end
 test "Quiz has users" do
   assert_equal(1, quizzes(:one).users.count)
 end
end
