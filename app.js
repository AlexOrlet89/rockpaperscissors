// import functions

import { score } from "./game.js";
import { generateThrow } from "./game.js";






const dwaynePicks = document.getElementById('dwaynepicks');
const buttonRock = document.getElementById('rock');
const images = (computer) => {
  const rockpic = 'assets/rock.jpg';
  const paperpic = 'assets/paper.jpg';
  const scissorspic = 'assets/scissors.jpg';
  if (computer === 'rock') { return rockpic; }
  if (computer === 'paper') { return paperpic; }
  if (computer === 'scissors') { return scissorspic; }

};

console.log(images('rock'));




const buttonPaper = document.getElementById('paper');
const buttonScissors = document.getElementById('scissors');
const resultsEl = document.getElementById('results');
const computerChooses = document.getElementById('computerchooses');

buttonRock.addEventListener('click', () => {
  const computer = generateThrow();
  const player = buttonRock.id;
  const results = score(player, computer);
  resultsEl.textContent = results;
  computerChooses.textContent = ('Dwayne the Rock johnson chooses... ' + computer);
  // dwaynePicks.src = `/assets/${computer}.jpg`;
  const computerImage = images(computer);
  dwaynePicks.src = computerImage;
});


buttonPaper.addEventListener('click', () => {
  const computer = generateThrow();
  const player = buttonPaper.id;
  const results = score(player, computer);
  resultsEl.textContent = results;
  computerChooses.textContent = ('Dwayne the Rock johnson chooses... ' + computer);
  const computerImage = images(computer);
  dwaynePicks.src = computerImage;
});


buttonScissors.addEventListener('click', () => {
  const computer = generateThrow();
  const player = buttonScissors.id;
  const results = score(player, computer);
  resultsEl.textContent = results;
  computerChooses.textContent = ('Dwayne the Rock johnson chooses... ' + computer);
  const computerImage = images(computer);
  dwaynePicks.src = computerImage;
});

// grab DOM elements
// document.getElementById('paper').addEventListener('click');
// document.getElementById('scissors').addEventListener('click');

// if (computer = 'rock') {




// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
