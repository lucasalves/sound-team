(function(LiveScreen, $){
  LiveScreen.Player = function(html, emitter){
    this.html    = html;
    this.emitter = emitter;

    this.image = new LiveScreen.PlayerImage(this.html, this.emitter);
    this.song  = new LiveScreen.PlayerSong(this.html,  this.emitter);
    this.movie = new LiveScreen.PlayerMovie(this.html, this.emitter);
  };
}(LiveScreen));