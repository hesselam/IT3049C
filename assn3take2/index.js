
const welcomeScreen = document.getElementById(`welcomeScreen`);
const gameScreen = document.getElementById(`gameScreen`);
const easyButton = document.getElementById(`easyButton`);
const mediumButton = document.getElementById(`mediumButton`);
const hardButton = document.getElementById(`hardButton`);
const displayHiddenWordButtonButton = document.getElementById(`displayHiddenWordButtonButton`);
const wordLabel = document.getElementById(`wordLabel`);
const userInput = document.getElementById(`userInput`);
const afterDisplay = document.getElementById(`afterDisplay`);
const guessedLetters = document.getElementById(`guessedLetters`);
const outcomeLabel = document.getElementById(`outcomeLabel`);
const outcomeDisplay = document.getElementById(`outcomeDisplay`);
const playAgainButton = document.getElementById(`playAgainButton`);

const request = new XMLHttpRequest();
let response;

const canvas = document.getElementById("hangmanCanvas");
const context = canvas.getContext("2d");

request.onreadystatechange = function() {
    if(request.readyState !== request.DONE) {return;}

    response = JSON.parse(request.responseText);
}

let game;
let underscore = `_`;

class HangmanGame {

    constructor() {
        this.word;
        this.length;
        this.wordArray = [];
        this.count = 0;
        this.guessedArray = [];
    }

    sendRequest(query){
        request.open(`GET`, `https://hangman-api.lively.software?${query}`);
        request.send();
    }

    display(){
        this.word = response.word;
        this.length = response.word.length;
        for(let i=0; i<this.length; i++){
            this.wordArray.push(underscore);
        }
        wordLabel.innerHTML = this.wordArray.join(` `);
    }

    playGame(userChoice){
        if(userChoice.length > 1){
            alert(`That guess is invalid, try again!`);
            return;
        }
        if(this.guessedArray.find(e => {
            return e == userChoice;
        }))
        {
            alert(`You already guessed that letter, try again!`);
            return;
        }
        this.guessedArray.push(userChoice);

        if(userChoice){
            let indices = [];
            for(let i=-1; i<this.length; i++) {
                if (this.word[i] == userChoice) {
                    indices.push(i);
                }
            }

            if(!indices.length == 0){
                for(let index of indices){
                    this.wordArray[index] = userChoice;
                }
            }
            else if(indices.length == 0){
                this.count++;
                this.draw();
            }
        }
        wordLabel.innerHTML = this.wordArray.join(` `);
        guessedLetters.append(userChoice + `, `);

        if(this.count == 6){
            let won = false;
            this.outcome(won);
        }
        else if(!this.wordArray.find(a => {return a == `_`;})){
            let won = true;
            this.outcome(won);
        }
    }

    outcome(won){
        if(won == true){
            afterDisplay.classList.add(`hidden`);
            outcomeDisplay.classList.remove(`hidden`);
            outcomeLabel.innerHTML = `You Won! Congratulations!`
        }
        else if(won == false){
            afterDisplay.classList.add(`hidden`);
            outcomeDisplay.classList.remove(`hidden`);
            outcomeLabel.innerHTML = `You Lost!  The word was ` + this.word + ".";
        }
    }

    draw(){
        if(this.count == 1){
            this.drawHead();
        }
        else if(this.count == 2){
            this.drawBody()
        }
        else if(this.count == 3){
            this.drawRightHand();
        }
        else if(this.count == 4){
            this.drawLeftHand();
        }
        else if(this.count == 5){
            this.drawLeftFoot();
        }
        else if(this.count == 6){
            this.drawRightFoot();
        }
    }
    
    drawHead() {
        context.strokeStyle = "#e2a23d";
        context.beginPath();
        context.arc(200, 100, 50, 0, Math.PI*2, true);
        context.closePath();
        context.lineWidth = 4;
        context.stroke();
        
      };
      
      drawBody() {
        context.strokeStyle = "#e2a23d";
        context.beginPath();
        context.moveTo(200, 150);
        context.lineTo(200, 300);
        context.stroke();
      };
      
      drawRightHand() {
        context.strokeStyle = "#e2a23d";
        context.beginPath();
        context.moveTo(200, 170);
        context.lineTo(150, 250);
        context.stroke();
      };
      
      drawLeftHand() {
        context.strokeStyle = "#e2a23d";
        context.beginPath();
        context.moveTo(200, 170);
        context.lineTo(250, 250);
        context.stroke();
      };
      
      drawRightFoot() {
        context.strokeStyle = "#e2a23d";
        context.beginPath();
        context.moveTo(200, 300);
        context.lineTo(150, 380);
        context.stroke();
      };
      
      drawLeftFoot() {
        context.strokeStyle = "#e2a23d";
        context.beginPath();
        context.moveTo(200, 300);
        context.lineTo(250, 380);
        context.stroke();
      };
    
}

easyButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    welcomeScreen.classList.add(`hidden`);
    gameScreen.classList.remove(`hidden`);

    game = new HangmanGame;

    let query = `difficulty=easy`;

    game.sendRequest(query);
});

mediumButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    welcomeScreen.classList.add(`hidden`);
    gameScreen.classList.remove(`hidden`);

    game = new HangmanGame;

    let query = `difficulty=medium`;

    game.sendRequest(query);
});

hardButton.addEventListener(`click`, (e) => {
    e.preventDefault();
    welcomeScreen.classList.add(`hidden`);
    gameScreen.classList.remove(`hidden`);

    game = new HangmanGame;

    let query = `difficulty=hard`;

    game.sendRequest(query);
});

displayHiddenWordButton.addEventListener(`click`, (e) => {
    e.preventDefault();

    game.display();

    this.drawGallows();

    displayHiddenWordButton.classList.add(`hidden`);
    afterDisplay.classList.remove(`hidden`);
});

userInput.addEventListener(`submit`, (ev) => {
    ev.preventDefault();

    let userChoice = input.value;

    game.playGame(userChoice.toLowerCase());

    userChoice = "";
    input.value = "";
});

playAgainButton.addEventListener(`click`, (ev) => {
    ev.preventDefault();

    location.reload();
});

function drawGallows() {
    context.beginPath();
  context.moveTo(350, 450);
  context.lineTo(10, 450);
  context.lineTo(70, 450);

  context.lineTo(70, 10);
  context.lineTo(200, 10);
  context.lineTo(200, 50);
  context.stroke();

    
  };

