'use strict';

// [START app]
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var config = require('config');
var app = express();

var parseServer = new ParseServer({
  databaseURI: config.get('databaseURI'),
  cloud: config.get('cloud'),
  appId: config.get('appId'),
  masterKey: config.get('masterKey'),
  fileKey: config.get('fileKey')
});

// Mount the Parse API server middleware to /parse
app.use('/parse', parseServer);

app.get('/', function(req, res) {
  res.status(200).send('Hello, world!');
});

var server = app.listen(config.get('port'), '0.0.0.0', function() {
  console.log('App listening at http://%s:%s', server.address().address,
    server.address().port);
  console.log('Press Ctrl+C to quit.');
});

// [END app]
