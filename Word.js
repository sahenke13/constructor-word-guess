var Letter = require('./Letter');

var letter = new Letter("a");

var test = letter.updateChar(letter)


console.log("test" + test)



const Word = function(word){
    this.word = word;
    this.wordArr = word.split("");
    this.hiddenWord = function(){
        for(let i in this.wordArr){
            return this.wordArr[i].updateChar;
            
                }
                

    }
    
        
         
    }

var word = new Word("test");

console.log(word.hiddenWord());


// console.log(test2);