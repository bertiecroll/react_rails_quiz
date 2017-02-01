require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "User has a name" do
    assert_equal("John Smith", users(:one).name)
  end
  test "User has results" do
    assert_equal(1, users(:one).results.count)
  end
  test "User has quizzes" do
    assert_equal(1, users(:one).quizzes.count)
  end
end
