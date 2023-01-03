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
    };
  };
};

function checkInput() { 
  while (true) {
    let numOfDivs = prompt("Enter the grid size! (Min: 4 | Max: 100)", 4);
    if (numOfDivs >= 4 && numOfDivs <= 50) {
      return numOfDivs;
    };
  };
}

const mainContainer = document.querySelector('.main-container');

createDivs(checkInput());


