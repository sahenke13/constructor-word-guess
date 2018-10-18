//Bring in Inquirer to prompt user for input

var inquirer = require("inquirer");

// Bring in Word and Letter Constructors to build game play

var Word = require('./Word');
var Letter = require('./Letter');

// create a word Bank
var wordBank = [ 'test', 'constructor', 'javascript', 'house', 'cat', 'dog', 'mouse', 'animal', 'table']


//generater random word funciton
function randWord(words){
        var random = words[Math.floor(Math.random()*wordBank.length)];
        return random;
        }   

        // var randomWord = randWord(wordBank);

var currentWord = new Word(randWord(wordBank));

   
function gamePlay(){
            // var wrongGuess = 0;
           
            console.log(currentWord.word);
            // console.log(currentWord.hiddenWord());
            var hideWord = currentWord.hiddenWord();
            console.log(hideWord);


        inquirer.prompt([
            {
                type: "input",
                message: "What is your Guess?",
                name: "yourGuess"
            }
        ]).then(answers=>{
            
            charGuess = answers.yourGuess;
           
        
            for (let i in currentWord.word){  
               
                var letter = new Letter (currentWord.word[i]);
                console.log(letter.letter);
                
                
                // console.log(letter.hiddenLetter);
                //  console.log(hiddenLetter.letter);
               
                if (charGuess == currentWord.word[i]){
            
                    letter.updateGuessed();
                    letter.updateChar(currentWord.word[i]);
                    console.log(currentWord.word[i]);
                    // letter.updateChar(hiddenLetter)
                    // console.log(hiddenWord)
                  
                    

                    // console.log("current Letter: " + currentWord.word[i]);
                    console.log("good job chap");
                    
                }
                else{
                    console.log("try again");
                    letter.updateChar(currentWord.word[i]);
                   
                }
                console.log(hideWord)
            }
        });
      
    }

 gamePlay();








