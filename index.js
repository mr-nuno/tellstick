var Hapi = require('hapi');
var child = require('child_process');

// Create a server with a host and port
var server = new Hapi.Server('0.0.0.0', 8000);

// Add the route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
      reply("hello tellstick!");
    }
});

// Add the route
server.route({
    method: 'GET',
    path: '/device',
    handler: function (request, reply) {
      child.exec('/usr/bin/tdtool --list', function (err, stdout, stderr) {
        reply("stdout");
      });
    }
});

server.route({
    method: 'PUT',
    path: '/device/{id}/{action}',
    handler: function (request, reply) {
      var id = request.params.id.split(',');
      var action = request.params.action.split(',');
      console.log(id + ' ' + action);
      if (action == 'on') {
        for(var i = 0; i < id.length; i++){
          child.exec('/usr/bin/tdtool --on ' + id[i], function () {
          
          });
        }

        reply(true);
      }

      if (action == 'off') { 
        for(var i = 0; i < id.length; i++){
          child.exec('/usr/bin/tdtool --off ' + id[i], function () {

          });
        }

	reply(true);
      }
    }
});

// Start the server
server.start();

