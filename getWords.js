
var getWords = function(titles){
	var words =titles.map(function(titles){
		return	titles.toLowerCase().match(/([a-z]+)/g);
		});
	return words;
}



module.exports = getWords;