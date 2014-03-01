class Media < ActiveRecord::Base
    has_one :albums
    has_one :components

    has_and_belongs_to_many :categories
end