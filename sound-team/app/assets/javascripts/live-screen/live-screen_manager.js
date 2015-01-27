(function(LiveScreen){
  LiveScreen.Manager = function(options){
    this.html    = options.html;
    this.app     = options.app;
    this.emitter = options.emitter;

    this.conn   = new LiveScreen.Connection(this.app.player);
    this.player = new LiveScreen.Player(this.html, this.emitter);
    this.sync   = new LiveScreen.Sync(this.conn, this.emitter);

    this.addEventListener();
    this.sync.now();
  };

  LiveScreen.Manager.prototype.addEventListener = function(){
    this.conn.on('play media', $.proxy(this, 'delegate'));
    this.conn.on('sync', $.proxy(this, 'delegate'));
  };

  LiveScreen.Manager.prototype.delegate = function(data){
    if(data){
      this.player[data.kind].set(data);
    }
  };


}(LiveScreen));