const Letter = function(letter){
    this.letter = letter;
    this.guessed = false;
    this.updateChar = function(letter){
        if(this.guessed == true){
            this.letter = letter;
        }else{
            this.letter = "_";
        }
        return this.letter;
    }
    this.updateGuessed = function(char){
        if(this.letter = char){
            this.guessed = true;
        }
    }
   
}

module.exports = Letter;