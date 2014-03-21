class MenuItem < ActiveRecord::Base
  belongs_to :menu
  belongs_to :component

  validates :component, :menu, :name, :icon, :path, presence: true
end