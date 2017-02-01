require 'test_helper'

class AnswerTest < ActiveSupport::TestCase
  test "Answer has a description" do
    assert_equal("Edinburgh", answers(:one).description)
  end
  test "Answer has points" do
    assert_equal(10, answers(:one).points)
  end
  test "Answer has a question" do
    assert answers(:one).question = questions(:one)
  end
end
