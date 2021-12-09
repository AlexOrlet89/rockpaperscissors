// import functions

import { score } from "./game.js";
import { generateThrow } from "./game.js";

const buttonRock = document.getElementById('rock');
const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const resultsEl = document.getElementById('results');

buttonRock.addEventListener('click', () => {
  const computer = generateThrow();
  console.log(computer);
  const player = buttonRock.id;
  const results = score(player, computer);
  console.log(results);
  resultsEl.textContent = results;
});


buttonPaper.addEventListener('click', () => {
  const computer = generateThrow();
  console.log(computer);
  const player = buttonPaper.id;
  const results = score(player, computer);
  console.log(results);
  resultsEl.textContent = results;
});


buttonScissors.addEventListener('click', () => {
  const computer = generateThrow();
  console.log(computer);
  const player = buttonScissors.id;
  const results = score(player, computer);
  console.log(results);
  resultsEl.textContent = results;
});

// grab DOM elements
// document.getElementById('paper').addEventListener('click');
// document.getElementById('scissors').addEventListener('click');




// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
