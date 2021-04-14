function showModal(winner) {
  let modal = document.querySelector(".modal");
  let displayWinner = document.querySelector("#displayWinner");
  modal.style.hidden = "visible";
  displayWinner.textContent = winner;
}
