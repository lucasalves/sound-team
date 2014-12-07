(function(LiveScreen){
  'use strict';

  LiveScreen.Loader = function(html, emitter){
    this.html    = html;
    this.emitter = emitter;
    this.addEventListenters();
  };

  LiveScreen.Loader.prototype.addEventListenters = function() {
    this.emitter.on('show loader', $.proxy(this, 'show'));
    this.emitter.on('hide loader', $.proxy(this, 'hide'));
  };

  LiveScreen.Loader.prototype.show = function() {
    console.log('show');
    this.onEndEvent(function(){
      $(this).removeClass().addClass('show');
    });
    this.html.removeClass().addClass('animated bounceInLeft');    
  };

  LiveScreen.Loader.prototype.hide = function() {    
    this.onEndEvent(function(){
      $(this).removeClass().addClass('hide');
    });

    this.html.removeClass().addClass('animated bounceOutLeft');    
  };

  LiveScreen.Loader.prototype.onEndEvent = function(addEventListenter){
    var events = [
      'webkitAnimationEnd',
      'mozAnimationEnd',
      'MSAnimationEnd',
      'oanimationend',
      'animationend'
    ];
    this.html.one(events.join(' '), addEventListenter);
  };

}(LiveScreen));