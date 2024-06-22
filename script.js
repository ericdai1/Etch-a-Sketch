// Global pre-defined constants and variables
const BORDER_WIDTH = 32;
const BUTTON_HEIGHT = 80;

let gridWidth = window.innerWidth;
let gridHeight = window.innerHeight;
let gridDimensions = 16;

const body = document.querySelector('body');

// Adds a button that prompts the user to enter the # of squares they want for each side of the new grid
function setUpNewGridButton() {
  let newGridButton = document.createElement('button');
  newGridButton.textContent = 'Create New Grid';
  body.appendChild(newGridButton);

  newGridButton.addEventListener('click', () => {
    try {
      gridDimensions = prompt('Enter the # of squares would you like on each side of the new Grid:');

      if (gridDimensions == null || isNaN(gridDimensions) || gridDimensions > 100 || gridDimensions < 1) {
        throw new Error("Not a valid number, or dimensions are too large.");
      }
      
      resetGrid();
      createGrid();
    }
    catch (error) {
      alert('Invalid input. Please enter a valid number.')
    }
  })
}

function setUpContainer() {  
  let gridContainer = document.createElement('div');
  gridContainer.id = 'container';
  body.appendChild(gridContainer);
}

// Empty out the grid due to a new one being requested, and set the correct dimensions for each grid box
function resetGrid() {
  const gridContainer = document.querySelector('#container');

  while (gridContainer.firstChild) {
    gridContainer.removeChild(container.firstChild);
  }
}

function createGrid() {
  const gridContainer = document.querySelector('#container');

  for (let i = 0; i < gridDimensions; i++) {
    for (let j = 0; j < gridDimensions; j++) {
      addBox(gridContainer);
    }
  }

  setGridSize();
}

// Main function to add a certain sized div into the grid
function addBox(gridContainer) {
  try {
    let newDiv = document.createElement('div');
    newDiv.classList.add('grid-box');
  
    gridContainer.appendChild(newDiv);  
  }
  catch (err) {
    alert(`Original grid not created, error: ${err}`);
  }
}

function setGridSize() {
  const gridBoxes = document.querySelectorAll('.grid-box');

  gridWidth = window.innerWidth;
  gridHeight = window.innerHeight;
  
  gridBoxes.forEach((gridBox) => {
    gridBox.style.width = `${(gridWidth - BORDER_WIDTH) / gridDimensions}px`;

    gridBox.style.height = `${(gridHeight - BUTTON_HEIGHT) / gridDimensions}px`;
  });
}

// Main meat of the project comes from the following three functions, with inner helper functions in the correct order.
setUpNewGridButton();
setUpContainer();
createGrid();

// Handle hover event for each box of the 16x16 grid
const gridBoxes = document.querySelectorAll('.grid-box');
gridBoxes.forEach((gridBox) => {
  gridBox.addEventListener('mouseenter', () => {
    gridBox.classList.add('hover');
  });

  gridBox.addEventListener('mouseleave', () => {
    gridBox.classList.remove('hover');
  });
})