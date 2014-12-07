// (function(LiveScreen){
//   LiveScreen.Manager = function(selector){
//     this.html   = $(selector);
//     this.Player = Player;

//     this.socket = new LiveScreen.ManagerConn();

//     this.openConnection();
//     this.addEventListener();
//   };

//   LiveScreen.Manager.prototype.openConnection = function(){
//     this.socket = io.connect('http://localhost:1337/player');
//     this.socket.emit('register', {type: 'client'});
//   };

//   LiveScreen.Manager.prototype.addEventListener = function(){
//     this.socket.on('play media', $.proxy(this, 'delegate'));
//   };

//   LiveScreen.Manager.prototype.delegate = function(data){
//     this.Player[data.kind](data);
//   };


// }(LiveScreen));