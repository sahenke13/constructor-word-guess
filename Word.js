const Letter = require('./Letter.js');



// Word Constructor

const Word = function Word(word){
    this.word = word;
    this.wordArr = this.word.split("");
    this.numChar = this.word.length;
    this.letterArr = [];

    this.addLetters = (wordArr)=>{
        wordArr.map((letter) =>{
            letter = new Letter (letter);
            this.letterArr.push(letter);
        })
        }
    
    this.userGuess = function(guess){
        for (let i in this.letterArr){
            this.letterArr[i].updateGuess(guess)
        }
    }

    //need to update word to new hiddenWord

    this.updatedWord = (letterArr) => {
        let hidenword = letterArr.map((letter)=>{
            if(letter.guessed === true){
                return letter.letter;
            }
            else{
                return "*";
            } 
    })
    return hidenword
    }
}


module.exports = Word;

