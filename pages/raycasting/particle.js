class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        for (let a = 0; a < 360; a += 1) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 0);
        for (let ray of this.rays) {
            ray.show();
        }
    }

    look(walls) {
        for (let ray of this.rays) {
            ray.cast(walls);
        }
    }

    calculateReflectedAngle(A, B, dir) {
        let angle = atan2(B.y - A.y, B.x - A.x);
        let normal = createVector(-sin(angle), cos(angle));
        let d = p5.Vector.dot(dir, normal);
        let reflected = p5.Vector.sub(dir, p5.Vector.mult(normal, 2 * d));
        return reflected.heading();
    }
}