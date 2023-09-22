import playerTurnHandler from '../handlers/playerTurnHandler.js';

const createBoard = () => {
    // Create the container for cells
    const cellContainer = document.createElement('div');
    cellContainer.className = 'cellContainer';

    // Create and append cells
     let num = 0;
    for (let i = 0; i <9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = num;
        cellContainer.append(cell);

        // Attach the click event handler to each cell
        cell.addEventListener('click', (e) => { playerTurnHandler(e);
    });
    
          num += 1;
    }
    return cellContainer;
};

export default createBoard;

