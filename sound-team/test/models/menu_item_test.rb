require 'test_helper'

class MenuItemTest < ActiveSupport::TestCase
  test "Should responde to componet" do
    item = create()
    assert item.respond_to?(:component), "Should be respond to reference Component"
  end

  test "Should require component" do
    item = create(:component => nil)
    assert item.errors[:component].any?, ":component should be required"

    item = create(:component_id => 1000)
    assert item.errors[:component].any?, "Component doesn't exist, so it should be required"
  end

  test "Should responde to menu" do
    item = create()
    assert item.respond_to?(:menu), "Should be respond to reference Menu"
  end

  test "Should require menu" do 
    item = create(:menu => nil)
    assert item.errors[:menu].any?, ":menu should be required"

    item = create(:menu_id => 1000)    
    assert item.errors[:menu].any?, "Menu doesn't exist, so it should be required"
  end

  test "Should require name" do
    item = create(:name => nil)
    assert item.errors[:name].any?, ":name should be required"
  end

  test "Should require icon" do
    item = create(:icon => nil)
    assert item.errors[:icon].any?, ":icon should be required"
  end

  test "Should require path" do
    item = create(:path => nil)
    assert item.errors[:path].any?, ":path should be required"
  end

  private
    def create(options={})
      MenuItem.create({
        :name => "Dashboard",
        :description => "Home application",
        :icon => "dashboard",
        :path => "/",
        :menu => Menu.last,
        :component => Component.last
      }.merge(options))
    end
end