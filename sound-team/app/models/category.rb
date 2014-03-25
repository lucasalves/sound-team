class Category < ActiveRecord::Base
    has_and_belongs_to_many :media

    validates :name, presence: true
end