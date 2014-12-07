var config = function(io){
  load('player')(io);  
};

var load = function(name){
    return require('../socket/' + name);
};


module.exports = config;