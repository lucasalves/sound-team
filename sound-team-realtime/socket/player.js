var model = require('./../model/player');

var Player = function (io) {
  io.of('/player').on('connection', function(socket){

        socket.on('play now', function(data){
          socket.broadcast.emit('play media', model.running(data));
        });

        socket.on('sync', function(){
          console.log('hii');
          socket.emit('sync', model.running());
        });

        socket.on('register', function(data){
          console.log(data);
        });
    });
};

module.exports = Player;