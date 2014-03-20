class Album < ActiveRecord::Base    
    has_one :media
end
