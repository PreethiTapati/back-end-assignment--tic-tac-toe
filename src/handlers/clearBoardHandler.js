import dom from '../dom.js';
import data from '../data.js';

const clearBoard = () => {
    // Clear all cells
    const cellElements = document.querySelectorAll('.cell');
    cellElements.forEach((cellEl) => {
        cellEl.innerHTML = '';
        cellEl.classList = 'cell';
    });

    // Reset data and player turn 
    data.board = Array(9).fill('');
    data.turn = 'X';
    dom.playerTurn.innerHTML = "X's turn";
};

export default clearBoard;
