var client = {}
  , host   = {}
  ;

var Player = function (io) {
  io.of('/player').on('connection', function(socket){

        socket.on('play now', function(data){
          socket.broadcast.emit('play media', data);
        });

        socket.on('register', function(data){
          console.log(data);
        });
    });
};

module.exports = Player;