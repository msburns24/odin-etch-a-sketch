/* 
To-Do
 - Create button at top to resize grid: #px per side, same total space as before. max 100.
  - Use "Prompt"
*/

// Define global variables
let gridSquares = [];
const sideLength = 480; //px, was 500
const gridContainer = document.querySelector('.grid-container');

// Define functions
function colorSquare(e) {
  e.target.style['background-color'] = 'black';
  console.log('check');
}

function resetGrid() {
  // Prompt for new grid
  let newSize = parseInt(prompt('Grid size:'));

  // Destroy old grid
  gridSquares.forEach((gs) => {
    // gs.style['background-color'] = 'white';
    gridContainer.removeChild(gs);
  });
  gridSquares = [];

  // Create new grid
  setupGrid(newSize);
}

// Make button reset grid
resetButton = document.querySelector('button#reset-grid');
resetButton.addEventListener('click', resetGrid);

// Setup grid function
function setupGrid(squares) {
  let sideSquares = squares;
  let squareSize = sideLength / sideSquares;
  let totalSquares = sideSquares**2;

  gridContainer.style['height'] = sideLength + 'px';
  gridContainer.style['width'] = sideLength + 'px';


  let gridSquareI;
  for (let i = 0; i < totalSquares; i++) {
    gridSquareI = document.createElement('div');

    // Add styling
    gridSquareI.classList.add('grid-square');
    gridSquareI.style['height'] = squareSize + 'px';
    gridSquareI.style['width'] = squareSize + 'px';
    gridSquareI.style['line-height'] = squareSize + 'px';
    
    // Add functions
    gridSquareI.addEventListener('mouseover', colorSquare);

    gridContainer.appendChild(gridSquareI);
    gridSquares.push(gridSquareI);
  }
}

setupGrid(16);