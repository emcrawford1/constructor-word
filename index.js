var Word = require("./Word.js");
var inquirer = require("inquirer");

var guessesAllowed = 5;

var wordList = ["jet", "airplane", "tomahawk", "drive", "Nashville"];

var randomNumber = Math.floor(Math.random() * wordList.length);

var wordSelected = wordList[randomNumber];

// var wordGuessArray = wordSelected.map(x => {var newWord = new Word(x)});

var finalWord = new Word(wordSelected);

//This function displays the welcome message, calls the displayText() function and calls the userPrompt() function
function welcomeMessage(word) {

    console.log("Welcome to the word guessing game!");
    displayText(word);
    userPrompt(word);
}



//This function takes the user's input and determines if it is in the word or not.  The function calls itself
//recursively until the user wins or loses.

function userPrompt(word) {
    
    var win = false;
    var lose = false;
    var numberOfSpaces = (word.stringRep().match(/_/g) || []).length;


    inquirer.prompt([
        {
            type: 'input',
            name: 'characterGuessed',
            message: 'Guess a character of the word.'
        }
    ]).then(function (guess) {

        word.letterGuess(guess.characterGuessed);
        
        displayText(word);

        var updatedSpaces = (word.stringRep().match(/_/g) || []).length;

        
        if (updatedSpaces === numberOfSpaces) {
            guessesAllowed--;
        }

        else{
            numberOfSpaces = updatedSpaces;
        }
    
        if (updatedSpaces === 0) {
            console.log("You win.  Good for you.");
            win = true;
        }

        if (guessesAllowed < 1) {
            console.log("You lost.")
            lose = true;
        }

        if (!win && !lose) {
            userPrompt(word);
        }

    })


}



//This function displays the user's word
function displayText(currentWord) {

    console.log(currentWord.stringRep());
}



welcomeMessage(finalWord);

