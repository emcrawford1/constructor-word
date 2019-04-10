var Letter = require("./Letter.js");

//Word constructor
function Word(currentWord){

     this.stringToArray = currentWord.split("");
     this.letterArray = this.stringToArray.map(x => { return new Letter(x)});

     this.stringRep = function(){

         this.retString = "";

        this.letterArray.forEach(element => {
            this.retString += element.guess();
            this.retString += " ";
            
        });

        return this.retString;
     }

     this.letterGuess = function(character){
         this.letterArray.forEach(element => {

            element.charCheck(character);

         });
     }

}

module.exports = Word;