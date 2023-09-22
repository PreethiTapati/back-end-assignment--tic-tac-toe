const data = {
    // Current player's turn
    turn: 'O',

    // Represents the play board
    playBoard: ['', '', '', '', '', '', '', '', ''],
    // playBoard: {},

    // Possible winning probability
winCombinations: [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ],
};
export default data;
