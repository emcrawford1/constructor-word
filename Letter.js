

//Letter constructor

function Letter(character){

    this.character = character,
    this.letterGuessed = false,

    this.guess = function(){

        if(this.letterGuessed){
            return this.character;
        }
        else{
            return "_";
        }
    }

    this.charCheck = function(charGuessed){

        if(charGuessed.toLowerCase() === this.character || charGuessed.toUpperCase() === this.character){

            this.letterGuessed = true;
        }
    }

}

module.exports = Letter;