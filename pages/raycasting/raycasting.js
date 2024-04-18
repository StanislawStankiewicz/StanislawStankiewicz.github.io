let walls = [];
let particles = [];
let ray;
let particle;

let a = 1/30;
let p = 0;
let q = 0;
let cut = 800;

function setup() {
    canvas = createCanvas(1200, 800);
    canvas.parent('raycasting-canvas');

    document.getElementById('set').addEventListener('click', function() {
        let preset = document.getElementById('preset').value;
        particles = [];
        if (preset === 'Parabola') {
            walls = Parabola.getWalls(a, p, q, cut);
            addBorders();
            return;
        }
        walls = Random.getWalls();
        addBorders();
    });

    document.getElementById('a-slider').addEventListener('input', function() {
        let minp = 0.01;
        let maxp = 1.01;
    
        let minv = Math.log(minp);
        let maxv = Math.log(maxp);
    
        // calculate adjustment factor
        let scale = (maxv-minv) / (100-1);
    
        a = Math.exp(minv + scale*(this.value-1));
        if (document.getElementById('preset').value !== 'Parabola') {
            return;
        }
        walls = Parabola.getWalls(a, p, q, cut);
        addBorders();
    });
    
    document.getElementById('p-slider').addEventListener('input', function() {
        p = parseFloat(this.value);
        if (document.getElementById('preset').value !== 'Parabola') {
            return;
        }
        walls = Parabola.getWalls(a, p, q, cut);
        addBorders();
    });
    
    document.getElementById('q-slider').addEventListener('input', function() {
        q = parseFloat(this.value);
        if (document.getElementById('preset').value !== 'Parabola') {
            return;
        }
        walls = Parabola.getWalls(a, p, q, cut);
        addBorders();
    });

    document.getElementById('cut-slider').addEventListener('input', function() {
        cut = parseFloat(this.value);
        if (document.getElementById('preset').value !== 'Parabola') {
            return;
        }
        walls = Parabola.getWalls(a, p, q, cut);
        addBorders();
    });

    let presets = {
        "Random": Random,
        "Parabola": Parabola,
    };
    
    let presetSelect = document.getElementById('preset');
    for (let presetName in presets) {
        let option = document.createElement('option');
        option.value = presetName;
        option.text = presetName;
        presetSelect.add(option);
    }

    // setWalls();
    walls = Random.getWalls();
    addBorders();

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

function addBorders() {
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));
}

function buttonPressed() {
    if (key === 'r') {
        particles = [];
    }
}