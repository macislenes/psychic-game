var lettersToGuess= "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
var userGuesses=[];

var randomNumber = Math.floor((Math.random() * 26));

var computerGuess= lettersToGuess[randomNumber];


var numberOfGuessesLeft= 9;
var numberOfWins=0;
var numberOfLosses=0;


var yourGuessesSpan= document.getElementById("youGuessedSpan");
var guessesLeftSpan= document.getElementById("guessesLeftSpan");
var winSpan= document.getElementById("winSpan");
var lossesSpan= document.getElementById("lossesSpan");

guessesLeftSpan.textContent=numberOfGuessesLeft;
winSpan.textContent=numberOfWins;
lossesSpan.textContent=numberOfLosses;




document.onkeyup= function(event){

    var userGuess = event.key;

    var lettersIndex= lettersToGuess.indexOf(userGuess);

    var guessIndex= userGuesses.indexOf(userGuess);

    // this means we have a valid guess and we are using it
    if(guessIndex === -1 && lettersIndex >= 0) {

        userGuesses.push(userGuess);
        numberOfGuessesLeft--;

        // Winning Condition
        if(userGuess === computerGuess) {
            numberOfWins++;
            userGuesses= [];
            numberOfGuessesLeft= 9;
            randomNumber = Math.floor((Math.random() * 26));
            computerGuess= lettersToGuess[randomNumber];
        }
        // Incorrect Guess
        else {
            if(numberOfGuessesLeft === 0) {
                numberOfLosses++;
                userGuesses=[];
                numberOfGuessesLeft= 9;
                randomNumber = Math.floor((Math.random() * 26));
                computerGuess= lettersToGuess[randomNumber];

            }
        }
    }

    yourGuessesSpan.textContent= userGuesses;
    guessesLeftSpan.textContent=numberOfGuessesLeft;
    winSpan.textContent= numberOfWins;
    lossesSpan.textContent= numberOfLosses;



};

