


function Letter (letter){
    
    this.letter = letter;
    this.guessed = false;
    this.updateGuess = (userGuess) =>  { 
        if(userGuess === this.letter){
            this.guessed = true;
            console.log("update Guess is true")   
        } else{
            console.log("update guess is false")
        }
    }}

module.exports = Letter;