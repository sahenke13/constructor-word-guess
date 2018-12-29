
//Bring in Inquirer and Word

const inquirer = require("inquirer");
const Word = require('./Word.js');
// Bring in Word and Letter Constructors to build game play

// create a word Bank
const wordBank = ['test', 'constructor', 'ruby', 'javascript', 'php', 'html', 'mysql', 'node', 'animal', 'table']

// intialize variables


let theWord;
let pickedWords = [];
let guessesRemaining = 7;

//generater random word funciton
const randWord = () => {
    let random = wordBank[Math.floor(Math.random() * wordBank.length)];
    let currentWord = random;
    return currentWord;
}


const begin = () => {
    console.log("--------------------------------------------------------------")
    console.log("Welcome to Coder Constructor Word Guess, May the Odds ever be in your favor!");
    console.log("All words are coding related")

}


//Function which will contain our inquirer prompt with recursion
const askForLetter = (theWordLetterArr) => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Guess?",
            name: "yourGuess"
        }
    ]).then(answers => {
        //set charGuess to answer
        let charGuess = answers.yourGuess;
        theWord.userGuess(charGuess);
        console.log("the word is: ", theWord.wordArr)
        
        hidenWord = theWord.updatedWord(theWordLetterArr);
        //Remove a guess from guesses Remaining.  Then check to see if guess was correct.  If so, add one back.
       
        
       guessesRemaining = trackScore(guessesRemaining, theWord.wordArr, charGuess);
       
        console.log("\nGuesses Remaining: ", guessesRemaining);
        console.log("\nthidenWord: ", hidenWord.join(" "))
        if (hidenWord.indexOf("*") !== -1) {
            askForLetter(theWordLetterArr)
          
        } else {
            console.log("Next Word");
            return gamePlay();
        }
    }) 
}

const trackScore = (guessesRemaining, anArray, charGuess) => {
    guessesRemaining--;

    for (let i in anArray){
        
        console.log("theWord letters: ", anArray[i])
        if(charGuess === anArray[i]){
            console.log("inside if statement")
            console.log("guessesRemaining inside trackscore: ", guessesRemaining)
            guessesRemaining++;
            console.log("guessesRemaining inside trackscore: ", guessesRemaining)
            break;
        }

    }
    
    return guessesRemaining;
}

const pickAWord = () => {
    let currentWord = randWord();

    if (pickedWords.indexOf(currentWord) === -1) {
        pickedWords.push(currentWord);
        console.log("PickedWords: ", pickedWords);
        return currentWord;
    }
    else if (pickedWords.length === wordBank.length) {
         return console.log("\nGame Over");
    }
    else {
        return pickAWord();
    }
}


const gamePlay = () => {
    
    begin();
    
    //get a random word and name currentWord
    let curWord = pickAWord();

    //create a Word Object called theWord
    theWord = new Word(curWord)

    let theWordArr = theWord.wordArr;
    theWord.addLetters(theWordArr);
    console.log("theWordArr: ", theWordArr);
    let theWordLetterArr = theWord.letterArr;

    // console.log("theWord.letterArr: ", theWordLetterArr)
    let hidenWord = theWord.updatedWord(theWordLetterArr);
    console.log("\nhidenWord: ", hidenWord.join(" "));

    //run function containing inquirer prompt
    askForLetter(theWordLetterArr);



}
gamePlay();



