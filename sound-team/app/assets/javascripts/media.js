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
  };

  window.Media = new Media('.media');
});