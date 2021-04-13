let startBtn = document.querySelector("#startButton");
// this determines turn order
let currentPlayer = 1;
// this variable holds alternating player symbols
let playerMarker;
const tiles = document.querySelectorAll('.tile');
let gameState = ["", "", "", "", "", "", "", "", ""];
//this is a boolean to regulate whether a player can click a tile. 
let notClicked;

function incrementCurrentPlayer() {
    currentPlayer++;
    return currentPlayer;
}

function decideTurn(currentPlayer, playerMarker) {
    if (currentPlayer % 2 == 0) {
        playerMarker = 'o'
    } else {
        playerMarker = 'x'
    }
    return playerMarker;
}

function addToScreen(tile, playerMarker) {
    tile.innerHTML = playerMarker;
}

function alterGameState(gameState, clicked, playerMarker) {
    if(gameState[clicked] == "") {
        gameState[clicked] = playerMarker;
        console.log(gameState[clicked]);
        console.log(gameState);
        return true;
    } else {
        return false;
    }
}

startBtn.addEventListener("click", () => {
    startBtn.style.opacity = 0.5;
        tiles.forEach(function (tile) {
            tile.addEventListener('click', () => {
                //gets index value of tile from data attribute
                let clicked = tile.dataset.index;
                //assigns player marker based on currentPlayer value
                playerMarker = decideTurn(currentPlayer, playerMarker);
                let notClicked = alterGameState(gameState, clicked, playerMarker);
                //as long as tile has not been clicked,
                //will add mark to gameState array
                //and increment playerScore for next round
                if(notClicked == true) {
                    addToScreen(tile, playerMarker);
                    console.log(currentPlayer);
                    currentPlayer = incrementCurrentPlayer(currentPlayer);
                }
            })
        })
    })

