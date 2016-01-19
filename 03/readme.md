# how to try #
To try this example cd 03
node server.js
then open the browser and add the url http://localhost:3000
a message "Welcome to Node Essential Training" apears.

# Node is non Blocking #

Now, in contrast to many other environments such php, all input and output in Node is non blocking. So for instance, if you're making a call to a database, in many other environments, that call is going to block.

The environment is going to wait for all those results to come back from the database, stop your program, and then resume your program once those results are ready. Node however, keeps running the program. In this file, we're requiring the http module. We're going to create an http server that's going to keep on serving requests, regardless of how many requests come in. Then on line 3, we're defining a function called handleRequest. This function receives the request object and a response object, and then it can write things back to the response object.

So in this case it's writing back the http headers, and it's also writing back some content. Then on line 8 we're creating an http server. So we're using the create server method of the http module, and we're passing in the handleRequest function. Finally on line 10, we're calling the listen method of the server object. This listen method takes a port number as the first argument, and then an address as the second argument. So what happens, is Node starts up this server, and keeps listening.

The event loop keeps checking to see if this function is finished. And if not, it keeps the program going. Then every time a request comes in, this handleRequest function gets executed.