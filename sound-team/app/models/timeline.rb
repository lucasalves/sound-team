class Timeline < ActiveRecord::Base
  has_many :media_has_timeline
  has_many :media, :through => :media_has_timeline
end
