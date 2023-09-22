import dom from '../dom.js';
import clearBoardHandler from '../handlers/clearBoardHandler.js';

const resetListener = () => {
    dom.resetBtn.addEventListener('click', clearBoardHandler);
};

export default resetListener;
