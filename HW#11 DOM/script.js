const randomColor = function () {
    const color = Math.floor(Math.random() * 256);
    return color;
}

function generateBlocks () {
    for (let i = 1; i <= 25; i++) {
        const box = document.querySelector('.box-one'); 
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        box.append(square);
    }
}
const butOne = document.getElementById('but1');
butOne.onclick = generateBlocks;




function generateBlocksInterval () {
    for (let i = 1; i <= 25; i++) {
        const box = document.querySelector('.box-two');
        const square = document.createElement('div');
        square.classList.add('square');
        setInterval(() => {
           square.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`
        }, 1000);
        box.append(square);
     }
}

const butTwo = document.getElementById('but2');
but2.onclick = generateBlocksInterval;