class CreateTimelines < ActiveRecord::Migration
  def change
    create_table :timelines do |t|
      t.string :name
      t.boolean :status
      t.integer :used

      t.timestamps
    end
  end
end
