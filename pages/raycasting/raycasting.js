let walls = [];
let particles = [];
let ray;
let particle;

function setup() {
    canvas = createCanvas(1200, 800);
    canvas.parent('raycasting-canvas');

    document.getElementById('walls').addEventListener('click', function() {
        setWalls();
    });

    setWalls();
    particle = new Particle();
}

function draw() {
    background(0);

    for (let i = 0; i < walls.length - 4; i++) {
        walls[i].show();
    }
    for (let part of particles) {
        part.show();
        part.look(walls);
    }

    particle.update(mouseX, mouseY);
    particle.show();
    particle.look(walls);
}

function mouseClicked() {
    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) {
        return;
    }

    let part = new Particle();
    part.update(mouseX, mouseY);
    particles.push(part);
}

function setWalls() {
    walls = [];
    particles = [];
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2);
    }
    for (let i = 0; i < 2; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, y1, x2, y2, true);
    }
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));
}