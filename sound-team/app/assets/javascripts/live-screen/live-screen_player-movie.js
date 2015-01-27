(function(LiveScreen){
  LiveScreen.PlayerMovie = function(html, emitter){
    this.html    = html;
    this.emitter = emitter;
  };

  LiveScreen.PlayerMovie.prototype.set = function(media){
    this.setView('movie');
    this.load(media);
  };

  LiveScreen.PlayerMovie.prototype.load = function(media){
    var url  = this.url(media.path);
    
    this.player = videojs('video-player');
    this.player.src(url);
    this.player.play();

  };

  LiveScreen.PlayerMovie.prototype.setView = function(type){
    this.html.attr('id', type);
  };
  
  LiveScreen.PlayerMovie.prototype.url = function(url){
    return 'http://localhost:3000' + url.replace('public', '');
  };
}(LiveScreen));