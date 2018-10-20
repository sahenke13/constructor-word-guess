var Letter = require('./Letter');



// Word Constructor

 function Word (word){
    this.word = word;
    this.wordArr = this.word.split("");
    this.numChar = this.word.length;
    this.letterArr = [];
    this.wordLetters = function(newWordArr){
        for(let i in newWordArr){
           let letter = new Letter(newWordArr[i]);
           this.letterArr.push(letter);
        }
        
        return this.letterArr;
    }
    this.userGuess = function(guess){
        for (let i in this.letterArr){
            this.letterArr[i].updateGuess(guess)
        }
    }
    this.updatedWord = function(letterArr){
        for (let i in letterArr){
        let someletter = new Letter(newWordArr[i]);
        this.letterArr.updateChar(letterArr[i]);
        // letter.updateGuess(this.letter)
        
        }
        return letterArr;
    }
 }


module.exports = Word;

