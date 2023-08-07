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
const compare = function (userChoice, computerChoice) {
  // 1: Get user input from prompt
  // const userChoice = prompt(
  //   "What's your choice: Rock, Paper, or Scissors?: "
  // ).toLowerCase();
  const outputContainer = document.querySelector(".output");
  const gameOutput = document.querySelector(".gameOutcome");
  const score = document.querySelector(".score");

  if (userChoice === computerChoice) {
    gameOutput.textContent = `Draw`;
  } else if (
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    gameOutput.textContent = `Player Wins!`;
    score.textContent = `User Score: ${userScore} Computer Score: ${computerScore}`;

    userScore++;
  } else {
    gameOutput.textContent = `Computer Wins!`;
    score.textContent = `User Score: ${userScore} Computer Score: ${computerScore}`;

    computerScore++;
  }
};

const choiceButtons = document.querySelectorAll(".btn");
console.log(choiceButtons);

choiceButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let userChoice = btn.innerText.toLowerCase();
    if (userScore === 5) {
      alert(`Player wins, Game over!`);
      choiceButtons.forEach((btn) => {
        btn.disabled = true;
      });
    } else if (computerScore === 5) {
      alert(`Computer wins, Game over!`);
      choiceButtons.forEach((btn) => {
        btn.disabled = true;
      });
    }
    compare(userChoice, computerSelection());

    // console.log(`User Choice: ${userChoice}`);
  });
});

const choiceOutput = document.querySelector("h3");
const clear = document.querySelector(".clear");

// const clearText = function () {
//   if (choiceOutput) {
//     choiceOutput.value = "";
//   }
// };

// while () {
//
// }

// let output = document.querySelector(".output");
// // output.innerHTML = "";

// console.log(output);
// const initialText = document.createElement("p");
// initialText.textContent = `Countdown to blast off!`;
// for (let i = 10; i >= 0; i--) {
//   // so, this needs to be inside of the for Loop
//   const para = document.createElement("p");
//   if (i === 0) {
//     para.textContent = `BLAST OFF!`;
//     output.appendChild(para);
//   } else {
//     para.textContent = `${i}`;
//     output.appendChild(para);
//   }
// }
