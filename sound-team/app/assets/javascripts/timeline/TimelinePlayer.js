app.controller('TimelinePlayer', ['$scope', function($scope){

  $scope.running = false;
  $scope.status  = {};
  $scope.playing = {};

  //Add Event Listener
  (function(){
    socket.on('current status', function(data){
      $scope.setStatus(data);
    });

    socket.on('player at', function(data){
      $scope.setStatus(data);
    });

    socket.on('update time', function(data){
      $scope.updateTime(data);
    });

    socket.on('ended play', function(data){
      $scope.endedPlay(data);
    });


    $scope.$on('play now', $scope.playNow);
  })();


  /**
   * @name play now
   * @description inicia player com a midia atua
   * @param Object (media)
   */
  $scope.playNow = function(media){
    socket.emit('play now', media);
  };

  /**
   * @name play now
   * @description metodo responsavel por atualizar o tempo
   *   e a progress bar, todo vez que é atualizado o tempo no server
   *   este método é chamado
   *
   * @param Object {
   *   current_time: String,
   *   current_percentage: Number,
   *   end_forecast: String
   * }
   * 
   */
  $scope.updateTime = function(data){
    $scope.playing.current_time       = data.current_time;
    $scope.playing.current_percentage = data.current_percentage;
    $scope.playing.end_forecast       = data.end_forecast;

    $scope.$apply();
  };

  /**
   * @name Terminou a reprodução
   * @description é executado quando a reprodução chega no fim
   * @param Object {
   *   status: String
   * }
   * 
   */
   $scope.endedPlay = function(data){
      if(data.status !== 'ended'){
        return;
      }

      $scope.setStatus({
        status:  data.status,
        playing: {}
      });
   };

  /**
   * @name Seta o Status de reprodução atual
   * @description é executado quando a reprodução chega no fim
   * @param Object {
   *   status: String,
   *   current_time: String,
   *   current_percentage: Number,
   *   midia: Object,
   *   initiated_in: String,
   *   end_forecast: String
   * };
   * 
   */
  $scope.setStatus = function(data){
    if($inArray(data.status, ['playing', 'paused'] !== -1)){
      $scope.running = true;
    }else{
      $scope.running = false;
    }

    $scope.status  = data;
    $scope.playing = data.playing;

    $scope.$apply();
  };


  //Trigger init event
  (function(){
    socket.emit('get current status', true);
  }());


  //Mock for dev
  (function(){
    $scope.status = true;

    $scope.playing = {
      status: 'playing',
      current_time: '02.31',
      current_percentage: 10, //10% (0 até 100)
      midia: {"id":5,"name":"01 - Teu Santo Nome","description":null,"legend":"Todo ser que vive louve o nome do Senhor\nToda criatura se derrame aos Seus pés\nAo som da Sua voz o universo se desfaz\nNão há outro nome comparado ao Grande Eu Sou\n\nE mesmo sendo pó\nCom tudo que há em mim\nConfessarei:\nQue Céus e Terra passarão\nMas o Teu nome é Eterno\n\n(Refrão):\n\nTodo joelho dobrará\nAo ouvir Teu nome\nTeu Santo nome\nTodo ser confessará\nLouvado seja o Teu nome\nTeu Santo nome","format":"mp4","size":1592219,"path":"public/media/movies/2014/04/adoradores/teu_santo_nome.mp4","kind":"movie","created_at":"2014-04-23T02:27:09.806Z","updated_at":"2014-04-23T02:27:09.806Z","component_id":1,"album_id":null,"information":{"image":{"img_320x180":"/upload/screenshots/13e555886807357627c5ac981dfdb96a.png"}}},
      initiated_in: '22:45:33',
      end_forecast: '22:50:33'
    };
  }());
}]);