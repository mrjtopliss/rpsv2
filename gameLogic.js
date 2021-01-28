let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const possibleChoices = ["Charmander", "Squirtle", "Bulbasaur"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Both attacks missed!";
  } else if (
    playerSelection === "Charmander" &&
    computerSelection === "Bulbasaur"
  ) {
    playerScore++;
    return "You win! Charmander uses Ember on Bulbasaur!";
  } else if (
    playerSelection === "Squirtle" &&
    computerSelection === "Charmander"
  ) {
    playerScore++;
    return "You win! Squirtle uses Bubble on Charmander!";
  } else if (
    playerSelection === "Bulbasaur" &&
    computerSelection === "Squirtle"
  ) {
    playerScore++;
    return "You win! Bulbasaur uses Razor Leaf on Squirtle!";
  } else if (
    playerSelection === "Charmander" &&
    computerSelection === "Squirtle"
  ) {
    computerScore++;
    return "You lose! Squirtle uses Bubble on Charmander!";
  } else if (
    playerSelection === "Bulbasaur" &&
    computerSelection === "Charmander"
  ) {
    computerScore++;
    return "You lose! Charmander uses Ember on Bulbasaur!";
  } else if (
    playerSelection === "Squirtle" &&
    computerSelection === "Bulbasaur"
  ) {
    computerScore++;
    return "You lose! Bulbasaur uses Razor Leaf on Squirtle!";
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
