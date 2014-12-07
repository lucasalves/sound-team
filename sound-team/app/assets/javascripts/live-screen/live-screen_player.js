// (function(LiveScreen, $){
//   LiveScreen.Player = function(selector){
//     this.html = $(selector);
//   };

//   LiveScreen.Player.prototype.image = function(data){
//     this.setView('image');
//     this.view.css('background-image', 'url(' + this.url(data.path) + ')');

//     console.log(data);
//   };

//   LiveScreen.Player.prototype.song = function(data){
//     this.setView('song');
//     console.log(data);
//    };

//   LiveScreen.Player.prototype.movie = function(data){
//     this.setView('movie');
//     console.log(data);
//   };

//   LiveScreen.Player.prototype.setView = function(type){
//     var element = $('<div>');
//     element.attr('id', type);
//     element.attr('class', 'media-player');

//     this.html.html(element);
//     this.view = $('#' + type);
//   };

//   LiveScreen.Player.prototype.url = function(url){
//     return 'http://localhost:3000' + url.replace('public', '');
//   };

// }(LiveScreen, jQuery));