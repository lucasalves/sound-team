require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  test "should requite name" do
    category = create(:name => nil)
    assert category.errors[:name].any?, ":name should be required"
  end

  private
    def create(options={})
      Category.create({
        :name => "Fundo Musical"
      }.merge(options))
    end
end