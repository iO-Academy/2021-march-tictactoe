let startBtn = document.querySelector("#startButton");
startBtn.addEventListener("click", playGame);

//ash says we can use this as a global object
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 'x';

function decideTurn(currentPlayer) {
    if (currentPlayer === 'o') {
        return 'x';
    }
    return 'o';
}

function addToScreen(tile, currentPlayer) {
    if (currentPlayer === 'x') {
        tile.classList.add('clickedX')
    }
    if (currentPlayer === 'o') {
        tile.classList.add('clickedO')
    }
}

function alterGameState(gameState, clicked, currentPlayer) {
    if(gameState[clicked] === "") {
        gameState[clicked] = currentPlayer;
        return true;
    }
    return false;
}

function clickEvent(event) {
    let clicked = event.target.dataset.index;

    let notYetClicked = alterGameState(gameState, clicked, currentPlayer);

    if(notYetClicked) {
        addToScreen(event.target, currentPlayer);
        currentPlayer = decideTurn(currentPlayer);
    }

    event.target.removeEventListener('click', clickEvent)

    let winner = checkWinner(gameState)

    if (winner) {
        console.log(winner)
        // display win message/modal
        startBtn.addEventListener("click", playGame);
    }

}

function checkWinner(gameState) {

    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let winMessage;

    winningCombinations.forEach((set) => {
        let indexA = set[0];
        let indexB = set[1];
        let indexC = set[2];


        if (gameState[indexA] === "x" &&
            gameState[indexB] === "x" &&
            gameState[indexC] === "x") {
            winMessage = "Player 1 wins!"
        }

        if (gameState[indexA] === "o" &&
            gameState[indexB] === "o" &&
            gameState[indexC] === "o") {
            winMessage = "Player 2 wins!"
        }
    })

    return winMessage
}

function playGame() {

    const tiles = document.querySelectorAll('.tile');

    startBtn.removeEventListener('click', playGame, false);
    startBtn.style.opacity = 0.5;

    tiles.forEach(function (tile) {
        tile.addEventListener('click', clickEvent)
    })
}