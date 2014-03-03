class AddComponentIdAndAlbumIdInMedia < ActiveRecord::Migration
  def change
    add_reference :media, :component, index: true
    add_reference :media, :album, index: true
  end
end
