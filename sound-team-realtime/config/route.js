var config = function(app){
  load('MoviePlayer')(app);  
};

var load = function(name){
  return require('../routes/' + name);
};


module.exports = config;