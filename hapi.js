'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });
server.register(require('inert'), (err) => {
	if (err) {
        throw err;
    }
server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './'
        }
    }
});

/*server.route({
    method: 'POST',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'views'
        }
    }
});*/
server.register(require('vision'), (err) => {
	server.route({
        method: 'POST',
        path: '/membre',
        handler: function (request, reply) {
            reply.views('./views/membre.jade' { user: request.playload });
        }
    });
});


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server ok`);
});
});