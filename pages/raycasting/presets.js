class ArtGallery {
    static getWalls() {
        walls = [];
        walls.push(new Boundary(1100, 500, 1100, 100));
        walls.push(new Boundary(1100, 100, 100, 100));
        walls.push(new Boundary(100, 100, 100, 500));
        walls.push(new Boundary(100, 500, 200, 700));
        walls.push(new Boundary(200, 700, 375, 500));
        walls.push(new Boundary(375, 500, 500, 700));
        walls.push(new Boundary(500, 700, 580, 500));
        walls.push(new Boundary(580, 500, 750, 500));
        walls.push(new Boundary(750, 500, 900, 700));
        walls.push(new Boundary(900, 700, 1100, 500));

        return walls;
    }
}

class Parabola {
    static getWalls(a = 1/30, p=0, q=0, cut = 800) {
        walls = [];
        if (cut === 800) {
            cut = Infinity;
        }
        
        let res = 10;
        for (let i = 0; i < 1200; i+=res) {
            let x1 = i;
            let y1 = parseFloat(((x1 - 600 - p) * a)**2) + parseFloat(q);
            let x2 = x1 + res;
            let y2 = parseFloat(((x2 - 600 - p) * a)**2) + parseFloat(q);
            if (y1 > cut || y2 > cut) {
                continue;
            }
            walls.push(new Boundary(x1, y1, x2, y2, true));
        }

        return walls;
    }
}

class Random {
    static getWalls() {
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
        return walls;
    }
}