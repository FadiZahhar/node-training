// since relay is a folder will search for index.js inside this folder
// especially relay.js don't exist in the same root folder
var relay = require('./relay');
// prefix is a global variable that was overwritten
prefix = "Attention: ";

relay('Ticket counter closes at 10PM');