class Caster {
    constructor(width, height) {
        this.pos = createVector(width / 2, height / 2);
        this.angle = radians(-34);
        this.width = width;
        this.height = height;
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    show(walls, maxMarchSteps = 30) {
        let currPoint = this.pos;
        let nextPoint;
        for (let _ = 0; _ < maxMarchSteps; _++) {
            let dist = Infinity;
            for (let wall of walls) {
                const x1 = wall.a.x, y1 = wall.a.y;
                const x2 = wall.b.x, y2 = wall.b.y;
                const px = currPoint.x, py = currPoint.y;

                let estimate = this.distanceEstimator(x1, y1, x2, y2, px, py);
                if (estimate < dist) {
                    dist = estimate;
                }
            }
            fill(255, 255, 255, 20);
            ellipse(currPoint.x, currPoint.y, 2 * dist);
            nextPoint = createVector(currPoint.x + dist * cos(this.angle), currPoint.y + dist * sin(this.angle));
            line(currPoint.x, currPoint.y, nextPoint.x, nextPoint.y);
            currPoint = nextPoint;
            if (nextPoint.x < 0 || nextPoint.x > this.width || nextPoint.y < 0 || nextPoint.y > this.height) {
                break;
            }
        }
    }
    distanceEstimator(x1, y1, x2, y2, px, py) {
        const lineLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
        // Calculate the components of the vector from (x1, y1) to the point (px, py)
        const vx = px - x1;
        const vy = py - y1;
    
        // Calculate the unit vector of the line segment
        const unitX = (x2 - x1) / lineLength;
        const unitY = (y2 - y1) / lineLength;
    
        // Calculate the dot product of the vector (vx, vy) and the unit vector of the line segment
        const dotProduct = vx * unitX + vy * unitY;
    
        // If the dot product is negative, the closest point is outside the line segment before (x1, y1)
        if (dotProduct < 0) {
            return Math.sqrt((px - x1) ** 2 + (py - y1) ** 2);
        }
    
        // If the dot product is greater than the line length, the closest point is outside the line segment after (x2, y2)
        if (dotProduct > lineLength) {
            return Math.sqrt((px - x2) ** 2 + (py - y2) ** 2);
        }
    
        // Calculate the distance from the point (px, py) to the line
        const perpendicularDist = Math.abs((x2 - x1) * (y1 - py) - (x1 - px) * (y2 - y1)) / lineLength;
        return perpendicularDist;
    }    
}