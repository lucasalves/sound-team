class MenuItem < ActiveRecord::Base
  belongs_to :menu
  belongs_to :component
end
