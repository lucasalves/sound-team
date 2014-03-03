class CreateMenuItems < ActiveRecord::Migration
  def change
    create_table :menu_items do |t|
      t.string :name
      t.text :description
      t.string :icon
      t.string :path
      t.references :menu, index: true
      t.references :component, index: true

      t.timestamps
    end
  end
end
