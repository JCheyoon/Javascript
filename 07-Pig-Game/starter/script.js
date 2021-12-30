'use strict';

//selecting elements
const player0E1 = document.querySelector('.player--0');
const player1E1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition

const scores = [0, 0];
let currentscore = 0;
let activePlayer = 0;
let playing = true;

const setdefault = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentscore = 0;
  activePlayer = 0;
  playing = true;
  scores[0] = 0;
  scores[1] = 0;
  player0E1.classList.remove('player--winner');
  player1E1.classList.remove('player--winner');
  player0E1.classList.add('player--active');
  player1E1.classList.remove('player--active');
};

setdefault();

const switchPlayer = function () {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer]; // when i switch player, set the active players score = score array index of the active player

  currentscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // if activeplater is 0, we want new player 1 else should be 0
  player0E1.classList.toggle('player--active'); // if css has player--active, remove it (스위치처럼)
  player1E1.classList.toggle('player--active');
};
//Rolling dice function
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. check for rolled 1 : if true, switch to next player
    if (dice !== 1) {
      //add dice to current scroe
      currentscore += dice; // += -> currentscore = currentscore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add curent score to active player'score
    scores[activePlayer] += currentscore; // scores[1] = scores[1] +currentscore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if player's socre is >=100
    if (scores[activePlayer] >= 20) {
      //finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  setdefault();
});
