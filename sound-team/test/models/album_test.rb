require 'test_helper'

class AlbumTest < ActiveSupport::TestCase
  test "should require name" do
    album = create(:name => nil)
    assert album.errors[:name].any?, ":name should be required"
  end

  test "should require description" do
    album = create(:description => nil)
    assert album.errors[:description].any?, ":description should be required"
  end

  test "should require date" do
    album = create(:date => nil)
    assert album.errors[:date].any?, ":date should be required"
  end
  
  private
    def create(options={})
      Album.create({
        :name => "CD Jovem 2014",
        :description => "CD Jovem 2014 desc",
        :date => Date.parse("2014-03-20"),
      }.merge(options))
    end
end
