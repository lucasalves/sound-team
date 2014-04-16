p "seed Songs"

component = Component.where(name: "Songs").first
album = Album.create({:name => "Porque ó Pai ?", :date => Date.parse("2002-01-01"), :description => "Arautos do Rei - Porque ó Pai ?"})
path  = "public/media/songs/2014/04/por_que_o_pai"

media = Media.new
media.name      = "01 - Breve Virá"
media.component = component
media.legend    = "Servos de Deus a trombeta tocai, breve Jesus Voltará.
A todo mundo a mensagem levai, breve Jesus Voltará.
Breve Virá, Breve Virá, Breve Jesus Voltará.
Breve Jesus Voltará."
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/01_breve_vira.mp3"
media.album     = album
media.size      = 1592219
media.save

#

media = Media.new
media.name      = "02 - Por que, Ó Pai?"
media.component = component
media.legend    = "Na vida temos que enfrentar a provação,
E a dor que atormenta para todos é igual.
Mesmo assim não consigo entender
Ao ver que alguem não sofre como eu.
Me pergunto então ó Pai.

Senhor eu quero entender o plano teu.
Tudo aquilo que reservas muito além dos olhos meus.
Dentro do meu coração sempre estás
Eu tenho confiado em tuas mãos,
Mesmo assim pergunto:

Ó pai, por que, ó pai? eu enfrento essa provação
E a tormenta encobre o sol. pergunto ó pai.
Por que ó pai? Tantas dúvidas vêm a mim,
O mistério do existir. Pergunto ó Pai.
Embora não consiga compreender,
Em tua mão sempre confiarei, ó confiarei.
Acredito em ti, ó pai.
Deus sabe quando a oração sincera é.
Ele não permite um fardo que eu não possa receber.
Ele vê toda fé que há em mim
E sabe que há perguntas mesmo assim,
Quero entender

Ó pai, por que, ó pai? eu enfrento
Essa provação e a tormenta encobre o sol
Pergunto, ó pai.
Por que ó pai? Tantas dúvidas vem a mim
O mistério do existir.
Pergunto ó pai. embora não consiga compreender
Em tua mão sempre confiarei, ó confiarei.
Acredito em ti, ó pai."
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/02_por_que_o_pai.mp3"
media.album     = album
media.size      = 4661885
media.save

#

media = Media.new
media.name      = "03 - Um Vencedor"
media.component = component
media.legend    = "Uh, uh, uh, uh, uh, uh, uh, uh

Deus nos tem chamado e com amor guiado
Tem nos motivado a prosseguir
Tem nos dirigido, nos tem fortalecido
Tem mostrado que está na direção

Eu não vou temer nem desistir
Deus vai me levantar se eu cair (se eu cair)
Vai me conceder mais do Seu poder
Basta segurar a Sua mão

Ele vai fazer de mim um vencedor
Não importa quem eu fui ou quem eu sou
O seu sangue é poderoso, seu amor é milagroso
NEle sei que posso tudo conseguir

Ele vê em mim o que eu vou me tornar
Se eu nEle esperar e confiar
Seu amor é fortaleza, dá-me força na fraqueza
Por Sua graça vou vencer, vou triunfar

Olhe a seu lado e veja com cuidado
Quantas vidas Deus já transformou
Foram destruídas, mas hoje estão erguidas
São troféus do Seu amor e Seu poder

Não duvide se alguém disser
Que transportou montanhas pela fé (pela fé)
Um poder assim, Deus nos prometeu
Se você quiser pode ser seu

Ele vai fazer de mim um vencedor
Não importa quem eu fui ou quem eu sou
O seu sangue é poderoso, seu amor é milagroso
NEle sei que posso tudo conseguir

Ele vê em mim o que eu vou me tornar
Se eu nEle esperar e confiar
Seu amor é fortaleza, dá-me força na fraqueza
Por Sua graça vou vencer
Por Sua graça vou vencer
Nessa graça vou vencer e triunfar."
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/03_um_vencedor.mp3"
media.album     = album
media.size      = 5474895
media.save

