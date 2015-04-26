# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

component_movie = Component.create({name: 'Movies', description: 'Ut sibi fuerat socius sagittis. Ego intervenerit. Vere quia a te nuper iratus occidit illos undecim annorum puer. Deinde, si hoc forte qui fuit imperavit.'})
p "Created #{component_movie.id}##{component_movie.name}"

component_image = Component.create({name: 'Images', description: 'Blowfish librantur in se quatuor, quinquies maior quam normalis, et quare? Quare id faciam?'})
p "Created #{component_image.id}##{component_image.name}"

component_music = Component.create({name: 'Songs', description: 'Pergo coctione, et ego, et tu oblivisci Pinkman. Obliviscendum hoc unquam factum. Intelligamus hoc in sola SINGULTO multo aliter atque fructuosa negotium structura. Malo B. Option.'})
p "Created #{component_music.id}##{component_music.name}"

menu  = Menu.create({name: 'Main Menu'})
p "Created #{menu.id}##{menu.name}"

item_movie = MenuItem.create({name: 'Movies', description: 'Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo', icon: 'film', path: '/media/movies', component: component_movie, menu: menu})
p "Created #{item_movie.id}##{item_movie.name}"
item_image = MenuItem.create({name: 'Images', description: 'tu oblivisci Pinkman. Obliviscendum.', icon: 'picture-o', path: '/media/images', component: component_image, menu: menu})
p "Created #{item_image.id}##{item_image.name}"
item_song  = MenuItem.create({name: 'Songs', description: 'Pergo coctione, et ego.', icon: 'music', path: '/media/songs', component: component_music, menu: menu})
p "Created #{item_song.id}##{item_song.name}"

Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].each { |file| require file }

timeline = Timeline.create({name: 'Sábado Culto divino', status: 1, used: 0});
order = 1

Media.all({:order => "RANDOM()"}).each do |item|
  MediaHasTimeline.create({
    timeline: timeline,
    media: item,
    name:  item.kind,
    order: order
  })

  order += 1
end
p "Created Timeline: #{timeline.name}"