# Using npm install --save #

Type in npm install. And then --save, and then express. The --save part is important.

That is going to record the version of express that we're installing, as we install it. If you don't add --save, it will simply install the module but it won't record the version. So that's now installed the express module. Now if we list the directory contents, you'll notice there's a node modules folder and package.json is still there. Let's take a look at package.json. Open it up in sublime text. On line 11, there's now a dependency section. This section is an object, and each object property is the name of a module.

# Using the installed express module #
typing in the touch command to make a new blank file. And now with that file in place, I'm going to open it in sublime text. So first ,lets include both the http module and the express module. Now lets use express to create a new application. Express is going to allow us to define routes on this application. I'm going to type app.get for a get request, and then slash.

Then after that I'm going to supply a call-back function. This call-back function accepts two arguments. One is a, the request object, and one is the response object. I'm going to handle these requests by outputting some text. I'm calling the end method of the response object. Finally let's start up this server. First I'm calling the create server method of the http object, and then I'm calling the listen method. Then I'm telling it which port to listen on. Finally, let's run this code. Type in node index.js. And now let's go to the web browser, and go to local host at port 3000.

And it's showing our message. Once we find the right modules for our project, we can install them with npm install. By adding the save flag, they're automatically listed, in package.json.