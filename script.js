// select all the squares
const squares = document.querySelectorAll('.square');

// set initial player
let currentPlayer = 'X';

// set initial game state
let gameEnded = false;

// add event listener to each square
function playerMove(squareIndex) {
	// check if square has been clicked already or if game has ended
	if (squares[squareIndex].innerHTML || gameEnded) {
		return;
	}

	// add player's symbol to the square
	squares[squareIndex].innerHTML = currentPlayer;

	// check if player has won
	if (checkWin()) {
		alert(`Player ${currentPlayer} wins!`);
		gameEnded = true;
		return;
	}

	// check if game is a tie
	if (checkTie()) {
		alert("It's a tie!");
		gameEnded = true;
		return;
	}

	// switch to other player
	currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

	// update turn message
	document.querySelector('#turn').innerHTML = `Player ${currentPlayer}'s turn`;
}

// add event listener to restart button
function restartGame() {
	// reset all squares
	squares.forEach((square) => {
		square.innerHTML = '';
	});

	// reset game state
	currentPlayer = 'X';
	gameEnded = false;

	// update turn message
	document.querySelector('#turn').innerHTML = `Player ${currentPlayer}'s turn`;
}

// function to check if a player has won
function checkWin() {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a].innerHTML && squares[a].innerHTML === squares[b].innerHTML && squares[a].innerHTML === squares[c].innerHTML) {
			return true;
		}
	}

	return false;
}

// function to check if the game is a tie
function checkTie() {
	let tie = true;

	for (let i = 0; i < squares.length; i++) {
		if (!squares[i].innerHTML) {
			tie = false;
			break;
		}
	}

	return tie;
}
