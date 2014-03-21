class Album < ActiveRecord::Base    
    has_one :media

    validates :name, :description, :date, :media, presence: true
end
