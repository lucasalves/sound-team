(function(LiveScreen){
  LiveScreen.Sync = function(conn){
    this.conn    = conn;
  };

  LiveScreen.Sync.prototype.now = function() {
    this.conn.emit('sync');
  };
}(LiveScreen));