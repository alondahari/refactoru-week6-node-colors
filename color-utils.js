var request = require('request');
var _ = require('underscore');


module.exports = {
	luminosity: function (r, g, b) {
		return  0.2126*r + 0.7152*g + 0.0722*b;
	},
	darken: function (r, g, b){
		return [0.8*r, 0.8*g, 0.8*b];
	},
	decimalCutoff: function(num, percision){
		var p = Math.pow(10, percision);
		return Math.round(num * p) / p;
	},
	getColors: function(color){
		request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, colors) {
		  if (!error && response.statusCode == 200) {
		  	var colorsJson = JSON.parse(colors);
		  	var rgb = _.findWhere(colorsJson, {name: color}).rgb;

		  	console.log(_.values(rgb).join(' '));
		  }
		});
	}
};