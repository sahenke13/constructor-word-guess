//Bring in Inquirer to prompt user for input

var inquirer = require("inquirer");

// Bring in Word and Letter Constructors to build game play

var word = require('./Word');
var Letter = require('./Letter');

// create a word Bank
var wordBank = [ 'test', 'constructor', 'javascript', 'house', 'cat', 'dog', 'mouse', 'animal', 'table']


//generater random word funciton
function randWord(words){
        var random = words[Math.floor(Math.random()*wordBank.length)];
        return random;
        }   

        var randomWord = randWord(wordBank);
        console.log(randomWord)

inquirer.prompt([
    {
        type: "input",
        message: "What is your Guess?",
        name: "yourGuess"
    }
]).then(answers =>{
    char = answers.yourGuess;
    console.log(char);
})

