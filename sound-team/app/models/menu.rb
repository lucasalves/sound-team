class Menu < ActiveRecord::Base
    has_many :items, :class_name => :MenuItem

    validates :name, length: { minimum: 4 }, uniqueness: true
end
