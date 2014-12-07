var app    = require('express')();
var server = require('http').Server(app);
var io     = require('socket.io')(server);

var socket = require('./config/socket')(io);

server.listen(1337);