#

media = Media.new
media.name      = "04 - Vou Seguir a Jesus"
media.component = component
media.legend    = "Vou seguir a Jesus avançando com fé
Pois ele é força e poder e firme rocha aos meu pés
Minha voz irá proclamar a sua salvação
E ao Senhor o meu louvor entregar

Quando estou triste eu oro ao Senhor
E medito em suas promessas
Sei que me ouvirá, pois, sente a minha dor
Ele a mesma dor aqui sofreu neste mundo

Vou seguir a Jesus avançando com fé
Pois ele é força e poder e firme rocha aos meu pés
Minha voz irá proclamar a sua salvação
E ao Senhor o meu louvor entregar

Eu não mereço seu toque de amor
Meu viver eu sei que o condena
Mesmo assim desceu, por mim morreu
E salvou-me quando rejeitou este mundo mal

Vou seguir a Jesus avançando com fé
Pois ele é força e poder e firme rocha aos meu pés
Minha voz irá proclamar a sua salvação
E ao Senhor o meu louvor entregar

Por onde eu for sempre irei mostrar
A clara luz que é meu fundamento
E sem vacilar eu vou buscá-lo
Até que eu possa lá no céu chegar

Vou seguir a Jesus avançando com fé
Pois ele é força e poder e firme rocha aos meu pés
Minha voz irá proclamar a sua salvação
E ao Senhor o meu louvor entregar

O meu louvor entregar
É firme rocha aos meus pés
Minha voz irá proclamar a sua salvação
E ao Senhor o meu louvor entregar."
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/04_vou_seguir_a_jesus.mp3"
media.album     = album
media.size      = 4275235
media.save

#

media = Media.new
media.name      = "05 - Preciosa Graça do Amor de Deus"
media.component = component
media.legend    = "Por vezes, eu, sem refletir, em transgressão caí
Quis pra mim as coisas que o mundo dá valor
Tentei voltar, mas preso em trevas vi meu coração
Então em mim se apagou o sorriso e a luz do olhar

Preciosa graça do amor de Deus
Em Jesus há salvação ao pecador
Sobre a cruz a Sua vida entregou em meu lugar
Hoje estou livre, fui perdoado, preciosa graça do amor

O pranto ali eu conheci prostrado em minha dor
Mas quando vi meu Salvador, meu sorriso então voltou
Ao me ajudar eu enxerguei os cravos em Suas mãos
E compreendi que ao me afastar, quebrei Seu coração

Preciosa graça do amor de Deus
Em Jesus há salvação ao pecador
Sobre a cruz a Sua vida entregou em meu lugar
Hoje estou livre, fui perdoado, preciosa graça do amor

Foi lá na cruz que a Sua vida entregou em meu lugar
Hoje estou livre, fui perdoado, preciosa graça do amor
Do amor."
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/05_preciosa_graca_do_amor_de_deus.mp3"
media.album     = album
media.size      = 5533415
media.save

#

media = Media.new
media.name      = "06 - Foi Assim"
media.component = component
media.legend    = "Em tristezas eu vivia
O amanhã me era escuro
Não sabia onde me pensamento por
Mas em toda provação
Jesus proveu consolação
Pois meu viver tornou mais forte o coração

Foi assim, foi assim
Que aprendi a ter confiança
Em Cristo meu Senhor
Foi assim, foi assim
Que aprendi a depender
Do amor de Deus

Gente triste tenho visto
Gente humilde sem abrigo
Gente só, sem lar, sem fé, sem paz e amor
Mas em meio a solidão
Em Cristo achei a solução
Pois entreguei a minha vida em Suas mãos

Graças dou minhas dores
E tormentos que enfrentei
Através do meu sofrer pude a fé compreender
E senti bem junto a mim
O amor de Cristo a me guiar
Em segurança no caminho rumo ao lar

