var app    = require('express')();
var server = require('http').Server(app);
var io     = require('socket.io')(server);

var config = require('./config/application')(app);

var socket = require('./config/socket')(io);
var routes = require('./config/route')(app);

server.listen(1337);