let startBtn = document.querySelector("#startButton");
startBtn.addEventListener("click", playGame);
//ash says we can use this as a global object
let gameState = ["", "", "", "", "", "", "", "", ""];

function decideTurn(currentPlayer) {
    if (currentPlayer === 'o') {
        return 'x';
    }
        return  'o';
}
function addToScreen(tile, currentPlayer) {
    tile.innerHTML = currentPlayer;
}
function alterGameState(gameState, clicked, currentPlayer) {
    if(gameState[clicked] === "") {
        gameState[clicked] = currentPlayer;
        return true;
     }
        return false;
}

function playGame() {
    // this determines turn order
    // this variable holds alternating player symbols
    let currentPlayer = 'x';
    const tiles = document.querySelectorAll('.tile');
    //this is a boolean to regulate whether a player can click a tile.
    let notYetClicked;
    startBtn.removeEventListener('click', playGame, false);
    startBtn.style.opacity = 0.5;
    tiles.forEach(function (tile) {
        tile.addEventListener('click', () => {
            //gets index value of tile from data attribute
            let clicked = tile.dataset.index;
            //assigns player marker based on currentPlayer value
            let notYetClicked = alterGameState(gameState, clicked, currentPlayer);
            //as long as tile has not been clicked,
            //will add mark to gameState array
            //and increment playerScore for next round
            if(notYetClicked) {
                addToScreen(tile, currentPlayer);
                currentPlayer = decideTurn(currentPlayer);
            }
        })

    })
}
