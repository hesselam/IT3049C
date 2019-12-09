showmodal();
getnewrandomN();
var randomN;
var guessCount = 1;

function getnewrandomN(){
    randomN = Math.floor(Math.random() * 15) + 1;
    console.log(randomN);
    guessCount = 1;
}
function showmodal() {
    document.getElementById("newgamemodal").hidden = false;
}
function hidemodal() {
    document.getElementById("newgamemodal").hidden = true;
}

function guessbtn(guessNum) {
    var numSelection  = document.getElementById("numberselect");
    var guessNum = numSelection.options[numSelection.selectedIndex].value;
    if(guessNum == randomN)
    {
        navigator.vibrate(1000);
        if(guessCount <= 1){confirm("You Win!\nIt only took you "+guessCount+" try!");}
        else{confirm("You Win!\nIt took you "+guessCount+" tries.");
        confirm("Start A New Game!");
        getnewrandomN();
    }
    }
    else 
    {
        navigator.vibrate([100, 100, 100]);
        guessCount = guessCount + 1;
        confirm("Wrong! Try Again");
    }
  }
