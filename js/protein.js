//object and function related to Proteins

class Protein {

    constructor(x, y, r, c) {
        this.pos = createVector(x, y);
        this.vel = createVector(random(-1, 1), random(-1, 1))
        if (x != undefined) {
            this.x = x;
        }
        if (y != undefined) {
            this.y = y;
        }
        if (c != undefined) {
            this.c = c;
        }

        if (r != undefined) {
            this.r = r;
        }
    }
    update() {
        this.pos.x = this.pos.x + this.vel.x;
        this.pos.y = this.pos.y + this.vel.y;
    }

    render() {
        fill(this.c);
        circle(this.pos.x, this.pos.y, this.r);
    }
}
