class Component < ActiveRecord::Base
  has_many :media

  update_index('media') { media }

  validates :name, presence: true, uniqueness: true
end
