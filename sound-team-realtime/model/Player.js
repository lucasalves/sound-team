var Player = {
  lastExecution: null,

  running: function(set){
    if(set !== undefined){
      this.lastExecution = set;
    }
    return this.lastExecution;
  }
};

module.exports = Player;