$(document).on('ready page:load', function(){
  var Media = function(html){
    this.html = $(html);
    this.addEventListener();
  };

  Media.prototype.addEventListener = function() {
    this.html.find('.item').hover(function(){
      $(this).addClass('on-set');      
    }, function(){
      $(this).removeClass('on-set');
    });

    if(this.html.length){
      this.socket = io.connect('http://localhost:1337/player');
    }

    var self = this;
    this.html.find('.share-now').on('click', function(){
      self.playNow(this);
    });
  };

  Media.prototype.playNow = function(that){
    var data = $(that).closest('li').data('media');
    this.socket.emit('play now', data);
  };

  window.Media = new Media('.media');
});