Foi assim, foi assim
Que aprendi a ter confiança
Em Cristo meu Senhor
Foi assim, foi assim
Que aprendi a depender
Do amor de Deus
Aprendi a depender
Do amor de Deus."
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/06_foi_assim.mp3"
media.album     = album
media.size      = 3506115
media.save

#

media = Media.new
media.name      = "07 - Eu Te Erguerei"
media.component = component
media.legend    = "Procuro em minha vida encontrar um sentido
Pois não compreendo a razão do existir
Por muitas vezes tenho me sentido sem força
Pra continuar seguindo sem desanimar
Eu nunca quis enfrentar a estrada em solidão
E em você confiei quando ouvi

Irmão, te erguerei e o temor passará
Dá-me a mão, vamos orar e assim descansar
Num lugar onde Deus dará, força pra lutar
Quando eu cair tu me erguerás

Eu sei que as vezes tu também te sentes sozinho
Pois é difícil caminhar sem ter alguém
Pra dividir as provas que enfrentamos na vida
E levantar disposto pra recomeçar
Se for preciso enfrentar perigos e terror
Vamos em Deus confiar e orar

Irmão, te erguerei e o temor passará
Dá-me a mão, vamos orar e assim descansar
Num lugar onde Deus dará, força pra lutar
Quando eu cair tu me erguerás

Vamos juntos orar e assim descansar
Num lugar onde Deus dará, força pra lutar
Quando eu cair tu me erguerás

Vamos juntos orar e assim descansar
Num lugar onde Deus dará, força pra lutar
Quando eu cair tu me erguerás
Sim tu me erguerás.
Uh!"
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/07_eu_te_erguerei.mp3"
media.album     = album
media.size      = 5120013
media.save

#

media = Media.new
media.name      = "08 - Encontro Especial"
media.component = component
media.legend    = "Quando vejo sofrimento e olhos tristes a chorar
Eu espero um novo mundo onde habite amor e paz
Nos momentos de tristeza, mesmo quando a tropeçar
Não desisto de esperar, pois no céu eu tenho um Pai

Aleluia! Louvo a Deus! Pois o dia perto está!
Vou morar com meu Jesus, que alegria então será
Aleluia! Louvo a Deus! Pois o dia perto está!
Vou morar com meu Jesus, que alegria então será

Ele chama seus amigos para junto dele estar
Venham logo para a ceia, quero a todos abraçar
Pouco tempo nos separa deste encontro especial
Sua escolha é importante, não se deixe enganar

Aleluia! Louvo a Deus! Pois o dia perto está!
Vou morar com meu Jesus, que alegria então será
Aleluia! Louvo a Deus! Pois o dia perto está!
Vou morar com meu Jesus, que alegria então será

Numa nuvem bem pequena, do tamanho desta mão
Eu verei Jesus voltando, revestido de poder

Aleluia! Louvo a Deus! Pois o dia perto está!
Vou morar com meu Jesus, que alegria então será
Aleluia! Louvo a Deus! Pois o dia perto está!
Vou morar com meu Jesus, que alegria então será
Que alegria então será, será."
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/08_encontro_especial.mp3"
media.album     = album
media.size      = 4429059
media.save

#

media = Media.new
media.name      = "09 - Joga no Mar"
media.component = component
media.legend    = 'Veio a palavra do Senhor a um profeta
Sim, ao profeta que temeu testemunhar
Deus o chamou para pregar aos ninivitas
Mas o seu medo o fez parar noutro lugar

Tentou passar por bom marujo, experiente
Ao planejar fugir dali sem avisar
Mas, lá no mar, o Criador se fez presente
E seu barquinho começou a afundar (a afundar, a afundar)

O comandante logo descobriu a causa
Ao perceber que alguém roncava sem parar
E exclamou: "Não pode haver tal tempestade
Sem o Senhor que tudo pode a provocar

