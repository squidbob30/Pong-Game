var akagi;
var grid;

// Gets called before game is loaded. 
// Use it to load images & other resources
var preload = function() {

    grid = new Grid(10, 10);
    akagi = new Akagi(grid, 0, 0);
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

    // Draw the grid first, then the akagi on top of it
  
    grid.drawGrid();
    background (0, 0, 0);
    akagi.draw();

}

function keyTyped() {
    if (key === 'w') {
        akagi.moveUp()
    }
    if (key === 's') {
        akagi.moveDown()
    }
    if (key === 'a') {
        akagi.moveLeft()
    }
    if (key === 'd') {
        akagi.moveRight();
    }
}