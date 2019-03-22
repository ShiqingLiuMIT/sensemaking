
var getWordsFlat = function(words){
var wordsFlat = words.reduce(function(a, b) {
	return a.concat(b);
  });
	return wordsFlat;
}


module.exports = getWordsFlat;