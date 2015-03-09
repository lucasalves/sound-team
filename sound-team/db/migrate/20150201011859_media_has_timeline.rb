class MediaHasTimeline < ActiveRecord::Migration
  def change
    create_table :media_has_timelines do |t|
      t.references :media, :timeline
      t.string :name
      t.integer :order
      
      t.timestamps      
    end
  end
end
