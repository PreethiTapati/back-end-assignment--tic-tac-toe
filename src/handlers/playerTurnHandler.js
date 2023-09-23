import dom from '../dom.js';
import data from '../data.js';
import selectWinner from '../utils/selectWinner.js';

const playerTurnHandler = (e) => {
  const cellEl = e.target;
  const id = cellEl.id;

  // Check if cell is already marked or game is over
  if (cellEl.innerText || dom.playerTurn.innerHTML === `${data.turn} won!`) {
    return;
  }

  // Mark the cell with the current player's mark
  cellEl.classList.add(data.turn);
  cellEl.innerHTML = data.turn;

  // Update internal game board data
  data.playBoard[id] = data.turn;

  // Check for winner or draw
  const winResult = selectWinner(
    document.querySelectorAll(`.${data.turn}`),
    data.winCombinations,
    data.turn,
    data.playBoard
  );

  if (winResult !== null) {
    dom.playerTurn.innerHTML = winResult;
    return;
  }

  // Toggle current player
  data.turn = (data.turn === 'O') ? 'X' : 'O';

  // Update UI with new player's turn
  dom.playerTurn.innerHTML = `${data.turn}'s turn`;
};

export default playerTurnHandler;
