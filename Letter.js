


function Letter (letter){
    
    this.letter = letter;
    this.guessed = false;
    this.updateGuess = (userGuess) =>  { 
        if(userGuess === this.letter){
            this.guessed = true;
        } 
    }}

module.exports = Letter;