import loadHandler from '../handlers/loadHandler.js';

const loadListener = () => {
    window.addEventListener('load', loadHandler);
};

export default loadListener;
