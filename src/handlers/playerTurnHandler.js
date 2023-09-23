import dom from '../dom.js';
import data from '../data.js';
import selectWinner from '../utils/selectWinner.js';

const playerTurnHandler = (e) => {
    const cellEl = e.target;
    const id = cellEl.id;

    // Check if the cell is already marked or if the game has ended
    if (cellEl.innerText || dom.turnInfo.innerHTML === `${data.turn} won!`) {
        return;
    }

    cellEl.classList.add(data.turn);
    cellEl.innerHTML = data.turn;

    // Update the game board with the player's move
    data.playBoard[id] = data.turn;

    // Check for a winner using the checkWinner utility function
    const winResult = selectWinner(
        document.querySelectorAll(`.${data.turn}`),
        data.winCombinations,
        data.turn,
        data.playBoard,
    );

    // If there's a winner or it's a draw, update the turn information
    if (winResult !== null) {
        dom.turnInfo.innerHTML = winResult;
        return;
    }

    // Switch the turn to the other player (X to O or vice versa)
    data.turn === 'X' ? (data.turn = 'O') : (data.turn = 'X');

    // Update the turn information
    dom.turnInfo.innerHTML = data.turn + "'s turn";
};

export default playerTurnHandler;
