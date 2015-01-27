app.controller('TimelineController', ['$scope', '$http', function($scope, $http){
  $scope.items = [];
  $scope.itemsPlayed = [];

  $scope.load  = function(){
    //todo

    $scope.items = [
      {"id":6,"name":"01 - Breve Virá","description":null,"legend":"Servos de Deus a trombeta tocai, breve Jesus Voltará.\nA todo mundo a mensagem levai, breve Jesus Voltará.\nBreve Virá, Breve Virá, Breve Jesus Voltará.\nBreve Jesus Voltará.","format":"mp3","size":1592219,"path":"public/media/songs/2014/03/por_que_o_pai/01_breve_vira.mp3","kind":"song","created_at":"2014-04-23T02:27:23.322Z","updated_at":"2014-04-23T02:27:23.322Z","component_id":3,"album_id":null,"information":null},
      {"id":7,"name":"02 - Por que, Ó Pai?","description":null,"legend":"Na vida temos que enfrentar a provação,\nE a dor que atormenta para todos é igual.\nMesmo assim não consigo entender\nAo ver que alguem não sofre como eu.\nMe pergunto então ó Pai.\n\nSenhor eu quero entender o plano teu.\nTudo aquilo que reservas muito além dos olhos meus.\nDentro do meu coração sempre estás\nEu tenho confiado em tuas mãos,\nMesmo assim pergunto:\n\nÓ pai, por que, ó pai? eu enfrento essa provação\nE a tormenta encobre o sol. pergunto ó pai.\nPor que ó pai? Tantas dúvidas vêm a mim,\nO mistério do existir. Pergunto ó Pai.\nEmbora não consiga compreender,\nEm tua mão sempre confiarei, ó confiarei.\nAcredito em ti, ó pai.\nDeus sabe quando a oração sincera é.\nEle não permite um fardo que eu não possa receber.\nEle vê toda fé que há em mim\nE sabe que há perguntas mesmo assim,\nQuero entender\n\nÓ pai, por que, ó pai? eu enfrento\nEssa provação e a tormenta encobre o sol\nPergunto, ó pai.\nPor que ó pai? Tantas dúvidas vem a mim\nO mistério do existir.\nPergunto ó pai. embora não consiga compreender\nEm tua mão sempre confiarei, ó confiarei.\nAcredito em ti, ó pai.","format":"mp3","size":4661885,"path":"public/media/songs/2014/03/por_que_o_pai/02_por_que_o_pai.mp3","kind":"song","created_at":"2014-04-23T02:27:23.326Z","updated_at":"2014-04-23T02:27:23.326Z","component_id":3,"album_id":null,"information":null},
      {"id":1,"name":"01 - Aurora Boreal","description":null,"legend":null,"format":"jpg","size":594167,"path":"public/media/images/2014/03/world/01.jpg","kind":"image","created_at":"2014-04-23T02:27:08.886Z","updated_at":"2014-04-23T02:27:08.886Z","component_id":2,"album_id":null,"information":{"image":{"img_320x180":"/upload/screenshots/bc4c589d15245638e20824f9b443c02a.jpg"}}},
      {"id":5,"name":"01 - Teu Santo Nome","description":null,"legend":"Todo ser que vive louve o nome do Senhor\nToda criatura se derrame aos Seus pés\nAo som da Sua voz o universo se desfaz\nNão há outro nome comparado ao Grande Eu Sou\n\nE mesmo sendo pó\nCom tudo que há em mim\nConfessarei:\nQue Céus e Terra passarão\nMas o Teu nome é Eterno\n\n(Refrão):\n\nTodo joelho dobrará\nAo ouvir Teu nome\nTeu Santo nome\nTodo ser confessará\nLouvado seja o Teu nome\nTeu Santo nome","format":"mp4","size":1592219,"path":"public/media/movies/2014/04/adoradores/teu_santo_nome.mp4","kind":"movie","created_at":"2014-04-23T02:27:09.806Z","updated_at":"2014-04-23T02:27:09.806Z","component_id":1,"album_id":null,"information":{"image":{"img_320x180":"/upload/screenshots/13e555886807357627c5ac981dfdb96a.png"}}},
      {"id":2,"name":"02 - Aurora Boreal","description":null,"legend":null,"format":"jpg","size":266735,"path":"public/media/images/2014/03/world/02.jpg","kind":"image","created_at":"2014-04-23T02:27:09.158Z","updated_at":"2014-04-23T02:27:09.158Z","component_id":2,"album_id":null,"information":{"image":{"img_320x180":"/upload/screenshots/67a43458ede60fdf3f73d7487186a74b.jpg"}}}
    ]
  };

  $scope.image = function(item){
    if(item.information && item.information.image){
      return item.information.image.img_320x180.replace(/public/, '');
    }
    return false;
  };

  $scope.load();
}]);