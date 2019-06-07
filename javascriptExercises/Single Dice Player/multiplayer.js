let scores, roundScore, activePlayer,gamePlaying;
const rollbtn = document.getElementById("btn");
const holdbtn = document.getElementById("holdbtn");

rollbtn = document.getElementById("btn").addEventListener('click', function(){
	if (gamePlaying) {
		// 1. random number
		var dice = Math.floor(Math.random() * 6) + 1;

		// 2. display result
		var diceDOM = document.querySelector('.dice');
		diceDOM.style.display = 'block';
		diceDOM.src = diceimgs['diceimg' + activePlayer + dice];

		document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em';

		// 3. Update round score if the rolled number is not 1
		if (dice !== 1) {
			hideRolledMsg();
			//add score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
			//disable button

			disableBtn(btnRoll, 1000);
			hideRolledMsg();
			document.querySelector('.player-'+activePlayer+'-rolled-1').style.visibility = 'visible';
			nextPlayer();		
		}
	}
	
		
});

