class Component < ActiveRecord::Base
    has_many :media

    validates :name, presence: true, uniqueness: true
end
