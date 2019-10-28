var zeroZero = document.getElementById(`zeroZero`);
var zeroOne = document.getElementById(`zeroOne`);
var zeroTwo = document.getElementById(`zeroTwo`);

var oneZero = document.getElementById(`oneZero`);
var oneOne = document.getElementById(`oneOne`);
var oneTwo = document.getElementById(`oneTwo`);

var twoZero = document.getElementById(`twoZero`);
var twoOne = document.getElementById(`twoOne`);
var twoTwo = document.getElementById(`twoTwo`);

var descriptionLabel = document.getElementById(`descriptionLabel`);
var outcomeLabel = document.getElementById(`outcomeLabel`);

var restartButton = document.getElementById(`restartButton`);

var context1 = zeroZero.getContext("2d");
context1.beginPath();
context1.rect(0, 0, 300, 150);
context1.fillStyle = `#808080`
context1.fill();
context1.stroke();

var context2 = zeroOne.getContext("2d");
context2.beginPath();
context2.rect(0, 0, 300, 150);
context2.fillStyle = `#808080`
context2.fill();
context2.stroke();

var context3 = zeroTwo.getContext("2d");
context3.beginPath();
context3.rect(0, 0, 300, 150);
context3.fillStyle = `#808080`
context3.fill();
context3.stroke();

var context4 = oneZero.getContext("2d");
context4.beginPath();
context4.rect(0, 0, 300, 150);
context4.fillStyle = `#808080`
context4.fill();
context4.stroke();

var context5 = oneOne.getContext("2d");
context5.beginPath();
context5.rect(0, 0, 300, 150);
context5.fillStyle = `#808080`
context5.fill();
context5.stroke();

var context6 = oneTwo.getContext("2d");
context6.beginPath();
context6.rect(0, 0, 300, 150);
context6.fillStyle = `#808080`
context6.fill();
context6.stroke();

var context7 = twoZero.getContext("2d");
context7.beginPath();
context7.rect(0, 0, 300, 150);
context7.fillStyle = `#808080`
context7.fill();
context7.stroke();

var context8 = twoOne.getContext("2d");
context8.beginPath();
context8.rect(0, 0, 300, 150);
context8.fillStyle = `#808080`
context8.fill();
context8.stroke();

var context9 = twoTwo.getContext("2d");
context9.beginPath();
context9.rect(0, 0, 300, 150);
context9.fillStyle = `#808080`
context9.fill();
context9.stroke();

var x = `X`;
var o = `O`;
let player = x;
let outcome;

let board = [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ]

class TicTacToeGame {
    drawSelection(player, canvas){
        if(player == `X`){
            let contextSelection = canvas.getContext("2d");
            contextSelection.beginPath();
            contextSelection.moveTo(200, 112.5);
            contextSelection.lineTo(100, 37.5);
            contextSelection.moveTo(200, 37.5);
            contextSelection.lineTo(100, 112.5);
            contextSelection.strokeStyle = `black`
            contextSelection.stroke();
            

        }
        else if(player == `O`){
            let contextSelection = canvas.getContext("2d");
            contextSelection.beginPath();
            contextSelection.arc(150, 75, 50, 0, Math.PI * 2);
            contextSelection.strokeStyle = `blue`
            contextSelection.stroke();
            
        }
    }

    checkForWin(){
        // 1st column
        if(board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[2][0] == board[0][0]){
            if(!(board[0][0] == null 
                && board[1][0] == null
                    && board[2][0] == null)){
                outcome = `win`;
            }
        }
        // 2nd column
        else if(board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[2][1] == board[0][1]){
            if(!(board[0][1] == null 
                && board[1][1] == null
                    && board[2][1] == null)){
                outcome = `win`;
            }
        }
        // 3rd column
        else if(board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[2][2] == board[0][2]){
            if(!(board[0][2] == null 
                && board[1][2] == null
                    && board[2][2] == null)){
                outcome = `win`;
            }
        }
        // 1st row
        else if(board[0].every(v => v == player)){
            if(!board[0].every(b => b == null)){
                outcome = `win`;
            }
        }
        // 2nd row
        else if(board[1].every(v => v == player)){
            if(!board[1].every(b => b == null)){
                outcome = `win`;
            }
        }
        //3rd row
        else if(board[2].every(v => v == player)){
            if(!board[2].every(b => b == null)){
                outcome = `win`;
            }
        }
        // 1st diagonal
        else if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] == board[0][2]){
            if(!(board[0][2] == null 
                && board[1][1] == null
                    && board[2][0] == null)){
                outcome = `win`;
            }
        }
        // 2nd diagonal
        else if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[2][2] == board[0][2]){
            if(!(board[0][0] == null 
                && board[1][1] == null
                    && board[2][2] == null)){
                outcome = `win`;
            }
        }
    }

    checkIfTie(){
        if(!board[0].some(b => b == null)
            && !board[1].some(b => b == null)
                && !board[2].some(b => b == null)){
            outcome = `tie`;
        }
    }

    swap(){
        if(player == x){
            player = o;
        }
        else if(player == o){
            player = x;
        }
    }

    showEnd(outcome){
        console.log(outcome);
        if(outcome == `win`){
            descriptionLabel.classList.add(`hidden`);
            outcomeLabel.innerHTML = `Player ` + player + ` wins!`;
            outcomeLabel.classList.remove(`hidden`);
            restartButton.classList.add(`button`);
            restartButton.classList.remove(`hidden`);
        }
        else if(outcome == `tie`){
            descriptionLabel.classList.add(`hidden`);
            outcomeLabel.innerHTML = `Uh oh, you tied!`;
            outcomeLabel.classList.remove(`hidden`);
            restartButton.classList.add(`button`);
            restartButton.classList.remove(`hidden`);
        }
    }
}

