class AddMediaAndCategories < ActiveRecord::Migration
  def change
    create_table :categories_media do |t|
        t.references :category, :media
    end
  end
end
