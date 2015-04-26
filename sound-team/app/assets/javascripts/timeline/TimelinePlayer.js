app.controller('TimelinePlayer', ['$scope', '$element', function($scope, $element){

  $scope.running = false;
  $scope.status  = {};
  $scope.playing = {};

  $scope.btnControlClass = 'fa fa-play';

  //Add Event Listener
  (function(){
    app.socket.on('current status', function(data){
      $scope.setStatus(data);
    });

    app.socket.on('player at', function(data){
      $scope.setStatus(data);
    });

    app.socket.on('update time', function(data){
      $scope.updateTime(data);
    });

    app.socket.on('play ended', function(data){
      $scope.endedPlay(data);
    });

    app.socket.on('play media', function(data){
      app.socket.emit('get current status', true);
    });

    app.socket.on('playing', function(){
      $scope.playing.status = 'playing';
    });

    app.socket.on('paused', function(){
      $scope.playing.status = 'paused';
    });

    $scope.$on('play now', function(e, media){
      $scope.playNow(media);
    });
  })();


  /**
   * @name play now
   * @description inicia player com a midia atua
   * @param Object (media)
   */
  $scope.playNow = function(media){
    app.socket.emit('play now', media);
  };

  /**
   * @name play now
   * @description metodo responsavel por atualizar o tempo
   *   e a progress bar, todo vez que é atualizado o tempo no server
   *   este método é chamado
   *
   * @param Object {
   *   currentTime: String,
   *   currentPercentage: Number,
   *   end_forecast: String
   * }
   * 
   */
  $scope.updateTime = function(data){
    $scope.playing.currentTime       = data.currentTime;
    $scope.playing.currentPercentage = data.currentPercentage;
    $scope.playing.duration          = data.duration;
    // $scope.playing.end_forecast      = data.end_forecast;

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
   $scope.endedPlay = function(){
      console.log('???');
      $scope.setStatus({
        status:  'ended',
        playing: {}
      });
   };

  /**
   * @name Seta o Status de reprodução atual
   * @description é executado quando a reprodução chega no fim
   * @param Object {
   *   status: String,
   *   currentTime: String,
   *   currentPercentage: Number,
   *   midia: Object,
   *   initiated_in: String,
   *   end_forecast: String
   * };
   * 
   */
  $scope.setStatus = function(data){
    if($.inArray(data.status, ['playing', 'paused'] !== -1)){
      $scope.running = true;
    }else{
      $scope.running = false;
    }

    $scope.status  = data;
    $scope.playing = data;

    $scope.btnControl();
    $scope.$apply();
  };

  $scope.btnControl = function(){
    if($scope.playing && $scope.playing.status === 'playing'){
      $scope.btnControlClass = 'fa fa-pause';
      return;
    }
    $scope.btnControlClass = 'fa fa-play';
  };

  $scope.setTimeTo = function(event){
    var offsetX    = event.offsetX
      , width      = $element.find('.controls .progress').width()
      , percentage = ((offsetX / width) * 100)
      ;

    app.socket.emit('set time to', {percentage: percentage});
  };

 /**
  *
  * @name Altera Status
  * @description Altera o status do player 
  * (se estiver em execução pausa caso contrario dá play)
  * @return void
  *
  */
  $scope.changeStatus = function(){
    $scope.playing.status = (
      $scope.playing.status === 'playing' ? 'paused' : 'playing'
    );
    $scope.btnControl();

    app.socket.emit('set ' + $scope.playing.status);
  };

  //Trigger init event
  (function(){
    app.socket.emit('get current status', true);
  }());

}]);