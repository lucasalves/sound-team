class TimelineController < ApplicationController
  def index
    @timelines = Timeline.all
    respond_with @timelines do |format|
        format.json|js| { render  @timelines}
    end
  end
end
