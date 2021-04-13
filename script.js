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

let grid = document.querySelectorAll('.index');
gameState = ["", "", "", "", "", "", "", "", ""];

console.log(grid);
index.forEach(function (cell) {
    cell.addEventListener('click', () => {
        alterGameState();
        add to
        sdjghbdgb
    })
})

