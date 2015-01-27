var Player = {
  lastExecution: null,

  running: function(set){
    if(set !== undefined){
      this.lastExecution = set;
    }
    return this.lastExecution;
  },

  _mediaRange: [],

  updateMediaRange: function(range){
    this._mediaRange = range;
  }
};

module.exports = Player;