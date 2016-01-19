// we're requiring the http module
var http = require('http');

// defining a function called handleRequest. This function receives the request 
// object and a response object, and then it can write things back to the response object.
var handleRequest = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Welcome to Node Essential Training\n');
};

// creating an http server. 
// So we're using the create server method of the http module, 
// and we're passing in the handleRequest function.
var server = http.createServer(handleRequest);


// calling the listen method of the server object. 
// This listen method takes a port number as the first argument, 
// and then an address as the second argument. 
// So what happens, is Node starts up this server, and keeps listening.
server.listen(3000, 'localhost');

/*
Note: The event loop keeps checking to see if this function is finished. 
And if not, it keeps the program going. 
Then every time a request comes in, this handleRequest function gets executed.
 */