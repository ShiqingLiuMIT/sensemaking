var mitcourses   = require('./mitcourses');
var getTitles    = require('./getTitles');
var getWords     = require('./getWords_better_tokenizer');
var getWordsFlat = require('./getWordsFlat');
var getScores    = require('./getScores');
var fs = require("fs");

var titles = getTitles(mitcourses); 
console.log(titles);

var words = getWords(titles);
console.log(words);

var wordsFlat = getWordsFlat(words);
console.log(wordsFlat);

var scores = getScores(wordsFlat);
console.log(scores);

module.exports = scores;

fs.writeFile("./titleresult.txt", JSON.stringify(titles), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

fs.writeFile("./wordsresult.txt", JSON.stringify(words), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});
fs.writeFile("./wordsflatresult.txt", JSON.stringify(wordsFlat), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});

fs.writeFile("./scoreresult.js", JSON.stringify(scores), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("File has been created");
});