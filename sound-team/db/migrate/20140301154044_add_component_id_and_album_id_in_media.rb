class AddComponentIdAndAlbumIdInMedia < ActiveRecord::Migration
  def change
    add_column :media, :component_id, :integer
    add_index  :media, :component_id

    add_column :media, :album_id, :integer
    add_index  :media, :album_id
  end
end
