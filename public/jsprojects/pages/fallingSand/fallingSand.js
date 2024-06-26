function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}

let grid;
let w = 5;
let cols, rows;

let hueValue = 1;

function withinCols(i) {
  return i >= 0 && i <= cols - 1;
}

function withinRows(j) {
  return j >= 0 && j <= rows - 1;
}

function setup() {
  canvas = createCanvas(1200, 800);
  canvas.id('sand-canvas');
  canvas.parent('sand-canvas');
  colorMode(HSB, 360, 255, 255);
  cols = width / w;
  rows = height / w;
  grid = make2DArray(cols, rows)
}

function draw() {
  background(0);

  if (mouseIsPressed) {
    let mouseCol = floor(mouseX / w);
    let mouseRow = floor(mouseY / w);

    if (keyIsDown(SHIFT)) {
      eraseGrid(mouseCol, mouseRow);
    } else {
      brushGrid(mouseCol, mouseRow);

      hueValue += 0.2;
      if (hueValue > 360) {
        hueValue = 1;
      }
    }
  }
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      noStroke();
      if (grid[i][j] > 0) {
        fill(grid[i][j], 255, 255);

        let x = i * w;
        let y = j * w;
        square(x, y, w);
      }
    }
  }
  
  let nextGrid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      if (state === 0) {
        continue;
      }
        
      let dir = random([1, -1]);
      
      let belowA, belowB;
      
      if (i + dir >= 0 && i + dir <= cols - 1) {
        belowA = grid[i + dir][j + 1];
      }
      if (i - dir >= 0 && i - dir <= cols - 1) {
        belowB = grid[i - dir][j + 1];
      }
      
      let below = grid[i][j + 1];
      
      if (below === 0) {
        nextGrid[i][j] = 0;
        nextGrid[i][j + 1] = state;
      } else if (belowA === 0) {
        nextGrid[i + dir][j + 1] = state;
      } else if (belowB === 0) {
        nextGrid[i - dir][j + 1] = state;
      } else {
        nextGrid[i][j] = state;
      }
    }
  }
  
  grid = nextGrid;
}

function mouseClicked() {
  
}

function brushGrid(mouseCol, mouseRow) {
  let brushSize = 5;
  let extend = floor(brushSize/2);

  for (let i = -extend; i <= extend; i++) {
    for (let j = -extend; j <= extend; j++) {
      if (random(1) < 0.2) {
        let col = mouseCol + i;
        let row = mouseRow + j;
        if (withinCols(col) && withinRows(row) && grid[col][row] === 0) {
          grid[col][row] = hueValue;
        }
      }
    }
  }
}
function eraseGrid(mouseCol, mouseRow) {
  let brushSize = 5;
  let extend = floor(brushSize/2);

  for (let i = -extend; i <= extend; i++) {
    for (let j = -extend; j <= extend; j++) {
      if (random(1) < 0.2) {
        let col = mouseCol + i;
        let row = mouseRow + j;
        if (withinCols(col) && withinRows(row)) {
          grid[col][row] = 0;
        }
      }
    }
  }
}
// function mouseReleased() {
//   let col = floor(mouseX / w);
//   let row = floor(mouseY / w);
  
//   if (withinCols(col) && withinRows(row)) {
//     grid[col][row] = hueValue;
//   }
// }