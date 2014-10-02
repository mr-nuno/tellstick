'use strict'

var path = require('path');

module.exports = {
	server: {
		views: {
        engines: {
            html: require('handlebars')
        },
        path: path.join(__dirname, 'views')
    }
	}
}