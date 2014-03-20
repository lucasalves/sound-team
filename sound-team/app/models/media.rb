class Media < ActiveRecord::Base
    belongs_to :album
    belongs_to :component    

    has_and_belongs_to_many :categories
end