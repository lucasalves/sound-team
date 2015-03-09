class MediaHasTimeline < ActiveRecord::Base
  belongs_to :media
  belongs_to :timeline
end
