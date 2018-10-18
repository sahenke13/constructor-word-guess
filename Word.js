// var Letter = require('./Letter');




//intialize newWord, which is hidden random word

var newWord = "";

// Word Constructor

const Word = function(word){
    this.word = word;
    this.length = word.length;
    this.wordArr = word.split("");
    
    this.hiddenWord = function(){
        for(let i in this.wordArr){
            this.wordArr[i]=" _ ";
            newWord += this.wordArr[i];
        }
         return newWord    
    }
    }




module.exports = Word;

         
// for( i in array){
//     var letter = new Letter(array[i]);
//     // console.log(letter)
//     console.log(letter.updateGuessed('s'))

//     console.log(letter.updateChar(array[i]));
//     console.log(letter)
// }
