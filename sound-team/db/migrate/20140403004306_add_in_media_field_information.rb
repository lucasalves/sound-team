class AddInMediaFieldInformation < ActiveRecord::Migration
  def change
    add_column :media, :information, :string
  end
end
