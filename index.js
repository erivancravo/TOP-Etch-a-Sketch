const defaultSize = 16;
const defaultColor = 'darkblue';

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorChange(i, j, color) {
  const block = document.getElementById('block-' + i + '-' + j);
  block.style.backgroundColor = color;
}  

function rainbowPaintOver() {
  const blocks = document.getElementsByClassName('block');
  for(let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    block.addEventListener('mouseover', function() {
      block.style.backgroundColor = getRandomColor();
    })
  }
}

function paintOver(color) {
  const blocks = document.getElementsByClassName('block');
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    block.addEventListener('mouseover', function() {
      block.style.backgroundColor = color;
    });
  }
}

function removeBlocks() {
  const container = document.querySelector('div#container');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function size(num, color) {
  const container = document.getElementById('container');
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridAutoRows = `repeat(${num}, 1fr)`;
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      const newDiv = document.createElement('div');
      newDiv.className = 'block';
      newDiv.id = 'block-' + i + '-' + j;
      newDiv.addEventListener('mouseover', function (){
        colorChange(i, j, color);
      });
      container.appendChild(newDiv);
    }  
  }
}

//=======================================================================
size(defaultSize, defaultColor);

const button = window.document.querySelector('button#enter');
button.addEventListener('click', function() {
  const number = window.document.querySelector('input#number').value;
  removeBlocks();
  size(number, defaultColor);
})

const eraser = document.querySelector('button#eraser');
eraser.addEventListener('click', function() {
  paintOver('white');
})

const paint = document.querySelector('button#paint');
paint.addEventListener('click', function() {
  paintOver('darkblue');
})

const rainbow = window.document.querySelector('button#rainbow');
rainbow.addEventListener('click', function() {
  rainbowPaintOver();
})