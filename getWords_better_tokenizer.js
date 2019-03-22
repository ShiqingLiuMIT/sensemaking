
var getWords = function(titles){
	var words =titles.map(function(titles){
        return titles.match(/([A-Za-z]+)/g)
        .filter(e => e !== 'I')
        .filter(e => e !== 'II')
        .filter(e => e !== 'III')
        .filter(e => e !== 'J')
        .filter(e => e !== 'A')
        .filter(e => e !== 'B')
        .filter(e => e !== 'D')
        .filter(e => e !== 'S')
        .filter(e => e !== 'the')
        .filter(e => e !== 'The')
        .filter(e => e !== 'a')
        .filter(e => e !== 'an')
        .filter(e => e !== 'and')
        .filter(e => e !== 'very')
        .filter(e => e !== 'for')
        .filter(e => e !== 'using')
        .filter(e => e !== 'with')
        .filter(e => e !== 'of')
        .filter(e => e !== 'in')
        .filter(e => e !== 'In')
        .filter(e => e !== 'at')
        .filter(e => e !== 'on')
        .filter(e => e !== 'On')
        .filter(e => e !== 'from')
        .filter(e => e !== 'From')
        .filter(e => e !== 'to')
        .filter(e => e !== 'New')
        .filter(e => e !== 'UR')
        .filter(e => e !== 'by');
    });

	return words;

}

module.exports = getWords;
