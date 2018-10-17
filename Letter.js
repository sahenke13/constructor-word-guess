
// var array = ['s', 'a', 'd']



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
       if(char == this.letter){
            this.guessed = true;
       }
        
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