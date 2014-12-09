(function(LiveScreen){
  LiveScreen.Connection = function(url){
    this.url = url;
    this.open();

    return this.conn;
  };

  LiveScreen.Connection.prototype.open = function() {
    this.conn = io.connect(this.url);
  };
}(LiveScreen));