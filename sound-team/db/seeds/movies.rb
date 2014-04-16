p "seed Movies"

component = Component.where(name: "Movies").first
album = Album.create({:name => "Adoradores", :date => Date.parse("2014-01-01"), :description => "DVD Adoradores"})
path  = "public/media/movies/2014/04/adoradores"

'Teu Santo Nome - DVD Adoradores'

media = Media.new
media.name      = "01 - Teu Santo Nome"
media.component = component
media.legend    = "Todo ser que vive louve o nome do Senhor
Toda criatura se derrame aos Seus pés
Ao som da Sua voz o universo se desfaz
Não há outro nome comparado ao Grande Eu Sou

E mesmo sendo pó
Com tudo que há em mim
Confessarei:
Que Céus e Terra passarão
Mas o Teu nome é Eterno

(Refrão):

Todo joelho dobrará
Ao ouvir Teu nome
Teu Santo nome
Todo ser confessará
Louvado seja o Teu nome
Teu Santo nome"
media.format    = 'mp4'
media.kind      = 'movie'
media.path      = "#{path}/teu_santo_nome.mp4"
media.album     = album
media.size      = 1592219
media.save
