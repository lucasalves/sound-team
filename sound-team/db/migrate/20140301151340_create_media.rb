class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.string :name
      t.text :description
      t.text :legent
      t.string :format
      t.integer :size
      t.string :path
      t.string :type

      t.timestamps
    end
  end
end
