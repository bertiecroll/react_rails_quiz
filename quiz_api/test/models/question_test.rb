require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  test "Question has a title" do
    assert_equal("What is the capital of Scotland?", questions(:one).title)
  end
  test "Question has a quiz" do
    assert questions(:one).quiz = quizzes(:one)
  end
  test "Question can count answers" do
   assert_equal(2, questions(:one).answers.count)
  end
end
