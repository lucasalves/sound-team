class Media < ActiveRecord::Base
    serialize :information

    belongs_to :album
    belongs_to :component
    has_and_belongs_to_many :categories

    validates :name, :format, :size, :path, :kind, :album, presence: true

    before_create :create_screenshot

    def self.kind_normalize(kind)
      if kind.nil?
        return {}
      end

      kind = case kind
        when 'songs'  then 'song'
        when 'images' then 'image'
        when 'movies' then 'movie'
        else kind
      end

      {:kind => kind}
    end

    private
      def create_screenshot
        return case self.kind
        when 'movie'
          create_screenshot_of_movie
        end

      end

      def create_screenshot_of_movie
        require 'digest/md5'
        require 'streamio-ffmpeg'

        uri  = File.join('upload', 'screenshots', Digest::MD5.hexdigest(Time.to_s) + '.png')
        path = Rails.root.join('public', uri).to_s

        self.information = { :image => {:img_320x180 => File.join("/", uri)} }

        movie = FFMPEG::Movie.new( Rails.root.join(self.path) )
        movie.screenshot(path, {seek_time: 100, :resolution => '320x180'})
      end
end
