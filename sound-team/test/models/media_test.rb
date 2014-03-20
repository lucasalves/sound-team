require 'test_helper'

class MediaTest < ActiveSupport::TestCase
  test "should require name" do
    media = create(:name => nil)
    assert media.errors[:name].any?, ":name should be required"
  end

  test "should require format" do
    media = create(:format => nil)
    assert media.errors[:format].any?, ":format should be required"
  end

  test "should require size" do
    media = create(:size => nil)
    assert media.errors[:size].any?, ":size should be required"
  end

  test "should require path" do
    media = create(:path => nil)
    assert media.errors[:path].any?, ":path should be required"
  end

  test "should require kind" do
    media = create(:kind => nil)
    assert media.errors[:kind].any?, ":kind should be required"
  end

  private
    def create(options={})
      Media.create({
        :name => "Melhor Lugar do Mundo",
        :description => "Musica melhor lugar do mundo",
        :legend => "...",
        :format => "mp3",
        :size => 14677333,
        :path => 'songs/2014/03/mlm',
        :kind => 'song',
        :component => Component.last,
        :album => Album.last

      }.merge(options))
    end
end