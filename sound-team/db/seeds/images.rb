p "seed Images"

component = Component.where(name: "Images").first
album = Album.create({:name => "World", :date => Date.parse("2014-01-01"), :description => "Album World"})
path  = "public/media/images/2014/03/world"


media = Media.new
media.name      = "01 - Aurora Boreal"
media.component = component
media.format    = 'jpg'
media.kind      = 'image'
media.path      = "#{path}/01.jpg"
media.album     = album
media.size      = 594167
media.save

media = Media.new
media.name      = "02 - Aurora Boreal"
media.component = component
media.format    = 'jpg'
media.kind      = 'image'
media.path      = "#{path}/02.jpg"
media.album     = album
media.size      = 266735
media.save

media = Media.new
media.name      = "03 - Por do Sol"
media.component = component
media.format    = 'jpg'
media.kind      = 'image'
media.path      = "#{path}/03.jpg"
media.album     = album
media.size      = 755261
media.save

media = Media.new
media.name      = "04 - Jardim"
media.component = component
media.format    = 'jpg'
media.kind      = 'image'
media.path      = "#{path}/04.jpg"
media.album     = album
media.size      = 810105
media.save
