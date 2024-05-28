let caster;
let walls;

let rotateLeft = false;
let rotateRight = false;

function setup() {
    canvas = createCanvas(1200, 800);
    canvas.parent('p5-canvas');

    caster = new Caster(width, height);
    setWalls();
}

function draw() {
    background(0);

    for (let i = 0; i < walls.length; i++) {
        walls[i].show();
    }

    caster.show(walls);

    if (rotateRight) {
        caster.angle += 0.01;
    }
    if (rotateLeft) {
        caster.angle -= 0.01;
    }
}

function setWalls() {
    walls = [];
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    // walls.push(new Boundary(0, 0, width, 0));
    // walls.push(new Boundary(width, 0, width, height));
    // walls.push(new Boundary(width, height, 0, height));
    // walls.push(new Boundary(0, height, 0, 0));
}

function mouseClicked() {
    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
        return;
    }

    caster.update(mouseX, mouseY);
}

function keyPressed() {
    // d or right arrow
    if (key === 'd' || keyCode === RIGHT_ARROW) {
        rotateRight = true;
    } else if (key === 'a' || keyCode === LEFT_ARROW) {
        rotateLeft = true;
    }
}

function keyReleased() {
    if (key === 'd' || keyCode === RIGHT_ARROW) {
        rotateRight = false;
    } else if (key === 'a' || keyCode === LEFT_ARROW) {
        rotateLeft = false;
    }
}