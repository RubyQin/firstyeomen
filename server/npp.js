'use strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var compression = require('compression');
var fs = require('fs');
var PORT = 8080;
var cors = require('cors');
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(cors());
	app.use(compression());
	app.use(logger('dev'));


console.log('server is working');

app.get('/calender', function(req, res){
  readJSONFile('json/data.json', function (err, json) {
    if(err) { throw err; }
   res.send(json);
  });
});

app.use(express.static('../'));
//default index html
app.get('/', function(res, req){
	res.sendfile('../app/index.html');
});

app.listen(PORT, function(){
	console.log("app listening on port "+PORT);
});

function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