let game = new TicTacToeGame;

zeroZero.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(board[0][0]){
        alert(`Please pick another spot.`);
        return;
    }

    board[0][0] = player;
    
    game.drawSelection(player, zeroZero);

    game.checkForWin();

    if(outcome == `win`){
        game.showEnd(outcome);
        return;
    }

    game.checkIfTie();
    if(outcome == `tie`){
        game.showEnd(outcome);
        return;
    }

    game.swap();
});

zeroOne.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(board[0][1]){
        alert(`Please pick another spot.`);
        return;
    }

    board[0][1] = player;
    
    game.drawSelection(player, zeroOne);

    game.checkForWin();

    if(outcome == `win`){
        game.showEnd(outcome);
        return;
    }

    game.checkIfTie();
    if(outcome == `tie`){
        game.showEnd(outcome);
        return;
    }

    game.swap();
});

zeroTwo.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(board[0][2]){
        alert(`Please pick another spot.`);
        return;
    }

    board[0][2] = player;
    
    game.drawSelection(player, zeroTwo);

    game.checkForWin();

    if(outcome == `win`){
        game.showEnd(outcome);
        return;
    }

    game.checkIfTie();
    if(outcome == `tie`){
        game.showEnd(outcome);
        return;
    }

    game.swap();
});

oneZero.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(board[1][0]){
        alert(`Please pick another spot.`);
        return;
    }

    board[1][0] = player;
    
    game.drawSelection(player, oneZero);

    game.checkForWin();

    if(outcome == `win`){
        game.showEnd(outcome);
        return;
    }

    game.checkIfTie();
    if(outcome == `tie`){
        game.showEnd(outcome);
        return;
    }

    game.swap();
});

oneOne.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(board[1][1]){
        alert(`Please pick another spot.`);
        return;
    }

    board[1][1] = player;
    
    game.drawSelection(player, oneOne);

    game.checkForWin();

    if(outcome == `win`){
        game.showEnd(outcome);
        return;
    }

    game.checkIfTie();
    if(outcome == `tie`){
        game.showEnd(outcome);
        return;
    }

    game.swap();
});

oneTwo.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(board[1][2]){
        alert(`Please pick another spot.`);
        return;
    }

    board[1][2] = player;
    
    game.drawSelection(player, oneTwo);

    game.checkForWin();

    if(outcome == `win`){
        game.showEnd(outcome);
        return;
    }

    game.checkIfTie();

    if(outcome == `tie`){
        game.showEnd(outcome);
        return;
    }

    game.swap();
});

twoZero.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(board[2][0]){
        alert(`Please pick another spot.`);
        return;
    }

    board[2][0] = player;
    
    game.drawSelection(player, twoZero);

    game.checkForWin();

    if(outcome == `win`){
        game.showEnd(outcome);
        return;
    }

    game.checkIfTie();
    if(outcome == `tie`){
        game.showEnd(outcome);
        return;
    }

    game.swap();
});

twoOne.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(board[2][1]){
        alert(`Please pick another spot.`);
        return;
    }

    board[2][1] = player;
    
    game.drawSelection(player, twoOne);

    game.checkForWin();

    if(outcome == `win`){
        game.showEnd(outcome);
        return;
    }

    game.checkIfTie();
    if(outcome == `tie`){
        game.showEnd(outcome);
        return;
    }

    game.swap();
});

twoTwo.addEventListener(`click`, (e) => {
    e.preventDefault();

    if(board[2][2]){
        alert(`Please pick another spot.`);
        return;
    }

    board[2][2] = player;
    
    game.drawSelection(player, twoTwo);

    game.checkForWin();

    if(outcome == `win`){
        game.showEnd(outcome);
        return;
    }

    game.checkIfTie();
    if(outcome == `tie`){
        game.showEnd(outcome);
        return;
    }

    game.swap();
});

restartButton.addEventListener(`click`, (e) => {
    e.preventDefault();

    location.reload();
});