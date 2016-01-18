// adding var to prefix from making it a specific variable
// related to the scope of this module and not a global variable
// in case we removed the var then it will be a global variable
// and will be overwrited by example2.js since it was redeclared and value changed.
var prefix = 'Relaying: ';

module.exports = function (message) {
	console.log(prefix + message);
};