// include both the http module and the express module.
var http = require('http'),
	express = require('express');
// use express;
var app = express();

// create a route and respond
app.get('/', function(req, res) {
	res.end('Airline');
});
// create the server and listen to port 3000
http.createServer(app).listen(3000);

/*
Note: to run the code
go to cd 05
node index.js
open a browser and type http://localhost:3000
"Airline" Should apear.
 */