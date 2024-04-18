let walls = [];
let particles = [];
let ray;
let particle;

const sceneW = 800;
const sceneH = 800;
let sliderFOV;

function setup() {
    canvas = createCanvas(1600, 800);
    canvas.parent('p5-canvas');

    // setWalls();
    walls = Random.getWalls();
    addBorders();

    particle = new Particle();
    particle.update(sceneW / 2, sceneH / 2);
}

function draw() {
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
        particle.rotate(-0.01);
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
        particle.rotate(0.01);
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
        particle.move(1);
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
        particle.move(-1);
    }
    // q to move sideways to left, e to move sideways to right
    if (keyIsDown(81)) {
        particle.moveSideways(-1);
    }
    if (keyIsDown(69)) {
        particle.moveSideways(1);
    }

    background(0);

    for (let i = 0; i < walls.length; i++) {
        walls[i].show();
    }
    for (let part of particles) {
        part.show();
        part.look(walls);
    }

    // particle.update(mouseX, mouseY);
    particle.show();
    const scene = particle.look(walls);
    const w = sceneW / scene.length;

    push();
    translate(sceneW, 0);

    for (let i = 0; i < scene.length; i++) {
        noStroke();
        const sq = scene[i] * scene[i];
        const wSq = sceneW * sceneW;
        const b = map(Math.log(sq + 1) / Math.log(1.1), 0, Math.log(wSq + 1) / Math.log(1.1), 255, 0);
        const h = map(Math.log(scene[i] + 1), 0, Math.log(sceneW + 1), sceneH, 0);
        fill(b);
        rectMode(CENTER);
        rect(i * w + w / 2, sceneH / 2, w + 1, h);
    }
    pop();
}

function addBorders() {
    walls.push(new Boundary(0, 0, sceneW, 0, false));
    walls.push(new Boundary(sceneW, 0, sceneW, sceneH, false));
    walls.push(new Boundary(sceneW, sceneH, 0, sceneH, false));
    walls.push(new Boundary(0, sceneH, 0, 0, false));
}
