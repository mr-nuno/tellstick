'use strict'

var path = require('path');
var hapi = require('hapi');
var routes = require('./app/routes');

//server options
var options = {
    views: {
        engines: {
            html: require('handlebars')
        },
        path: path.join(__dirname, 'app/views')
    }
};

//init hapi server
var server = new hapi.Server('0.0.0.0', 8000, options);

//routes
server.route(routes);

//start
server.start(function() {
  console.log("server started!")
});

