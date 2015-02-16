

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
	}
};