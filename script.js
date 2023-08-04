"use strict";

console.log("Hello World");

/* 
Rock Paper Scissors Game:
Logic -> Paper > Rock : Scissors > Paper : Rock > Scissors



4: Create score variables
    4.a: increment winner score

5: Bonus -> Play game within loop
    5.a: Get user input on how many iterations of game they want to play
    5.b: Generate 'game over' and 'winner/ loser' text when game is done and depending on user score compared to computers
*/
let userScore = 0;
let computerScore = 0;

// 2: Create function to generate random selection for computer
//     2.a: Return randomized value
const computerSelection = function () {
  const choices = ["rock", "paper", "scissors"];
  const selection = choices[Math.floor(Math.random() * choices.length)];
  return selection;
};

// 3: Create function to compare user input to computer selection (from function)
//     3.a: return true or string if user beats computer
//     3.b: return true or string if computer beats user
//     3.c: return string stating game was a draw
const compare = function (computerChoice) {
  // 1: Get user input from prompt
  const userChoice = prompt(
    "What's your choice: Rock, Paper, or Scissors?: "
  ).toLowerCase();
  if (userChoice === computerChoice) {
    console.log("Draw");
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Player Wins!");
    userScore++;
  } else {
    console.log("Computer Wins!");
    computerScore++;
  }

  console.log(
    `Player choice: ${userChoice} Computer choice: ${computerChoice}`
  );
  console.log(`User Score: ${userScore} Computer Score: ${computerScore}`);
};

while (userScore < 3 || computerScore < 3) {
  compare(computerSelection());
  if (userScore === 3) {
    console.log("Player Wins");
    break;
  } else if (computerScore === 3) {
    console.log("Computer Wins");
    break;
  }
}
