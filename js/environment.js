//this file contains every object appartaining to the environment the cell will interact whith
class Particle {

    constructor(x, y, r, c) {
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

    render() {
        fill(this.c);
        circle(this.x, this.y, this.r);
    }
}

function newParticle(n){
    if(n > 8){
        return true;
    }
    return false;
}