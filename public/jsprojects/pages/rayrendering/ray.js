class Ray {
    constructor(pos, angle) {
        this.pos = pos;
        this.dir = p5.Vector.fromAngle(angle);
    }

    show() {
        stroke(255);
        push();
        translate(this.pos.x, this.pos.y);
        line(0, 0, this.dir.x * 10, this.dir.y * 10);
        pop();
    }

    lookAt(x, y) {
        this.dir.x = x - this.pos.x;
        this.dir.y = y - this.pos.y;
        this.dir.normalize();
    }

    setAngle(angle) {
        this.dir = p5.Vector.fromAngle(angle);
    }

    cast(walls, heading, depth = 0) {
        let closest = null;
        let closestWall = null;
        let record = Infinity;
        for (let wall of walls) {
            const pt = this.look(wall);
            if (pt) {
                let d = p5.Vector.dist(this.pos, pt);
                if (d < record) {
                    record = d;
                    closest = pt;
                    closestWall = wall;
                }
            }
        }
        const a = this.dir.heading() - heading;
        record *= cos(a);
        if (closest) {
            stroke(255, 100);
            line(this.pos.x, this.pos.y, closest.x, closest.y);
            if (closestWall.isMirror) { // Limit recursion depth
                let wallDir = p5.Vector.sub(closestWall.b, closestWall.a);
                wallDir.normalize();
            
                let normal = createVector(-wallDir.y, wallDir.x); // Perpendicular to wall
            
                // Flip normal to always be facing the incoming ray
                let dot = p5.Vector.dot(this.dir, normal);
                if (dot > 0) {
                    normal.mult(-1);
                }
            
                let d = p5.Vector.dot(this.dir, normal);
                let reflected = p5.Vector.sub(this.dir, p5.Vector.mult(normal, 2 * d));
            
                // Add a small offset to the starting position of the reflected ray
                let offset = p5.Vector.mult(reflected, 0.01);
                let start = p5.Vector.add(closest, offset);
            
                let reflectedRay = new Ray(start, reflected.heading());
                return record + reflectedRay.cast(walls, reflected.heading(), depth + 1); // Increment depth
            }
        }
        return record;
    }

    look(wall) {
        let x1 = wall.a.x;
        let y1 = wall.a.y;
        let x2 = wall.b.x;
        let y2 = wall.b.y;

        let x3 = this.pos.x;
        let y3 = this.pos.y;
        let x4 = this.pos.x + this.dir.x;
        let y4 = this.pos.y + this.dir.y;

        let den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (den === 0) {
            return;
        }

        let t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        let u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;

        if (t >= 0 && t <= 1 && u >= 0) {
            let pt = createVector();
            pt.x = x1 + t * (x2 - x1);
            pt.y = y1 + t * (y2 - y1);
            return pt;
        } else {
            return;
        }
    }
}