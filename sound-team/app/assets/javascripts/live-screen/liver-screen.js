(function(){
  'use strict';

  var LiveScreen = LiveScreen || {};

  LiveScreen.init = function(app){
    this.html = $(app.selector);

    if(!this.html.exists()){
      return;
    }

    this.emitter = Emitter.create();

    this.loader  = new LiveScreen.Loader(
      this.html.find('#loader'),
      this.emitter
    );

    // this.manager = new LiveScreen.Manager(
    //   this.html,
    //   this.emitter
    // );
  };

  window.LiveScreen = LiveScreen;
}());