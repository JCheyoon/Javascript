'use strict';
/*
console.log(document.querySelector('.message').textContent);
//이건 리딩.class를 사용해서 앞에 .붙임 ',콘솔창에 Start guessing이라는 텍스트만 얻기 위해서 뒤에.textcontent를 붙여준다.

//텍스트를 바꿔줌

document.querySelector('.number').textContent = 13;

 
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*if(a) 는 a가 참이면 작동

if(!a) 는 a가 거짓이면 작동

   */
// DRY = Do not Repeat Yourself
function getRandomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = getRandomNumber();
let score = 20;
let highscore = 0;

const setTextContent = function (selector, message) {
  document.querySelector(selector).textContent = message;
};
const displayMessage = function (message) {
  setTextContent('.message', message);
};
const displayNumber = function (message) {
  setTextContent('.number', message);
};

//again reset버튼
document.querySelector('.again').addEventListener('click', function () {
  console.log('again');
  secretNumber = getRandomNumber();
  score = 20;
  setTextContent('.score', score);
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  setTextContent('.number', '?');
  document.querySelector('.guess').value = '';
});

//check버튼
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // Number 로 안바꿔주면 string 이여서 === 가 안먹힘
  console.log(guess, typeof guess);

  // 만약 guess가 없다면
  if (!guess) {
    displayMessage('⛔No number');
    // document.querySelector('.message').textContent = '⛔No number';
  }

  // 게임하는 사람이 이겼을때
  else if (guess === secretNumber) {
    displayMessage('🎉Correct Number!');
    // document.querySelector('.message').textContent = '🎉Correct Number!';
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //하이스코어
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //guess 가 틀릴때
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low');

      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high!' : '📉Too low'; //ternary

      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You lost the game');
      // document.querySelector('.message').textContent = '💥You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // guess 가 너무 높을때
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too high!';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // guess 가 너무 낮을때
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
