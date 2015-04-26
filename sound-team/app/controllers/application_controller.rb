class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :init_data

  respond_to :html, :json, :js

  def init_data
    @sidebar = Menu.order(:name).find_by(name: 'Main Menu').items
  end
end
