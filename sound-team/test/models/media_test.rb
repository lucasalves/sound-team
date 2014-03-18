require 'test_helper'

class MediaTest < ActiveSupport::TestCase
  test "should require name" do
    media = create(:name => nil)
    assert media.erros[:name].any?, ":name should be required"
  end

  test "should require format" do
    media = create(:format => nil)
    assert media.erros[:format].any?, ":format should be required"
  end

  test "should require size" do
    media = create(:size => nil)
    assert media.erros[:size].any?, ":size should be required"
  end

  test "should require path" do
    media = create(:path => nil)
    assert media.erros[:path].any?, ":path should be required"
  end

  test "should require type" do
    media = create(:type => nil)
    assert media.erros[:type].any?, ":type should be required"
  end

  def create(options)
    Media.create({
      :name => "Melhor Lugar do Mundo",
      :description => "Musica melhor lugar do mundo",
      :legend => "...",
      :format => "mp3",
      :size => 14677333,
      :path => 'songs/2014/03/mlm',
      :type => 'song'
    }.merge(options))
  end
end
