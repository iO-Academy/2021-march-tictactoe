const winningConditions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

// playerOne go when odd, playerTwo go when even. Increments.
const currentPlayer = 1;
const playerMarker = 'x';

const tiles = document.querySelectorAll('.tile');
gameState = ["", "", "", "", "", "", "", "", ""];

console.log(tiles);

tiles.forEach(function (tile) {
    tile.addEventListener('click', () => {
        console.log(tile);
        //assigns player marker based on currentPlayer value
        decidePlayer(currentPlayer, playerMarker);
        //gets index value of tile from data attribute
        let clicked = tile.dataset.index;
        console.log(clicked);
        //as long as tile has not been clicked,
        //will add mark to gameState array
        //and increment playerScore for next round
        if(gameState[clicked] == "") {
            alterGameState();
            addToScreen();
            currentPlayer++;
        }

    })
})


// beginning of decidePlayer
// if (currentPlayer % 2 == 0) {
//     playerMarker = 'o'
// } else {
//     playerMarker = 'x'
// }

function addToScreen() {
    tile.innerHTML = playerMarker;
}

//draft for alterGameState
// function alterGameState() {
//     let clicked = data - index.getAttribute
//     //push marker to indexed item in array
//     gameState.splice(clicked, 0, playerMarker)
// }