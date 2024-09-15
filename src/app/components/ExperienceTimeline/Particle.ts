export default class Particle {
    x: number;
    y: number;
    r: number;
    v: { x: number; y: number; r: number; angle: number };
    clr: string;
    angle: number;

    constructor(
        x: number,
        y: number,
        r: number,
        v: { x: number; y: number; r: number; angle: number },
        clr: string
    ) {
        this.x = x + 6;
        this.y = y;
        this.r = r;
        this.v = v;
        this.clr = clr;
        this.angle = 0;
    }

    draw(c: CanvasRenderingContext2D) {
        if (c) {
            c.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const x = this.x + this.r * Math.cos(angle);
                const y = this.y + this.r * Math.sin(angle);
                if (i === 0) {
                    c.moveTo(x, y);
                } else {
                    c.lineTo(x, y);
                }
            }
            c.closePath();
            c.fillStyle = this.clr;
            c.fill();
            c.stroke();
        }
    }

    update(c: CanvasRenderingContext2D) {
        if (this.r > 1) {
            this.draw(c);
            this.angle += this.v.angle;
            this.x += this.v.x + Math.sin(this.angle);
            this.y += this.v.y + Math.sin(this.angle);
            this.r += this.v.r;
            requestAnimationFrame(this.update.bind(this, c));
        }
    }
}