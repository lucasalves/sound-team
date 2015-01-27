var app = angular.module('soundTeam', []);

//Load Socket
var socket;
app.run(function(){
  socket = io.connect('http://localhost:1337/player');
});