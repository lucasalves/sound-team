class InitializeController < ApplicationController
    def data
        render :json => {
            menu: Menu.find_by(name: 'Main Menu').menu_items
        }
    end
end