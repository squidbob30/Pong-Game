var sketchProc = function (processingInstance) {
    with (processingInstance) {
        // Outside of Khan Academy, you can control the size of your sketch!
        size(400, 400);

        var Mole = function (x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        };
        Mole.prototype.containsPoint = function (pointX, pointY) {
            return false;
            //distance between center and mouse dist (x, y, x2, y2<radius)  in circle else false
        };
        Mole.prototype.draw = function () {
            fill(122, 91, 91);

            ellipse(this.x, this.y, this.radius * 2, this.radius * 2);

            fill(247, 247, 247);
            ellipse(this.x - this.radius / 3, this.y - this.radius / 3, this.radius / 5, this.radius / 2);
            ellipse(this.x + this.radius / 3, this.y - this.radius / 3, this.radius / 5, this.radius / 2);
        };
        var moles = [];

        var newMoleAtCenter = new Mole(200, 200, 100);
        moles.push(newMoleAtCenter);


        draw = function () {
            background(255, 255, 255);
            for (var i = 0; i < moles.length; i++) {
                var mole = moles[i];
                mole.draw();
            }
        };

        mouseClicked = function () {
            for (var i = moles.length - 1; i >= 0; i--) {
                moles.splice(i, 0);
            }
        };
    }
}       