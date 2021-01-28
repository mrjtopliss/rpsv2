const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let playerSelection = button.id;
    const computerSelection = computerPlay();
    result = playRound(playerSelection, computerSelection);
    scoreText.innerHTML = result;
    scoreNumber.innerHTML =
      "Red's score: " + playerScore + "<br>Blue's score: " + computerScore;
    const endResult = document.querySelector(".container");
    if (playerScore === 5) {
      endResult.innerHTML =
        "<h1> You won, WHAT? Unbelievable! I picked the wrong Pokémon </h1><br><h3> Blue paid out $100 to the winner. </h3> ";
      let refreshButton = document.createElement("button");
      refreshButton.className = "healButtonWin";
      refreshButton.addEventListener("click", () => {
        location.reload();
      });
      endResult.appendChild(refreshButton);
    } else if (computerScore === 5) {
      endResult.innerHTML =
        "<h1> Yeah! Am I great or what? Of course you lost </h1><br><h3> Your pokemon has fainted, you've blacked out... </h3> ";
      let refreshButton = document.createElement("button");
      refreshButton.className = "healButtonLose";
      refreshButton.addEventListener("click", () => {
        location.reload();
      });
      endResult.appendChild(refreshButton);
    }
  });
});
const container = document.querySelector(".container");
const scoreText = document.createElement("div");
scoreText.classList.add("scoreboard");
container.appendChild(scoreText);
const scoreNumber = document.createElement("div");
container.appendChild(scoreNumber);
