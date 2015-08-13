//Lets require/import the HTTP module
var http = require('http');
var express = require('express');

var server = express();

server.use(express.static(__dirname + '/public'));
 
 
 
var port = 54831;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});

