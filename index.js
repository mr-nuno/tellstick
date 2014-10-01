'use strict'

var hapi = require('hapi');
var routes = require('./app/routes');

//init hapi server
var server = new hapi.Server('0.0.0.0', 8000);

//routes
server.route(routes);

//start
server.start(function() {
  console.log("server started!")
});

