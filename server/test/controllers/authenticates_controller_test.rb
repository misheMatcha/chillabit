require 'test_helper'

class AuthenticatesControllerTest < ActionDispatch::IntegrationTest
  test 'should get create' do
    get authenticates_create_url
    assert_response :success
  end
end
