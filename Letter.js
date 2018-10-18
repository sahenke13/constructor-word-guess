
// var array = ['s', 'a', 'd']



const Letter = function(letter){
    this.letter = letter;
    this.guessed = false;
    this.updateChar = function(letter){
        console.log("Guess " + this.guessed);
        if(this.guessed == true){
            this.letter = letter;
            console.log("correctGuess")
            console.log(letter)
        }else{
            this.letter = "_";
        }
        
        console.log("current letter: " + letter);
        return this.letter;
    }
    this.updateGuessed = function(){ 
            this.guessed = true;
            console.log("update Guess has run")
         
    }
}



// for( i in array){
//     var letter = new Letter(array[i]);
//     // console.log(letter)
//     console.log(letter.updateGuessed('s'))

//     console.log(letter.updateChar(array[i]));
//     console.log(letter)
// }



module.exports = Letter;