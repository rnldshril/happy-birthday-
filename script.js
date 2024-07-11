let currentLayer = 1;

function nextLayer() {
    const currentElement = document.querySelector(`.layer${currentLayer}`);
    currentElement.style.display = 'none';
    
    currentLayer++;
    const nextElement = document.querySelector(`.layer${currentLayer}`);
    if (nextElement) {
        nextElement.style.display = 'flex';
    }
}