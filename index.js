
//Bring in Inquirer and Word

var inquirer = require("inquirer");
var Word = require('./Word');
// Bring in Word and Letter Constructors to build game play

// create a word Bank
var wordBank = [ 'test', 'constructor', 'javascript', 'php', 'html', 'mysql', 'node', 'animal', 'table']

// intialize variables



//generater random word funciton
function randWord(){
        let random = wordBank[Math.floor(Math.random()*wordBank.length)];
        currentWord = random;
        console.log(currentWord);
   
        }   

       

// var currentWord = new Word(randWord(wordBank));

function begin (){
    console.log("Welcome to Coder Constructor Word Guess, May the Odds ever be in your favor!");
    console.log("All words are coding related")

}

function upDated(word){
    let hideWord = new Word(word);
    let hideWordArr = hideWord.wordArr;   
    console.log(hideWordArr);
    let newLetters =  hideWord.wordLetters(hideWordArr);
    console.log(newLetters)
    // let updatedLetters = hideWord.updatedWord(newLetters);
    // console.log(updatedLetters)

     
   
}

begin(); 
randWord();
upDated(currentWord);
   





// function gamePlay(){
    
//     console.log(currentWord.word);
//     console.log(hideWord);

//     if(correctCount<currentWord.word.length){
        
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "What is your Guess?",
//                 name: "yourGuess"
//             }
//         ]).then(answers=>{
            
//             charGuess = answers.yourGuess;
           
        
//             for (let i in currentWord.word){  
               
//                 var letter = new Letter(currentWord.word[i]);
//                 console.log(letter.letter);
                
                
//                 // console.log(letter.hiddenLetter);
//                 //  console.log(hiddenLetter.letter);
               
//                 if (charGuess == currentWord.word[i]){
                    
//                     letter.updateGuessed();
//                     letter.updateChar(letter.letter);
//                     console.log('hideWord '+ hideWord);
//                     console.log("good job chap");
//                     correctCount++;
//                     console.log("corrrectCound: "+ correctCount);
//                 }
//                 else{
//                     console.log("try again");
//                     letter.updateChar(letter.letter);
//                     console.log('hideWord '+ hideWord);

//                 }
//                 // hideWord = newWord;
//                 console.log("newWord: "+ hideWord);
//             }
//             gamePlay();
//         });      
//     }
// }

//  gamePlay();



