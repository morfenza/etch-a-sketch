function createDivs(limit) {

  let column_div = '';
  let row_div = '';

  for (let i = 1; i <= limit; i++){
    column_div = document.createElement("div");
    column_div.classList.add('column-div');
    mainContainer.appendChild(column_div);

    for (let j = 1; j <= limit; j++) {
      row_div = document.createElement("div");
      row_div.classList.add('row-div');
      column_div.appendChild(row_div);
    }
  }
}

function checkInput() { 
  while (true) {
    let numOfDivs = prompt("Enter the grid size! (Min: 16 | Max: 64)", 16);
    if (numOfDivs >= 16 && numOfDivs <= 64) {
      return numOfDivs;
    }
  }
}

function changeSize(type) {
  clearBoard()
  createDivs(size);
  attachListener(type);  
}

function clearBoard() {
  while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.lastChild);
  }
}

function changeColor(color) {

  switch (color) {
    case 'black':
      changeSize('black')
      break;

    case 'rainbow':
      changeSize('rainbow')
      break;

    case 'picker':
      changeSize('picker')
      break;
  }
}

function attachListener(type) {

  switch (type) {

    case 'black':
      document.querySelectorAll('.row-div').forEach( div => {
        div.addEventListener('mouseover', () => div.classList.toggle('change-color'));
      });
      break;
      
    case 'rainbow':
      document.querySelectorAll('.row-div').forEach( div => {
        div.addEventListener('mouseover', () => {
          div.classList.toggle('change-color')
          div.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        });
      });
      break;

    case 'picker':
      document.querySelectorAll('.row-div').forEach( div => {
        div.addEventListener('mouseover', () => {
          div.classList.toggle('change-color');
          div.style.backgroundColor = colorPicker.value;
        });
      });
      break;

  }
  
}

function initiateBoard() {
  createDivs(size); 
  attachListener('black');
}

const mainContainer = document.querySelector('.main-container');

const resetBtn = document.querySelector('.reset-btn');
const sizeBtn = document.querySelector('.size-btn')
const blackBtn = document.querySelector('.black-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const colorPicker = document.querySelector('.color-picker');

let size = 24;
let currentType = 'black';

initiateBoard()

resetBtn.addEventListener('click', () => {
  changeSize(currentType)
});

sizeBtn.addEventListener('click', () => {
  size = checkInput();
  currentType = 'black';
  changeSize(currentType)
});

blackBtn.addEventListener('click', () => {
  currentType = 'black';
  changeColor(currentType, size);
});

rainbowBtn.addEventListener('click', () => {
  currentType = 'rainbow';
  changeColor(currentType, size);
});

colorPicker.addEventListener('input', () => {
  currentType = 'picker';
  changeColor(currentType, size);
});