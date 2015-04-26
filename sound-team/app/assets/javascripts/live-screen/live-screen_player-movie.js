(function(LiveScreen){
  LiveScreen.PlayerMovie = function(html, emitter){
    this.html    = html.find('#media-player-movie');
    this.emitter = emitter;

    this.addEventListener();
  };

  LiveScreen.PlayerMovie.prototype.addEventListener = function(kind){
    this.emitter.on('change media', $.proxy(this, 'clear'));

    app.socket.on('paused',  $.proxy(this, 'pause'));
    app.socket.on('playing', $.proxy(this, 'play'));
    app.socket.on('update time to', $.proxy(this, 'setTimeTo'));
  };

  LiveScreen.PlayerMovie.prototype.set = function(media){
    this.load(media);
  };

  LiveScreen.PlayerMovie.prototype.load = function(media){
    this.emitter.emit('show loader');
    var url = this.url(media.path);
    
    this.player = videojs('video-player');
    this.player.src(url);

    this.addEventListenerOnPlayer();

    var self = this;
    this.soundIn(function(){
      self.player.play();
      self.emitter.emit('hide loader');
      self.setView('movie');
    });
  };

  LiveScreen.PlayerMovie.prototype.setView = function(type){
    this.html.closest('div').find('.media-player').fadeOut();
    this.html.fadeIn();
  };
  
  LiveScreen.PlayerMovie.prototype.url = function(url){
    return 'http://localhost:3000' + url.replace('public', '');
  };

  LiveScreen.PlayerMovie.prototype.clear = function(kind){
    this.player = videojs('video-player');
    if(kind !== 'movie' && this.player.src() !== ''){    
      this.html.fadeOut();

      var self = this;
      this.soundOut(function(){
        self.player.pause();
      });
    }
  };

  LiveScreen.PlayerMovie.prototype.play = function(){
    var self = this;

    this.soundIn(function(){
      self.player.play();
    });
  };

  LiveScreen.PlayerMovie.prototype.pause = function(){
    var self = this;

    this.soundOut(function(){
      self.player.pause();
    });
  };

  LiveScreen.PlayerMovie.prototype.addEventListenerOnPlayer = function(){
    this.player.on('progress', $.proxy(this, 'updateTime'));
    this.player.on('ended', $.proxy(this, 'ended'));
  };

  LiveScreen.PlayerMovie.prototype.updateTime = function(progress){
    app.socket.emit('set update time', {
      currentTime : progress.currentTarget.currentTime,
      duration    : progress.currentTarget.duration
    });
  };

  LiveScreen.PlayerMovie.prototype.ended = function(){
    app.socket.emit('ended');
  };

  LiveScreen.PlayerMovie.prototype.soundOut = function(addEventListener){
    this.volumeStopInterval();

    var self = this
      , dec  = 0.1
      ;

    this.volumeInitInterval(function(current){
      if(current <= 0){
        self.volumeStopInterval();
        addEventListener();
        return;
      }
      self.player.volume(current - dec);
    });
  };

  LiveScreen.PlayerMovie.prototype.soundIn = function(addEventListener){
    this.volumeStopInterval();

    var self = this
      , inc  = 0.1
      ;

    addEventListener();
    this.volumeInitInterval(function(current){
      if(current >= 1){
        self.volumeStopInterval();
        return;
      }
      self.player.volume(current + inc);
    });
  };

  LiveScreen.PlayerMovie.prototype.setTimeTo = function(time){
    console.log(time);
    this.player.currentTime(time);
  };

  LiveScreen.PlayerMovie.prototype.volumeInitInterval = function(addEventListener){
    var self = this;
    this.int = setInterval(function(){
      addEventListener(self.player.volume());
    }, 100);
  };

  LiveScreen.PlayerMovie.prototype.volumeStopInterval = function(addEventListener){
    clearInterval(this.int);
  };
}(LiveScreen));