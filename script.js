let startBtn = document.querySelector("#startButton");
startBtn.addEventListener("click", pressStart);
let resetBtn = document.querySelector("#resetButton");
const tiles = document.querySelectorAll(".tile");
let gameData = {
  gameState: ["", "", "", "", "", "", "", "", ""],
  currentPlayer: "x",
  turns: 0,
};

function pressStart()  {
  playGame();
  startPrompt();
  setTimeout(finishPrompt, 2000);
}

function finishPrompt() {
  let displayPrompt = document.querySelectorAll('.tile')
  displayPrompt.forEach((tile) => {
    tile.style.color = 'transparent';
    tile.style.transition = "ease-out 500ms";
  })
}

function startPrompt() {
  let displayPrompt = document.querySelectorAll('.tile')
  displayPrompt.forEach((tile) => {
    tile.style.color = '#e4ebdb';
    tile.style.transition = "ease-in 500ms";
  })
}


function decideTurn() {
    if (gameData.currentPlayer === "o") {
      document.querySelector("#playerTwoBox").style.border = "10px solid #e4ebdb";
      return "x";
    }
    document.querySelector("#playerOneBox").style.border = "10px solid #e4ebdb";
    return "o";
}
function addToScreen(tile) {
  if (gameData.currentPlayer === "x") {
    tile.classList.add("clickedX");
  } else {
    tile.classList.add("clickedO");
  }
}
function alterGameState(clickedTile) {
  if (gameData.gameState[clickedTile] === "") {
    gameData.gameState[clickedTile] = gameData.currentPlayer;
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
    gameData.currentPlayer = decideTurn();
    gameData.turns += 1;
    chooseCursor();
  }
  let winner = checkWinner();
  if (winner) {
    calculatePlayerScores(winner);
    showModal(winner);
    document.querySelector("#gameBoard").style.cursor = "auto";
    startBtn.addEventListener("click", pressStart);
    resetBtn.removeEventListener("click", resetGame);
    startBtn.style.opacity = "1";
    resetBtn.style.opacity = "0.5";
    tiles.forEach((tile) => {
      tile.removeEventListener("click", tileClickEvent);
    });
  }
}
function calculatePlayerScores(winner) {
  if (winner === "Player 1 wins!") {
    let playerOneScoreboard = document.querySelector('#playerOneScore');
    playerOneScoreboard.innerHTML = parseInt(playerOneScoreboard.innerHTML) + 1;
  }
  else if (winner === "Player 2 wins!") {
    let playerTwoScoreboard = document.querySelector('#playerTwoScore');
    playerTwoScoreboard.innerHTML = parseInt(playerTwoScoreboard.innerHTML) + 1;
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
  let winMessage = "";
  winningCombinations.forEach((set) => {
    let indexA = set[0];
    let indexB = set[1];
    let indexC = set[2];
    if (
      gameData.gameState[indexA] === "x" &&
      gameData.gameState[indexB] === "x" &&
      gameData.gameState[indexC] === "x"
    ) {
      winMessage = "Player 1 wins!";
    }
    if (
      gameData.gameState[indexA] === "o" &&
      gameData.gameState[indexB] === "o" &&
      gameData.gameState[indexC] === "o"
    ) {
      winMessage = "Player 2 wins!";
    }
    if (winMessage === "" && gameData.turns === 9) {
      winMessage = "It's a draw";
    }
  });
  return winMessage;
}
function chooseCursor() {
  if (gameData.currentPlayer === "x") {
    document.querySelector("#gameBoard").style.cursor = "url('imageAssets/tinyX.png'), auto";
    document.querySelector("#playerOneBox").style.border = "10px solid #f9b233";
  } else if (gameData.currentPlayer === "o") {
    document.querySelector("#gameBoard").style.cursor = "url('imageAssets/tinyO.png'), auto";
    document.querySelector("#playerTwoBox").style.border = "10px solid #e6332a"
  }
}

function playGame() {
  chooseCursor();
  gameData.turns = 0;
  startBtn.removeEventListener("click", pressStart);
  startBtn.style.opacity = "0.5";
  resetBtn.addEventListener("click", resetGame);
  resetBtn.style.opacity = "1";
  gameData.gameState = ["", "", "", "", "", "", "", "", ""];
  tiles.forEach((tile) => {
    tile.classList.remove("clickedX", "clickedO");
    tile.addEventListener("click", tileClickEvent);
  });
}

function resetGame() {
  startBtn.addEventListener('click', pressStart);
  startBtn.style.opacity = "1";
  resetBtn.style.opacity = "0.5";
  gameState = ["", "", "", "", "", "", "", "", ""];
  tiles.forEach((tile) => {
    tile.classList.remove('clickedX', 'clickedO');
    tile.removeEventListener('click', tileClickEvent);
})
}

function showModal(winner) {
  let close = document.querySelector(".close");
  let modal = document.querySelector(".modal");
  let displayWinner = document.querySelector("#displayWinner");
  modal.style.display = "block";
  if (winner.includes("1")) {
    displayWinner.style.color = "#f9b233";
    playWinAudio();
  }
  if (winner.includes("2")) {
    displayWinner.style.color = "#e6332a";
    playWinAudio();
  }

  if (winner.includes("draw")) {
    displayWinner.style.color = "#75aa31";
    playDrawAudio();
  }
  displayWinner.innerHTML =
    winner + '<p class="newGameMessage">Click Start For a New Game!</p>';
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function playWinAudio() {
  let victorySound = document.querySelector("#victorySound");
  victorySound.play();
}

function playDrawAudio() {
  let drawSound = document.querySelector("#drawSound");
  drawSound.play();
}