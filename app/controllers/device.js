'use strict'

var child = require('child_process');

module.exports = {
	list : {
		handler: function (request, reply) {
      child.exec('/usr/bin/tdtool --list', function (err, stdout, stderr) {

        var parse = function(str) {
          var devices = [];
          for(var i = 0; i < 10; i++) {
            var regEx = new RegExp("["+ i +"].Nexa:(.+)", "g");
            var s = regEx.exec(data);
            if (s) {
              var arr = s[0].replace(/\s+/g, ' ').split(' ');
              
              var device = { 
                id: arr.length > 0 ? arr[0] : 0,
                name:  arr.length > 1 ? arr[1] : 0,
                on: arr.length > 2 && arr[2] == "ON" ? true : false
              };

              devices.push(device);
            }
          };

          return devices;
        };

        reply(parse(stdout));
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