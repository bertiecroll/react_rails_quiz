require 'test_helper'

class ResultTest < ActiveSupport::TestCase
  test "Result has a score" do
    assert_equal(50, results(:one).score)
  end
  test "Result has a user" do
    assert_equal(users(:one), results(:one).user)
  end
  test "Result has a quiz" do
    assert_equal(quizzes(:one), results(:one).quiz)
  end
end
