const winningConditions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// playerOne go when odd, playerTwo go when even. Increments.
const currentPlayer = 1;
const playerMarker = 'x';

const tiles = document.querySelectorAll('.tile');
gameState = ["", "", "", "", "", "", "", "", ""];

// console.log(tiles);
//
// tiles.forEach(function (tile) {
//     tile.addEventListener('click', () => {
//         console.log(tile);
//         let clicked = tile.dataset.index;
//         console.log(clicked);
//         //assigns player marker based on currentPlayer value
//         decideTurn(currentPlayer, playerMarker);
//         //gets index value of tile from data attribute
//
//         //as long as tile has not been clicked,
//         //will add mark to gameState array
//         //and increment playerScore for next round
//         if(gameState[clicked] == "") {
//             addToScreen(tile);
//            // alterGameState();
//
//
//         }
//     })
// })

function decideTurn(currentPlayer, playerMarker) {
    if (currentPlayer % 2 == 0) {
         playerMarker = 'o'
    } else {
        playerMarker = 'x'
    }
    currentPlayer++;
    console.log(currentPlayer)
}


// beginning of decidePlayer
// if (currentPlayer % 2 == 0) {
//     playerMarker = 'o'
// } else {
//     playerMarker = 'x'
// }

function addToScreen(tile) {
    tile.innerHTML = playerMarker;
}

//draft for alterGameState
// function alterGameState() {
//     let clicked = data - index.getAttribute
//     //push marker to indexed item in array
//     gameState.splice(clicked, 0, playerMarker)
// }


let gameIsRunning = false;

let startBtn = document.querySelector("#startButton");

startBtn.addEventListener("click", () => {
    console.log('hello')
    startBtn.style.opacity = 0.5;
    gameIsRunning = true;
    while (gameIsRunning && currentPlayer < 9 ) {
        tiles.forEach(function (tile) {
            tile.addEventListener('click', () => {
                console.log(tile);
                let clicked = tile.dataset.index;
                console.log(clicked);
                //assigns player marker based on currentPlayer value
                decideTurn(currentPlayer, playerMarker);
                //gets index value of tile from data attribute

                //as long as tile has not been clicked,
                //will add mark to gameState array
                //and increment playerScore for next round
                if(gameState[clicked] == "") {
                    addToScreen(tile);
                    // alterGameState();
                }
                if (currentPlayer >= 9) {
                    gameIsRunning = false;
                }
            })
        })
    }
});


