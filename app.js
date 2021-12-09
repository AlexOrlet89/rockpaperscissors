// import functions

import { score } from "./game.js";
import { generateThrow } from "./game.js";

// grab DOM elements
const button = document.getElementById('rock');
const resultsEl = document.getElementById('results');
button.addEventListener('click', () => {
  const computer = generateThrow();
  console.log(computer);
  const player = button.id;
  const results = score(player, computer);
  console.log(results);
  resultsEl.textContent = results;
});
// document.getElementById('paper').addEventListener('click');
// document.getElementById('scissors').addEventListener('click');




// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
