require('babel-core/register')({presets: ['react', 'es2015', 'stage-0']});

var express = require('express')
var server =  require('./server/index.js');
var PORT = process.env.PORT || 3000;
var app = new express();

server(app);

app.listen(PORT, function () {
  console.log('Server listening on: ' + PORT);
});


