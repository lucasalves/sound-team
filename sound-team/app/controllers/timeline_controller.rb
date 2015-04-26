class TimelineController < ApplicationController
  def index
    @timelines = Timeline.all
    respond_with @timelines
  end

  def items
    @items = Timeline.find(params[:id]).media
    respond_with @items
  end
end
