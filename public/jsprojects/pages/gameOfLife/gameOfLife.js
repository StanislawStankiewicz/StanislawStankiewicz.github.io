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
let cols;
let rows;
let resolution = 20;

let speed = 500;
let pause = false;

function setup() {
  canvas = createCanvas(1200, 800);
  canvas.parent('game-of-life-canvas');

  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = random([0, 1]);
    }
  }

  let intervalId = setInterval(updateGrid, speed);

  document.getElementById('pause-button').addEventListener('click', function() {
    pause = !pause;
  });

  document.getElementById('clear-button').addEventListener('click', function() {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = 0;
      }
    }
  });

  let slider = document.getElementById('speed-slider');
  let speedDisplay = document.getElementById('speed-display');

  slider.addEventListener('input', function() {
    let minp = 10;
    let maxp = 5000;

    // The result should be between 10 an 5000
    let minv = Math.log(minp);
    let maxv = Math.log(maxp);

    // calculate adjustment factor
    let scale = (maxv-minv) / (100-1);

    let value = Math.exp(minv + scale*(slider.value-1));

    speedDisplay.textContent = Math.round(value) + ' ms';
    speed = Math.round(value);
    clearInterval(intervalId);
    intervalId = setInterval(updateGrid, speed);
  });
}

function draw() {
  background(0);

  // draw frame
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;

      if (grid[i][j] === 1) {
        fill(255);
        rect(x, y, resolution, resolution);
      }
    }
  }
}

function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;

      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function updateGrid() {
  if (pause) {
    return;
  }

  let next = make2DArray(cols, rows);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      
      let neighbors = countNeighbors(grid, i, j);
      
      if (state === 0 && neighbors === 3) {
        next[i][j] = 1;
      } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }
    }
  }

  grid = next;
}

function mouseClicked() {
  let mouseCol = floor(mouseX / resolution);
  let mouseRow = floor(mouseY / resolution);

  let cell = grid[mouseCol][mouseRow];
  grid[mouseCol][mouseRow] = cell === 0 ? 1 : 0;
}