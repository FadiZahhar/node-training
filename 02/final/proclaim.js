// declaring a variable to be a function that accept message parameter.
var whisper = function (message) {
	console.log('proclaiming: ' + message);
};
// exporting a method called softly that have the whisper function 
// declared at the top
exports.softly = whisper;

// exporting a method called loudly that have a another function.
exports.loudly = function (message) {
	console.log('PROCLAIMING: ' + message);
};