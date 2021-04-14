let startBtn = document.querySelector("#startButton");
startBtn.addEventListener("click", playGame);
//ash says we can use this as a global object
let gameState = ["", "", "", "", "", "", "", "", ""];

function decideTurn(currentPlayer) {
    if (currentPlayer === 'o') {
        return 'x'
    }   else  {
        return  'o'
    }
}
function addToScreen(tile, currentPlayer) {
    tile.innerHTML = currentPlayer;
}
function alterGameState(gameState, clicked, currentPlayer) {
    if(gameState[clicked] === "") {
        gameState[clicked] = currentPlayer;
        return true;
    }
}

function playGame() {
    // this determines turn order
    // this variable holds alternating player symbols
    let currentPlayer = 'o';
    const tiles = document.querySelectorAll('.tile');
    //this is a boolean to regulate whether a player can click a tile.
    let notClicked;
    startBtn.removeEventListener('click', playGame, false)
    startBtn.style.opacity = 0.5;
    tiles.forEach(function (tile) {
        tile.addEventListener('click', () => {
            //gets index value of tile from data attribute
            let clicked = tile.dataset.index;
            //assigns player marker based on currentPlayer value
            currentPlayer = decideTurn(currentPlayer);
            let notClicked = alterGameState(gameState, clicked, currentPlayer);
            console.log(currentPlayer)
            //as long as tile has not been clicked,
            //will add mark to gameState array
            //and increment playerScore for next round
            if(notClicked === true) {
                addToScreen(tile, currentPlayer);
            }
        })
    })
}
