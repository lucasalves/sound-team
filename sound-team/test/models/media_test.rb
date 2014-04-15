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

  test "should respond to album" do
    album = create()
    assert album.respond_to?(:album), "should be respond to reference Album"
  end

  test "should require album" do
    album = create(:album => nil)
    assert album.errors[:album].any?, ":album should be required"

    album = create(:album_id => 1000)
    assert album.errors[:album].any?, ":album doesn't exist, so it should be required"
  end

  test "normalize names kind" do
    assert_equal Media.kind_normalize('images'), 'image', "should be return :image"
    assert_equal Media.kind_normalize('movies'), 'movie', "should be return :movie"
    assert_equal Media.kind_normalize('songs'),  'song', "should be return :song"
  end

  test "create screenshot of video" do
    file = Rails.root.join('test', 'fixtures', 'media', 'teu_santo_nome.mp4').to_s
    media = create({
      :name => "01 - Teu Santo Nome",
      :description => "DVD Adoradores",
      :kind => 'movie',
      :size => 75000402,
      :path => file,
      :format => 'mp4',
    })
    
    assert !media.information[:image][:img_320x180].nil?, "should be created path to :secreenshot_320x180"
    assert File.exist?(media.information[:image][:img_320x180]), "should be created file screenshot"
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
