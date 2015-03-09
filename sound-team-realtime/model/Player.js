var merge = require('merge');

var Player = {
  lastExecution: {},

  running: function(set){
    if(set !== undefined){
      this.lastExecution = {media: set};
      this.playing();
    }
    return this.lastExecution;
  },

  clear: function(){
    this.lastExecution = {};
  },

  _mediaRange: [],

  updateMediaRange: function(range){
    this._mediaRange = range;
  },

  updateTime: function(data){
    var current = {
      currentTime       : this.timeFormat(data.currentTime),
      currentPercentage : (data.currentTime / data.duration) * 100,
      duration          : this.timeFormat(data.duration),
      total             : data.duration,
      end_forecast      : 0
    };

    if(this.lastExecution){
      this.lastExecution = merge(this.lastExecution, current);
    }

    return current;
  },

  getStatus: function(){
    return this.lastExecution;
  },

  playing: function(){
    this.lastExecution.status = 'playing';
  },

  pause: function(){
    this.lastExecution.status = 'paused';
  },

  timeFormat: function(seconds){
    var m = Math.floor(seconds / 60) < 10 ? '0' + Math.floor(seconds / 60) : Math.floor(seconds / 60);
    var s = Math.floor(seconds - (m * 60)) < 10 ? '0' + Math.floor(seconds - (m * 60)) : Math.floor(seconds - (m * 60));
    return m + ':' + s;
  },

  convertPercentageToTime: function(data){
    var percentage = data.percentage
      , time       = 0
      ;

      time = (this.lastExecution.total * percentage) / 100;
      return time;
  }
};

module.exports = Player;