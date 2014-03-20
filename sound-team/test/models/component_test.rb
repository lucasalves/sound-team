require 'test_helper'

class ComponentTest < ActiveSupport::TestCase
  test "Should require name" do
    component = create(name: nil)
    assert component.errors[:name].any?, ":name should be required"
  end

  def create(options={})
    Component.create({
      name: "Media Administrator",
      description: "The average administrator allows you to manage all your video data, images and audio"
    }.merge(options))
  end
end
