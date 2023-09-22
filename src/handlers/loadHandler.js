import dom from '../dom.js';
import createBoard from '../components/createBoard.js';

const loadHandler = () => {
    const domEl = createBoard();
    dom.board.append(domEl );
};

export default loadHandler;
