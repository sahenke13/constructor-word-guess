


function Letter (letter){
    
    this.letter = letter;
    this.guessed = false;
    this.updateChar = function(){
        console.log("Guess " + this.guessed);
        if(this.guessed == true){
            return this.letter;
            
        }else{
            return "*";
        }
        
    }
    this.updateGuess = function(userGuess){ 
        if(userGuess == this.letter)
            this.guessed = true;
            console.log("update Guess has run")
         
    }
}

module.exports = Letter;