var model = require('./../model/player');

var Player = function (io) {
  io.of('/player').on('connection', function(socket){

    socket.on('play now', function(data){
      socket.broadcast.emit('play media', model.running(data));
      socket.emit('play media', model.running(data));
    });

    socket.on('sync', function(){
      socket.emit('sync', model.running());
    });

    socket.on('set update time', function(data){
      socket.broadcast.emit('update time', model.updateTime(data));
      socket.emit('update time', model.updateTime(data));
    });

    socket.on('set time to', function(data){
      socket.broadcast.emit(
        'update time to',
        model.convertPercentageToTime(data)
      );
    });

    socket.on('set playing', function(data){
      model.playing();
      socket.broadcast.emit('playing');
    });

    socket.on('set paused', function(){
      model.pause();
      socket.broadcast.emit('paused');
    });

    socket.on('ended', function(){
      model.clear();
      socket.emit('play ended');
      socket.broadcast.emit('play ended');
    });

    socket.on('get current status', function(){
      socket.emit('current status', model.getStatus());
    });

    socket.on('register', function(data){
      console.log(data);
    });

  });
};

module.exports = Player;