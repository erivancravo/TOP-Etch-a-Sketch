function colorChange(i, j) {
  const block = document.getElementById('block-' + i + '-' + j);
  block.style.backgroundColor = 'darkblue';
} 

function removeBlocks() {
  const container = document.querySelector('div#container');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function size(num) {
  const container = document.getElementById('container');
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridAutoRows = `repeat(${num}, 1fr)`;
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      const newDiv = document.createElement('div');
      newDiv.className = 'block';
      newDiv.id = 'block-' + i + '-' + j;
      newDiv.addEventListener('mouseover', function (){
        colorChange(i, j);
      });
      container.appendChild(newDiv);
    }  
  }
}

size(16);

const button = window.document.querySelector('button#btn');
button.addEventListener('click', function() {
  const number = window.document.querySelector('input#number').value;
  removeBlocks();
  size(number);
})