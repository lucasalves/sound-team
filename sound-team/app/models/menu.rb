class Menu < ActiveRecord::Base
    has_many :items
    
    validates :name, length: { minimum: 4 }, uniqueness: true
end
