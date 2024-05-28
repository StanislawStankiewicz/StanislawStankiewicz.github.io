class Boundary {
    constructor(x1, y1, x2, y2, isMirror = false) {
        this.a = createVector(x1, y1);
        this.b = createVector(x2, y2);
        this.isMirror = isMirror;
    }

    show() {
        stroke(255);
        if (this.isMirror) {
            stroke(57,172,231);
        }
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
}