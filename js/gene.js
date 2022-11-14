
class Gene {

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