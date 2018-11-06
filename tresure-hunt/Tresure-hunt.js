var mythraSIPP;
var grid;

// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    mythraSIPP = new MythraSIPP(grid, 0, 0);
}

// Before the draw function ever gets called, setup gets called
//   After resources are loaded, sets up the game
var setup = function() {

    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
}

//  Gets called over and over again as the
// game draws new frames
var draw = function() {

    // Draw the grid first, then the mythraSIPP on top of it
    grid.drawGrid();
    mythraSIPP.draw();
}

function keyTyped() {
    if (key === 'w') {
        mythraSIPP.moveUp()
    }
    if (key === 's') {
        mythraSIPP.moveDown()
    }
    if (key === 'a') {
        mythraSIPP.moveLeft()
    }
    if (key === 'd') {
        mythraSIPP.moveRight();
    }
}