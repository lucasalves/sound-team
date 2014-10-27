(function($){
  var LiverScreen = function(){
    this.Helper = new LiverScreen.Helper('#layout_live-screen');
  };

  window.LiverScreen = LiverScreen;
}());

$(function(){
  var liveScrean = new LiverScreen();
})