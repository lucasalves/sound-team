class MediaController < ApplicationController
  def index
    @media = Media.where(Media.kind_normalize(params[:kind]))
  end
end
