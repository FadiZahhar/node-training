// declaring announce to have the function of the module announce.
// it will try to check the same folder in case announce.js exist it will get it
// in case it doesn't exist it will try to search a folder called announce inside index.js
var announce = require('./announce');
// using the announce and put the parameter
// announce is the function that we imported;
announce('Node Essential Training');
// runing node example1.js will return the message Node Essential Training.