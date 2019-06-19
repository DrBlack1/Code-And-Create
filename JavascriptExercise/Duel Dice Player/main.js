// DOM Stuff
const startBtn = document.getElementsByClassName('btns__start')[0];
const rollBtn = document.getElementsByClassName('btns__roll')[0];
const diceImg = document.getElementById('dice__img');
const p1Score = document.getElementsByClassName('dice__score-p1')[0];
const p2Score = document.getElementsByClassName('dice__score-p2')[0];

// Variables

// Declares dice variable.
let gameDice;
// Declares player variable.
let player1;
let player2;
// Sets players score so we can use for DOM.
let p1TotalScore = 0;
let p2TotalScore = 0;
// Used to check if player 1's turn.
let isPlayer1;
// Sets game over by default.
let gameOver = true;

// Object of dice images to display in the browser.
const diceImgs = {
  one: './imgs/dice_1.png',
  two: './imgs/dice_2.png',
  three: './imgs/dice_3.png',
  four: './imgs/dice_4.png',
  five: './imgs/dice_5.png',
  six: './imgs/dice_6.png',
};

// Class used to create a new dice object.
class Dice {
  constructor(totalSides, startingSide) {
    this.totalSides = totalSides;
    this.startingSide = startingSide;
  }
}

// Class used to create a new player object.
class Player {
  constructor(startingScore) {
    this.startingScore = startingScore;
  }
}

// Function for disabling passed in button
const disableButton = button => {
  button.classList.add('btn--disabled');
};

// Function for enabling passed in button
const enableButton = button => {
  button.classList.remove('btn--disabled');
};

// Listener event for when start button is pressed.
startBtn.addEventListener('click', () => {
  // Displays players scores (0).
  p1Score.innerHTML = `P1: ${p1TotalScore}`;
  p2Score.innerHTML = `P2: ${p2TotalScore}`;
  // Random starting number for dice between 2-6.
  const startRoll = Math.floor(Math.random() * (6 - 2 + 1) + 2);
  // Starts a dice object with the random start number.
  gameDice = new Dice(6, startRoll);
  // Creating player objects + making starting score the same as the dice side.
  player1 = new Player(0);
  player2 = new Player(0);

  // Sets player 1's turn.
  isPlayer1 = true;
  // Sets the game has started.
  gameOver = false;

  // Displays dice image to 1.
  diceImg.src = diceImgs.one;

  // Sets the state of the btns
  disableButton(startBtn);
  enableButton(rollBtn);
});

// Listener event for when roll button is pressed.
rollBtn.addEventListener('click', () => {
  // Checks if game over, returns if it is.
  if (gameOver === true) {
    p1TotalScore = 0;
    p2TotalScore = 0;
    return alert(
      `GAME OVER! Start a new game by clicking the 'Start Game' button.`
    );
  }

  // Sets the state of the btns
  enableButton(rollBtn);

  // Generates a random number between 1-6.
  const newRoll = Math.floor(Math.random() * (6 - 1 + 1) + 1);

  // Checks which players turn it currently is.
  if (isPlayer1 === true) {
    // Adds score.
    p1TotalScore += newRoll;
    isPlayer1 = false;

    // If player 1 has 20 or over they have won so game over.
    if (p1TotalScore >= 20) {
      alert(
        `YOU WON! Congratulations P1. The final scores were, P1: ${p1TotalScore}, P2: ${p2TotalScore}.`
      );

      gameOver = true;
      // Sets the state of the btns
      enableButton(startBtn);
      disableButton(rollBtn);
    }
  } else {
    // Adds score.
    p2TotalScore += newRoll;
    isPlayer1 = true;

    // If player 2 has 20 or over they have won so game over.
    if (p2TotalScore >= 20) {
      alert(
        `YOU WON! Congratulations P2. The final scores were, P1: ${p1TotalScore}, P2: ${p2TotalScore}.`
      );

      enableButton(startBtn);
      disableButton(rollBtn);
      gameOver = true;
    }
  }

  // Displays scores in DOM.
  p1Score.innerHTML = `P1: ${p1TotalScore}`;
  p2Score.innerHTML = `P2: ${p2TotalScore}`;

  // Switch case for displaying corresponding dice DOM element with dice roll.
  switch (newRoll) {
    // Ends game because rolling a 1 means you lose.
    case 1:
      gameOver = true;
      diceImg.src = diceImgs.one;
      alert(
        `GAME OVER! The final scores were, P1: ${p1TotalScore}, P2: ${p2TotalScore}. Click on the start button to start a new game.`
      );

      p1TotalScore = 0;
      p2TotalScore = 0;

      // Sets the state of the btns
      enableButton(startBtn);
      disableButton(rollBtn);
      break;
    case 2:
      diceImg.src = diceImgs.two;
      break;
    case 3:
      diceImg.src = diceImgs.three;
      break;
    case 4:
      diceImg.src = diceImgs.four;
      break;
    case 5:
      diceImg.src = diceImgs.five;
      break;
    case 6:
      diceImg.src = diceImgs.six;
      break;
    // Default returns end of game so it doesn't break.
    default:
      gameOver = true;
      alert(
        `GAME OVER! The final scores were, P1: ${p1TotalScore}, P2: ${p2TotalScore}. Click on the start button to start a new game.`
      );

      p1TotalScore = 0;
      p2TotalScore = 0;

      // Sets the state of the btns
      enableButton(startBtn);
      disableButton(rollBtn);
  }
});
