'use strict';

// console.log(document.querySelector('.message').textContent);
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreCollected = 20;
let highScore=0;

let displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function actionFun() {

    let yourGuess = document.getElementById('guess').value;
    if (!yourGuess) {
      document.querySelector('.number').textContent = '👿';
    } 
    else if (yourGuess == secretNumber) {
      
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.background = 'green';
      displayMessage('You Won !!! your final score is ' + scoreCollected);

      if (scoreCollected > highScore) 
        highScore=scoreCollected;

      document.querySelector('.highscore').textContent = highScore;
    } 
    else if (yourGuess !== secretNumber) {
      scoreNotMatching(yourGuess, secretNumber);
    }

    if (scoreCollected == 0) {
      displayMessage('You lost the game!');
    }
});

document.querySelector('.again').addEventListener('click', function(){
  
  secretNumber = Math.floor(Math.random()*20) +1;
  scoreCollected = 20;

  document.querySelector('.score').textContent ='20';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('body').style.color='#eee';
  document.querySelector('.guess').value= null;

});

let scoreNotMatching = function(yourGuess, secretNumber){

  let message = yourGuess > secretNumber ? 'Your guess is too high!' : 'Your guess is too low!'
  displayMessage(message);
  scoreCollected--;
  document.querySelector('.score').textContent = scoreCollected;
  document.querySelector('.guess').value= null;
}

