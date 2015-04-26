class MediaController < ApplicationController
  def index
    @media = Media.where(Media.kind_normalize(params[:kind]))
    respond_with(@media)
  end

  def search
    if params[:q]
      @media = MediaIndex.query(query_string: {query: params[:q]}).load
    else
      @media = MediaIndex.query(match_all: {}).load
    end

    respond_with(@media)
  end

  def show
    @media = Media.find(params[:id])
    respond_with(@media)
  end
end
