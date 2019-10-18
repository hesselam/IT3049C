"use strict";

const startButton = document.getElementById("startButton");

const welcomeScreen = document.getElementById("welcomeScreen");

const gameScreen = document.getElementById("gameScreen");

const gameForm = document.getElementById("gameForm");

const userInput = document.getElementById("userInput");

let game;


class RandomNumberGuessingGame {
    
    constructor(){
        this.randomNumber = Math.floor(Math.random() * 10);
        this.numberOfGuesses = 0;
        console.log(this.randomNumber);
    }

    guess(val) {
        this.numberOfGuesses += 1;

        return this.randomNumber == val;
    }

}


startButton.addEventListener("click", function(startButtonClickEvent)
    {
    startButtonClickEvent.preventDefault();

    console.log("User clicked the start button");

    welcomeScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

    game = new RandomNumberGuessingGame();
});

gameForm.addEventListener("submit", function(gameFormSubmitEvent) {

    gameFormSubmitEvent.preventDefault();
    
    const guess = parseInt(userInput.value);

    if (!userInput.value){
        return alert("You must provide an input!")
    }



    if (isNaN(guess))

    {
        userInput.value = "";
        return alert ("You must provide a valid number guess!")
    }

    const didWin = game.guess(guess);

    if (!didWin){
        userInput.value = "";

        return alert ("Incorrect! Try again")
    }

    userInput.value = "";

    alert ("You won in " + game.numberOfGuesses + " guesses!");

    gameScreen.classList.add("hidden");

    welcomeScreen.classList.remove("hidden");
});
