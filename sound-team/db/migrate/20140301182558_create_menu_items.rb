class CreateMenuItems < ActiveRecord::Migration
  def change
    create_table :menu_items do |t|
      t.string :name
      t.text :description
      t.string :icon
      t.string :path
      t.references :menu_id, index: true
      t.references :component_id, index: true

      t.timestamps
    end
  end
end
