require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "User has a name" do
    assert_equal("John Smith", users(:one).name)
  end
end
