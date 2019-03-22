
var getScores = function(wordsFlat){

	var scores = {}
		for (i = 0; i < wordsFlat.length; i++) {
		var word = wordsFlat[i];
			if (!scores[word]) {
			scores[word] = 1;
		} else {
		scores[word]++;
		}
	}

	return scores;

}


module.exports = getScores;