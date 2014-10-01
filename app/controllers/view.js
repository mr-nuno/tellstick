'use strict'

module.exports = {
	index : {
		handler: function (request, reply) {
			reply.view('index');
		}
	}
};