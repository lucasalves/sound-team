(function(LiveScreen){
  LiveScreen.PlayerSong = function(html){
    this.html = html.find('#media-player-song');
  };

  LiveScreen.PlayerSong.prototype.set = function(data){
    this.setView('movie');
    console.log('todo song');
  };

  LiveScreen.PlayerSong.prototype.setView = function(type){
    this.html.closest('div').find('.media-player').fadeOut();
    this.html.fadeIn();
  };

}(LiveScreen));