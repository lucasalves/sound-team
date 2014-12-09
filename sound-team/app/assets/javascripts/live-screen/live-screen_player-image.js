(function(LiveScreen){
  LiveScreen.PlayerImage = function(html, emitter){
    this.html    = html;
    this.emitter = emitter;
  };

  LiveScreen.PlayerImage.prototype.set = function(data){
    this.setView('image');
    this.view.css('background-image', 'url(' + this.url(data.path) + ')');

    this.emitter.emit('hide loader');
  };

  LiveScreen.PlayerImage.prototype.setView = function(type){
    var element = $('<div>');
    element.attr('id', type);
    element.attr('class', 'media-player');

    this.html.html(element);
    this.view = $('#' + type);
  };

  LiveScreen.PlayerImage.prototype.url = function(url){
    return 'http://localhost:3000' + url.replace('public', '');
  };

}(LiveScreen));