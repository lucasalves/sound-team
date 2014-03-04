class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_action :display_layout?

  def display_layout?
    if request.xhr?
        render layout: false
    end
  end
end
