let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const possibleChoices = ["charmander", "squirtle", "bulbasaur"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return "Its a tie!";
  } else if (
    playerSelection.toLowerCase() === "charmander" &&
    computerSelection === "bulbasaur"
  ) {
    playerScore++;
    return "You win! charmander beats bulbasaur.";
  } else if (
    playerSelection.toLowerCase() === "squirtle" &&
    computerSelection === "charmander"
  ) {
    playerScore++;
    return "You win! squirtle beats charmander!.";
  } else if (
    playerSelection.toLowerCase() === "bulbasaur" &&
    computerSelection === "squirtle"
  ) {
    playerScore++;
    return "You win! bulbasaur beats squirtle!.";
  } else if (
    playerSelection.toLowerCase() === "charmander" &&
    computerSelection === "squirtle"
  ) {
    computerScore++;
    return "You lose! squirtle beats charmander!.";
  } else if (
    playerSelection.toLowerCase() === "bulbasaur" &&
    computerSelection === "charmander"
  ) {
    computerScore++;
    return "You lose! charmander beats bulbasaur!.";
  } else if (
    playerSelection.toLowerCase() === "squirtle" &&
    computerSelection === "bulbasaur"
  ) {
    computerScore++;
    return "You lose! bulbasaur beats squirtle!.";
  } else {
    return "Something went wrong, are you a fool?";
  }
}

function game() {
  for (let roundPlayed = 0; roundPlayed <= 5; roundPlayed++) {
    const computerSelection = computerPlay();
    alert(playRound(playerSelection, computerSelection));
  }
}
