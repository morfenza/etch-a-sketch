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
    let numOfDivs = prompt("Enter the grid size! (Min: 16 | Max: 64)", 4);
    if (numOfDivs >= 16 && numOfDivs <= 64) {
      return numOfDivs;
    }
  }
}

function resetBoard() {
  document.querySelectorAll('.row-div').forEach( div => {
    div.classList.remove('change-color');
  }); 
}

function changeSize() {

  let size = checkInput()

  clearBoard()
  createDivs(size);
  
  document.querySelectorAll('.row-div').forEach( div => {
    div.addEventListener('mouseover', () => div.classList.toggle('change-color'));
  }); 
}

function clearBoard() {
  while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.lastChild);
  }
}

function initiateBoard() {

  createDivs(24);

  document.querySelectorAll('.row-div').forEach( div => {
    div.addEventListener('mouseover', () => div.classList.toggle('change-color'));
  });  
}

const mainContainer = document.querySelector('.main-container');
const resetBtn = document.querySelector('.reset-btn');
const sizeBtn = document.querySelector('.size-btn')

initiateBoard()

resetBtn.addEventListener('click', resetBoard);
sizeBtn.addEventListener('click', changeSize);
