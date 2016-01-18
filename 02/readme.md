# Understading Node
## first try

check the comments of each file to understand what is going on.
you can locate cd node-training\02\final
run node example1.js

you can do the same for each example from 1 to 4.

relay folder and proclaim.js are related module such include in PHP.
the objective of these examples is to let you understand how to import node modules.

#example1.js
###Important
Whenever you pass a path into require, it will look for either a. js variant of that name, or it will look for a folder that has an index.js file in it. So let's take a look at this index.js file now. On line 1, we're defining a variable called prefix. We are setting that prefix to the string relaying, colon and space. Now just like in announce.js, we're exporting a function, and this function takes a string. Then on line 4 working cat needing the prefix, the message. Now there's one problem with this code.

#example2.js
On line 1, we're just declaring prefix as a variable. Now just like in java script in a browser this is actually ending up as a global variable. The problem with a global variable, is that it can be overwritten anywhere in the code base. So back over here, we're actually overriding that prefix here on line 3. So instead of saying relaying as we have it defined in line 1 on index.js, it's going to say attention that's defined here on line 3. So now when relay gets called on line 5, it's going to say attention, ticket counter closes at 10 PM.

So let's run this code now. Type in node, space, example2.js, and now it's saying, attention, ticket counter closes at 10 PM. Let's fix this code now. Go back over to index.js, and instead of having it just be prefix, type in var space prefix. By typing in var, this is going to define prefix as a local variable. This way the prefix variable won't get clobbered by other variables named prefix elsewhere in our code base. Save the file, and let's go back to the Command Line.

I'm going to press the Up Arrow to bring up the last command. And now, I'm going to press Enter. Now, the output says, relaying. If we go back to example2, you'll notice that we're still setting the global prefix to say, attention. However, since we're now using a local variable here in the module, it doesn't matter. Now let's take a look at example3. Just like the other two examples, we're calling require and looking for a local module called proclaim. This is going to match up to proclaim.js. Back here in example3 however, you'll notice that we are calling it differently.

#example3.js
The say variable is being set to an object, and this object has two properties, softly and loudly. They're both functions. If we go back to proclaim.js, you'll notice that we're setting exports.softly and exports.loudly. We're not calling module exports because we want to set these individual properties that we're exporting. Another thing you'll notice, is that we're first declaring whisper as a function, and then we're setting softly to the value of whisper. When we go to use this module, the only thing that matters is what the name of the properties of exports are set to.

#example4.js
 Like the other three examples, we're calling require. But this time, we're not specifying a dot and a slash. This is telling Node that we want to use a core module or we want to use a module that's been installed specifically for our project. In this case, the os module is a core module that ships with Node. We're setting the results to the variable os.

Then we're calling the type method of the os object. This is going to tell us what operating system the code is running on. So let's go to the Command Line and run this code now. Type in node example4.js. It's now saying that this code is running on Darwin, and Darwin is the operating system that Mac OS 10 is built on top of. Again, we're not using a dot and a slash to require the os module. Since it's a core module, we can call it from any file without worrying about the path. Modules form fundimental building blocks for programs running in Node.