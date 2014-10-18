'use strict'

var hapi = require('hapi');
var routes = require('./app/routes');
var config = require('./app/config');
var port = parseInt("8000");

//init hapi server
var server = new hapi.Server('0.0.0.0', port, config.server);

//routes
server.route(routes);

//start
server.start(function() {
  console.log("server started!")
});

