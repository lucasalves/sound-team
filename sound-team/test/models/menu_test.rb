require 'test_helper'

class MenuTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should require name" do
    menu = create(:name => nil)
    assert menu.invalid?(:name), ":name should be required"
  end

  test "should contain more than 3 characters" do
    menu = create(:name => 'Hi!')
    assert menu.invalid?(:name), ":name should be greater than 3 characters" 
  end

  test "should respond to MenuItems" do      
    menu = create
    assert menu.respond_to?(:items), "should be respond to :items <- MenuItems"
  end

  test "should deny duplicate user" do
    menu = create
    assert menu.valid?

    menu = create
    assert menu.invalid?, "Menu should not be created"
  end

  private 
    def create(options={})
      Menu.create({
        :name => 'Main Menu'
      }.merge(options))
    end
end
