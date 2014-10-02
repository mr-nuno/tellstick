'use strict'

var viewController = require('./controllers/view');
var helloController = require('./controllers/hello');
var deviceController = require('./controllers/device');
	
module.exports = [
	{
    method: 'GET',
    path: '/js/{path*}',
    handler: {
      directory: { path: './public/js' }
    }
  },
  {
    method: 'GET',
    path: '/css/{path*}',
    handler: {
      directory: { path: './public/css' }
    }
  },
  {
    method: 'GET',
    path: '/images/{path*}',
    handler: {
      directory: { path: './public/images' }
    }
  },
	{
    method: 'GET',
    path: '/',
		config: viewController.index
  },
	{
	  method: 'GET',
	  path: '/hello',
	  config: helloController
	},
	{
    method: 'GET',
    path: '/device',
    config: deviceController.list
  },
	{
    method: 'PUT',
    path: '/device/{id}/{action}',
    config: deviceController.push
  }
];