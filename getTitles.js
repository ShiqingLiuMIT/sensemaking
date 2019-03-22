const cheerio = require('cheerio');

var getTitles = function(mitcourses){
	var titles=[];
	const $ = cheerio.load(mitcourses)
	 $("h3").each(function(i,element){
	titles.push($(element).text());
	 })	
	return titles;
}


module.exports = getTitles;