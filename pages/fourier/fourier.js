class Circle {
    constructor(radius, period, phase = 0){
        // 2*sin(3*x + pi) = Circle(2, 3, 1)
        this.radius = radius * 75;
        this.period = period;
        this.phase = phase * Math.PI;
    }
    toString(){
        let radius = this.radius / 75;
        let period = this.period;
        let phase = this.phase / Math.PI;
        let str = '';
        if (radius == -1) {
            str += '-';
        } else if (radius != 1) {
            str += radius;
        }
        let strPeriod;
        if (period == 1) {
            strPeriod = '';
        } else if (period == -1) {
            strPeriod = '-';
        } else {
            strPeriod = period;
        }

        str += 'sin(' + strPeriod + 'x';
        if (phase != 0) {
            let sign = phase < 0 ? '-' : '+';
            let strPhase = Math.abs(phase) == 1 ? '' : Math.abs(phase);
            str += ' ' + sign + ' ' + strPhase + 'π';
        }
        str += ')';
        return str;
    }
}

function setFunctionTitle(){
    let title = 'f(x) = ';
    if (circles.length == 0) {
        title += '0';
    }
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        if (i === selected) {
            title += `<span style="color: rgb(173, 216, 230);">${circle.toString()}</span>`;
            console.log(circle.toString());
        } else {
            title += circle.toString();
        }
        if (i != circles.length - 1) {
            title += ' + ';
        }
    }
    document.getElementById('functionTitle').innerHTML = title;
}

function addCircle(radius, period, phase){
    circles.push(new Circle(radius, period, phase));
}

function removeCircle(selected){
    circles.splice(selected, 1);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked(){
    let selectionSize = windowHeight / 10;
    let x = mouseX;
    let y = mouseY;
    
    let row = Math.floor(y / selectionSize);
    let col = Math.floor(x / selectionSize);

    let index = col * 10 + row;
    if (index >= circles.length) {
        return;
    }
    selected = index;
    let circle = circles[selected];
    document.getElementById('radius').value = circle.radius / 75;
    document.getElementById('period').value = circle.period;
    document.getElementById('phase').value = -circle.phase / Math.PI;
    setFunctionTitle();
}

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    setFunctionTitle();

    document.getElementById('add').addEventListener('click', function() {
        let radius = parseFloat(document.getElementById('radius').value);
        let period = parseFloat(document.getElementById('period').value);
        let phase = parseFloat(document.getElementById('phase').value);
        if (isNaN(radius) || isNaN(period) || isNaN(phase)) {
            return;
        }
        addCircle(radius, period, phase);
        selected = circles.length - 1;
        setFunctionTitle();
    });

    document.getElementById('edit').addEventListener('click', function() {
        if (circles.length > 0) {
            let radius = parseFloat(document.getElementById('radius').value);
            let period = parseFloat(document.getElementById('period').value);
            let phase = parseFloat(document.getElementById('phase').value);
            
            if (isNaN(radius) || isNaN(period) || isNaN(phase)) {
                return;
            }
            circles[selected] = new Circle(radius, period, phase);
        }
        setFunctionTitle();
    });

    document.getElementById('remove').addEventListener('click', function() {
        if (circles.length > 0) {
            removeCircle(selected);
            selected = circles.length - 1;
        }
        setFunctionTitle();
    });
}

let selected = 0;
let time = 0;
let wave = [];

circles = [];

addCircle(2, 3, 0.5);
addCircle(1, 5, 0);
addCircle(-1, -1, -1);

function draw(){
    background(48);
    // selection menu
    let selectionSize = windowHeight / 10;
    for (let i = 0; i < circles.length; i++) {
        circle = circles[i];

        let col = selectionSize * Math.floor(i / 10);
        let row = selectionSize * (i % 10);

        let period = circle.period;
        let phase = circle.phase;
        let radius = selectionSize * 0.3;
        if (i == selected) {
            stroke(173, 216, 230);
            strokeWeight(2);
        }
        square(col, row, selectionSize);
        ellipse(selectionSize / 2 + col, selectionSize / 2 + row, radius * 2);

        let x = selectionSize / 2 + radius * cos(period * time + phase);
        let y = selectionSize / 2 + radius * sin(period * time + phase);

        stroke(255);
        
        strokeWeight(1);
        line(selectionSize / 2 + col, selectionSize / 2 + row, x + col, y + row);
        fill(255);
        ellipse(x + col, y + row, selectionSize * 0.04);
        noFill();
    }

    // circles
    translate(500, 300);

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
        if (i == selected) {
            stroke(173, 216, 230);
            strokeWeight(2);
        }
        noFill();
        ellipse(prevx, prevy, radius * 2);

        fill(255);
        strokeWeight(1);
        stroke(255);
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

    if (wave.length > windowWidth - 750) {
        wave.pop();
    }
}