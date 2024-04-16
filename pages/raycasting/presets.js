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