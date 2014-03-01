class MenuItem < ActiveRecord::Base
  belongs_to :menus
  belongs_to :components
end
