var app = angular.module('soundTeam', []);

//Load Socket
app.run(function(){
  app.socket = io.connect('http://localhost:1337/player');
});