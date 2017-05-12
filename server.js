var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var nodefs = require('fs');
//var jade = require('jade');

'use strict';

const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ 
    host: 'localhost', 
    port: 8000 
});
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server Ok:', server.info.uri);
});
/*app.post('/membre', function(req, res) {
 res.sendFile(__dirname + '/views/membre.jade');
 
});*/

app.get('/', function(req, res) {
 res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/'));
//app.use(express.static(__dirname + '/views'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.set('views', './views')
app.set('view engine', 'jade');

app.post('/membre', function(req, res){
  
  res.render('membre', { user: req.body });
});

app.listen(3000, function () {
  console.log('Serveur Ok');
});