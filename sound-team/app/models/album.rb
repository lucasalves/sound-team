class Album < ActiveRecord::Base
  has_one :media
  update_index('media') { media }

  validates :name, :description, :date, presence: true
end