(function(LiveScreen){
  LiveScreen.PlayerImage = function(html, emitter){
    this.html    = html.find('.media-player');
    this.emitter = emitter;
  };

  LiveScreen.PlayerImage.prototype.set = function(data){
    this.setView('image');
    this.load(data);
  };

  LiveScreen.PlayerImage.prototype.load = function(media){
    this.emitter.emit('show loader');

    var url  = this.url(media.path),
        self = this;

    $('<img/>').attr('src', url).load(function(){ $(this).remove();
      self.change(url);
      self.emitter.emit('hide loader');
    });
  };

  LiveScreen.PlayerImage.prototype.change = function(url){
    var self = this;
    this.html.fadeOut(300, function(){
      self.html.css('background-image', 'url(' + url + ')');
      self.html.fadeIn(300);
    });
  };

  LiveScreen.PlayerImage.prototype.setView = function(type){
    this.html.attr('id', type);
  };

  LiveScreen.PlayerImage.prototype.url = function(url){
    return 'http://localhost:3000' + url.replace('public', '');
  };

}(LiveScreen));