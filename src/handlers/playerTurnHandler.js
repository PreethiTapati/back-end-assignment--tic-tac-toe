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
   
  markCell(cellEl);
  updateGameBoard(id);
  const winResult = checkForWinner();

  if (winResult !== null) {
    displayWinner(winResult);
    return;
  }

  togglePlayer();
  updatePlayerTurn();
};
   // Mark the cell with the current player's mark
const markCell = (cellEl) => {
  cellEl.classList.add(data.turn);
  cellEl.innerHTML = data.turn;
};

   // Update internal game board data
const updateGameBoard = (id) => {
  data.playBoard[id] = data.turn;
};
   
   // Check for winner or draw
const checkForWinner = () => {
  return selectWinner(
    document.querySelectorAll(`.${data.turn}`),
    data.winCombinations,
    data.turn,
    data.playBoard
  );
};

const displayWinner = (winResult) => {
  dom.playerTurn.innerHTML = winResult;
};

  // Toggle current player
const togglePlayer = () => {
  data.turn = (data.turn === 'O') ? 'X' : 'O';
};

 // Update UI with new player's turn
const updatePlayerTurn = () => {
  dom.playerTurn.innerHTML = `${data.turn}, now its your turn`;
};

export default playerTurnHandler;
