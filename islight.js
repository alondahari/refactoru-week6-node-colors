var utils = require('./color-utils.js');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

var isLight = utils.luminosity(r, g, b) > 155 ? 'light' : 'dark';

console.log(isLight);