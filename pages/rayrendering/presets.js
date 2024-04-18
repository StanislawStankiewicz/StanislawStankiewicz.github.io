class Random {
    static getWalls() {
        let walls = [];
        let numWalls = 5;
        let numMirrors = 2;
        
        for (let i = 0; i < numWalls; i++) {
            let x1 = random(sceneW);
            let x2 = random(sceneW);
            let y1 = random(sceneH);
            let y2 = random(sceneH);
            walls[i] = new Boundary(x1, y1, x2, y2);
        }
        for (let i = numWalls; i < numWalls + numMirrors; i++) {
            let x1 = random(sceneW);
            let x2 = random(sceneW);
            let y1 = random(sceneH);
            let y2 = random(sceneH);
            walls[i] = new Boundary(x1, y1, x2, y2, true);
        }
        return walls;
    }
}dw