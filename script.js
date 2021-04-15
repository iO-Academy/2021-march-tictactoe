let startBtn = document.querySelector("#startButton");
startBtn.addEventListener("click", playGame);
const tiles = document.querySelectorAll(".tile");
let gameState = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let turns;
function decideTurn() {
  if (currentPlayer === "o") {
    return "x";
  }
  return "o";
}
function addToScreen(tile) {
  if (currentPlayer === "x") {
    tile.classList.add("clickedX");
  } else {
    tile.classList.add("clickedO");
  }
}
function alterGameState(clickedTile) {
  if (gameState[clickedTile] === "") {
    gameState[clickedTile] = currentPlayer;
    return true;
  }
  return false;
}
function tileClickEvent(event) {
  event.target.removeEventListener("click", tileClickEvent);
  let clickedTile = event.target.dataset.index;
  let notYetClicked = alterGameState(clickedTile);
  if (notYetClicked) {
    addToScreen(event.target);
    currentPlayer = decideTurn();
    turns++;
  }
  let winner = checkWinner();
  if (winner) {
    showModal(winner);
    startBtn.addEventListener("click", playGame);
    startBtn.style.opacity = "1";
    tiles.forEach((tile) => {
      tile.removeEventListener('click', tileClickEvent);
    })
  }
}
function checkWinner() {
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
  let winMessage = '';
  winningCombinations.forEach((set) => {
    let indexA = set[0];
    let indexB = set[1];
    let indexC = set[2];
    if (
        gameState[indexA] === "x" &&
        gameState[indexB] === "x" &&
        gameState[indexC] === "x"
    ) {
      winMessage = "Player 1 wins!";
    }
    if (
        gameState[indexA] === "o" &&
        gameState[indexB] === "o" &&
        gameState[indexC] === "o"
    ) {
      winMessage = "Player 2 wins!";
    }
    if (winMessage == '' && turns === 9){
      winMessage = "It's a draw"
    }
  })
  return winMessage;
}

function playGame() {
  turns = 0;
  startBtn.removeEventListener('click', playGame, false);
  startBtn.style.opacity = "0.5";
  tiles.forEach((tile) => {
    gameState = ["", "", "", "", "", "", "", "", ""];
    tile.classList.remove('clickedX', 'clickedO');
    tile.addEventListener('click', tileClickEvent);
  })
}
function showModal(winner) {
  let close = document.querySelector(".close");
  let modal = document.querySelector(".modal");
  let displayWinner = document.querySelector("#displayWinner");
  modal.style.display = "block";
  if (winner.includes("1")) {
    displayWinner.style.color = "#f9b233";
  }
  if (winner.includes("2")) {
    displayWinner.style.color = "#e6332a";
  }
  displayWinner.innerHTML = winner + '<p class="newGameMessage"> Click Start For a New Game!</p>';
  close.addEventListener("click", () => {
    modal.style.display = "none";
  })
}