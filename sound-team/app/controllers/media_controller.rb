class MediaController < ApplicationController
  def index
    @media = Media.where(Media.kind_normalize(params[:kind]))
    respond_with(@media)
  end

  def show
    @media = Media.find(params[:id])
    respond_with(@media)
  end
end