Joga no mar! Joga no mar!
Esse marujo é profeta e nosso barco afundará
Ah! Ah! Joga, joga! Joga no mar!
Esse marujo é o Jonas que fugiu
Que fugiu, que fugiu, que fugiu, pra não pregar

Um grande peixe viu sua refeição chegando
E vejam só onde o tal Jonas foi parar
Foi engolido pela grande criatura
Pra esse orgulho de profeta então quebrar

Ali no escuro compreendeu sua fraqueza
Em oração pediu a Deus o seu perdão
Deus ouviu, mas coitadinho do peixinho
Por sua causa teve muita indigestão (indigestão)

Obediente foi pregar aos ninivitas
E muitos creram se entregando ao Salvador
Pois, ao marujo enganador que se escondia
Foi necessário Deus falar com mais fervor

Joga no mar! Joga no mar!
Esse marujo é profeta e nosso barco afundará
Ah! Ah! Joga, joga! Joga no mar!
Esse marujo é o Jonas que fugiu
Que fugiu, que fugiu, que fugiu

Joga no mar! Joga no mar!
Esse marujo é profeta e nosso barco afundará
Ah! Ah! Joga, joga! Joga no mar!
Esse marujo é o Jonas que fugiu
Que fugiu, que fugiu, que fugiu, pra não pregar
Pra não pregar, pra não pregar
Esse marujo é o profeta que fugiu
Que fugiu pra não pregar
Joga no mar!'
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/09_joga_no_mar.mp3"
media.album     = album
media.size      = 4413175
media.save

#

media = Media.new
media.name      = "10 - O Milagre do Amor"
media.component = component
media.legend    = "Muitos pedem sinais impossíveis
Pra provar suas vãs teorias
Perdem tempo buscando respostas
Procurando encontrar explicações

Desconhecem a força do alto
O poder que transforma e faz revelar
Sentimentos que foram perdidos
Mas que Deus ainda pode outra vez renovar

Quero ver o milagre do amor
Transformando a tristeza em louvor
Revelando que existe esperança no amanhã
Quero ver, quero ver o milagre do amor, ver o amor
Conduzindo o maior pecador
Ao cenário onde a cruz é a prova final
De um Deus que venceu toda força do mal
Ao verter o seu sangue na cruz
O milagre do amor é Jesus, é Jesus

Muitos clamam por novos milagres
Querem ver e tocar para crer
Pedem provas que sejam visíveis
Algo mais para enfim os convencer

Mas esquecem de olhar o passado
E lembrar o que aqui revelado está
Na história de todo o universo
O milagre eterno do amor deste Deus

Quero ver o milagre do amor
Transformando a tristeza em louvor
Revelando que existe esperança no amanhã
Quero ver, quero ver o milagre do amor, ver o amor
Conduzindo o maior pecador
Ao cenário onde a cruz é a prova final
De um Deus que venceu toda força do mal
Ao verter o seu sangue na cruz
O milagre do amor é Jesus, é Jesus

Permanecem a fé e a esperança
Mas jamais haverá um milagre maior que o amor
Sim o amor

Quero ver o milagre do amor
Transformando a tristeza em louvor
Revelando que existe esperança no amanhã
Quero ver o milagre do amor
Conduzindo o maior pecador
Ao cenário onde a cruz é a prova final
De um Deus que venceu toda força do mal
Ao verter o seu sangue na cruz
O milagre do amor é Jesus, é Jesus
O milagre do amor é Jesus, é Jesus."
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/10_o_milagre_do_amor.mp3"
media.album     = album
media.size      = 7082941
media.save

#

media = Media.new
media.name      = "11 - Benção"
media.component = component
media.legend    = "Que Deus te abençoe
Que Deus te ilumine
No amor te promova
Na fé te conduza

Que Deus te abençoe
Que Deus te proteja
Na senda dirija a guarde em paz
Amém"
media.format    = 'mp3'
media.kind      = 'song'
media.path      = "#{path}/11_bencao.mp3"
media.album     = album
media.size      = 2059835
media.save
