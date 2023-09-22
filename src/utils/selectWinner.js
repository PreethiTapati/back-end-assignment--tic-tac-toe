const selectWinner = (cells, winCombinations, playerTurn, playBoard) => {
     const allTurns = cells;
    const turnsId = new Set(Array.from(allTurns).map((element) => element.id));

   for (const item of winCombinations) {
        let isWinner = true;
        for (const num of item) {
            if (!turnsId.has(`${num}`)) {
                isWinner = false;
                break;
            }
        }
        if (isWinner) {
            return `${playerTurn}, wins! Congratulations!   🥳`;
        }
    }

  const isDraw = playBoard.every((cell) => cell !== '');
  if (isDraw) {
    return 'oops! It\'s a Draw! 😅 ';
  }

  return null;
};

export default selectWinner;

