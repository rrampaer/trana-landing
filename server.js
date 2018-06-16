/* ----------------SETUP-------------------*/
// init project
var express = require('express');
var request = require("request");
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var http = require("https");
var path = require('path');

var Analytics = require('analytics-node');
// var analytics = new Analytics(process.env.WRITE_KEY);


var app = express();

// DB Config 
var url = process.env.url;

app.set("view engine", "ejs");

// Needed middlewares
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(__dirname + '/public'));

/* ----------------ENDPOINTS-------------------*/

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


/* ----------------LISTENER-------------------*/
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
})