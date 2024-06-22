const GRID_SIZE = 16;

function setUpContainer() {
  const body = document.querySelector('body');
  
  let gridContainer = document.createElement('div');
  gridContainer.id = 'container';

  body.appendChild(gridContainer);
}

// Main function to add a div into the html body
function createGrid() {
  try {
    const gridContainer = document.querySelector('#container');

    let newDiv = document.createElement('div');
    newDiv.classList.add('grid');
  
    gridContainer.appendChild(newDiv);  
  }
  catch (err) {
    console.log(`Original grid not created, error: ${err}`);
  }
}

setUpContainer();

// Call the createGrid function 16 x 16 times
for (let i = 0; i < GRID_SIZE; i++) {
  for (let j = 0; j < GRID_SIZE; j++) {
    createGrid();
  }
}

// Handle hover event for each box of the 16x16 grid
const gridBoxes = document.querySelectorAll('.grid');
gridBoxes.forEach((gridBox) => {
  gridBox.addEventListener('mouseenter', () => {
    gridBox.classList.add('hover');
  });

  gridBox.addEventListener('mouseleave', () => {
    gridBox.classList.remove('hover');
  });
})