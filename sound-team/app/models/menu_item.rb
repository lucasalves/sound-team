class MenuItem < ActiveRecord::Base
  belongs_to :menu
  belongs_to :component

  validates :component, presence: true
  validates :menu, presence: true
  validates :name, presence: true
  validates :icon, presence: true
  validates :path, presence: true
end