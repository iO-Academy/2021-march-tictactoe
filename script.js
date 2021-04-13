const winningConditions = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let playerTwo =
    {
        marker: 'o',
        score: 0,
    }

let playerOne =
    {
        marker: 'x',
        score: 0,
    }

// playerOne go when odd, playerTwo go when even. Increments.
let currentPlayer = 1;
let playerMarker = 'x';

let grid = document.querySelectorAll('.index');
gameState = ["", "", "", "", "", "", "", "", ""];

console.log(grid);


index.forEach(function (cell) {
    cell.addEventListener('click', () => {
        //change marker depending on go
        if (currentPlayer / 2 == 0) {
            playerMarker = 'o'
        } else {
            playerMarker = 'x'
        }
        if (gameState[cellIndex]) !== "") {

            alterGameState();
            add to
            currentPlayer++
        }

    })
})


function alterGameState() {
    let clicked = data - index.getAttribute
    //push marker to indexed item in array
    gameState.splice(clicked, 0, playerMarker)
}