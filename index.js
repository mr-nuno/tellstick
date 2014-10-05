'use strict'

var hapi = require('hapi');
var routes = require('./app/routes');
var config = require('./app/config');

//init hapi server
var server = new hapi.Server('0.0.0.0', process.env.PORT, config.server);

//routes
server.route(routes);

//start
server.start(function() {
  console.log("server started!")
});

