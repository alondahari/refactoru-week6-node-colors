var utils = require('./color-utils.js');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var percision2 = utils.darken(r, g, b).map(function(val){
	return utils.decimalCutoff(val, 2);
});

console.log(percision2.join(' '));