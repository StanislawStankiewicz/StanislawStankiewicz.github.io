class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.rays = [];
        this.heading = 0;
        this.fov = 120;
        for (let a = -this.fov/2; a < this.fov/2; a++) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    rotate(angle) {
        this.heading += angle;
        let index = 0;
        for (let a = -this.fov/2; a < this.fov/2; a++) {
            this.rays[index].setAngle(radians(a) + this.heading);
            index++;
        }
    }

    move(amt) {
        const vel = p5.Vector.fromAngle(this.heading);
        vel.setMag(amt);
        this.pos.add(vel);
    }

    moveSideways(amt) {
        const vel = p5.Vector.fromAngle(this.heading + HALF_PI);
        vel.setMag(amt);
        this.pos.add(vel);
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
        let scene = [];
        for (let i = 0; i < this.rays.length; i++) {
            const ray = this.rays[i];
            let record = ray.cast(walls, this.heading);
            scene[i] = record;
        }
        return scene;
    }

    calculateReflectedAngle(A, B, dir) {
        let angle = atan2(B.y - A.y, B.x - A.x);
        let normal = createVector(-sin(angle), cos(angle));
        let d = p5.Vector.dot(dir, normal);
        let reflected = p5.Vector.sub(dir, p5.Vector.mult(normal, 2 * d));
        return reflected.heading();
    }
}