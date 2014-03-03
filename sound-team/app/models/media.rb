class Media < ActiveRecord::Base
    has_one :album
    has_one :component

    has_and_belongs_to_many :categories
end