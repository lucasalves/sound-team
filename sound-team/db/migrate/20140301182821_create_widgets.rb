class CreateWidgets < ActiveRecord::Migration
  def change
    create_table :widgets do |t|
      t.string :name
      t.text :description
      t.string :path
      t.integer :order
      t.references :component_id, index: true

      t.timestamps
    end
  end
end
