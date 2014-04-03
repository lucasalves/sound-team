class Media < ActiveRecord::Base
    serialize :information

    belongs_to :album
    belongs_to :component
    has_and_belongs_to_many :categories

    validates :name, :format, :size, :path, :kind, :album, presence: true

    def self.kind_normalize(kind)
      case kind
      when 'songs'  then 'song'
      when 'images' then 'image'
      when 'movies' then 'movie'
      else kind
      end
    end
end
