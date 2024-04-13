class Circle {
    constructor(radius, period, phase = 0){
        // 2*sin(3*x + pi) = Circle(2, 3, 1)
        this.radius = radius * 75;
        this.period = period;
        this.phase = -phase * Math.PI / 180;
    }
}

function addCircle(radius, period, phase){
    circles.push(new Circle(radius, period, phase));
}

function setup(){
    canvas = createCanvas(1600, 600);
    canvas.parent('fourier-canvas');

    document.getElementById('add').addEventListener('click', function() {
        let radius = parseFloat(document.getElementById('radius').value);
        let period = parseFloat(document.getElementById('period').value);
        let phase = parseFloat(document.getElementById('phase').value);
        addCircle(radius, period, phase);
    });

    document.getElementById('remove').addEventListener('click', function() {
        if (circles.length > 0) {
            circles.pop();
        }
    });
}

let time = 0;
let wave = [];

circles = [];

addCircle(2, 3, 90);
addCircle(1, 5, 0);

function draw(){
    background(48);
    translate(300, 300);

    let x = 0;
    let y = 0;

    for (let i = 0; i < circles.length; i++) {
        circle = circles[i];
        let radius = circle.radius;
        let period = circle.period;
        let phase = circle.phase;
        let prevx = x;
        let prevy = y;

        x += radius * cos(period * time + phase);
        y += radius * sin(period * time + phase);

        stroke(255);
        noFill();
        ellipse(prevx, prevy, radius * 2);

        fill(255);
        line(prevx, prevy, x, y);
        ellipse(x, y, 8);
    }
    wave.unshift(y);
    translate(250, 0);
    line(x - 250, y, 0, wave[0]);
    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i])
    }
    endShape();

    time -= 0.01;

    if (wave.length > width - 550) {
        wave.pop();
    }
}