$(document).on('ready page:load', function(){
  var Media = function(html){
    this.html = $(html);
    this.addEventListener();
  };

  Media.prototype.addEventListener = function() {
    this.html.on({
        mouseenter: function(){
          $(this).addClass('on-set');      
        }, 
        mouseleave: function(){
          $(this).removeClass('on-set');
        }
      },
      '.item'
    );

    if(this.html.length){
      this.socket = io.connect('http://localhost:1337/player');
    }

    var self = this;
    this.html.on('click', '.share-now', function(){
      self.playNow(this);
    });
  };

  Media.prototype.playNow = function(that){
    var data = $(that).closest('.item').data('media');

    data.status = 'playing';
    this.socket.emit('play now', data);
  };

  window.Media = new Media('.media');
});