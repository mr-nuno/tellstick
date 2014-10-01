'use strict'

var child = require('child_process');

module.exports = {
	list : {
		handler: function (request, reply) {
      child.exec('/usr/bin/tdtool --list', function (err, stdout, stderr) {
        reply(stdout);
      });
    }
	},
	push: {
		handler: function (request, reply) {
      var id = request.params.id.split(',');
      var action = request.params.action.split(',');
      console.log(id + ' ' + action);
      if (action == 'on') {
        for(var i = 0; i < id.length; i++){
          child.exec('/usr/bin/tdtool --on ' + id[i], function () {
          
          });
        }

        reply().code(200);
      }

      if (action == 'off') { 
        for(var i = 0; i < id.length; i++){
          child.exec('/usr/bin/tdtool --off ' + id[i], function () {

          });
        }

        reply().code(200);
      }
    }
	}
}