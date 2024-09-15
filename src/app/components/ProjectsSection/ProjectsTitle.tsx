import localFont from "next/font/local";
import { useEffect, useRef, useState, useCallback } from "react";

const hexa = localFont({
    src: [
        {
            //   path: '../../../../public/fonts/d3-concretism-font/D3ConcretismTypeb-0WAo.ttf',
            //   path: '../../../../public/fonts/he-xk-ey-font/HexkeySolid-yw32d.otf',
            path: "../../../../public/fonts/honeycomb-happiness-font/HoneycombHappiness-ywnRm.ttf",
            //   path: '../../../../public/fonts/mysterons-brk/mysteron.ttf',
            //   path: '../../../../public/fonts/hippopotamus-apocalypse-font/HippopotamusApocalypse-Gzly.ttf',
            //   path: '../../../../public/fonts/hexgon-font/Hexgon-2xwv.otf',
            weight: "400",
        },
    ],
    variable: "--font-hexa",
});

const HEXA_GRID_ROWS = 8;
const HEXA_GRID_COLS = 5 * 8 + 7;
const HEXA_CELL_WIDTH = 14;
const HEXA_CELL_HEIGHT = 17.2;
const HEXA_SPACING = -1.6;
const CANVAS_WIDTH = 600 * 2.5;
const CANVAS_HEIGHT = 140 * 2.5;

export default function ProjectsTitle() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationFrameRef = useRef(0);
    const hexesRef = useRef<Array<Hex>>([]);
    const [mouseOnCanvas, setMouseOnCanvas] = useState(false);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!canvasRef.current || !ctxRef.current || !mouseOnCanvas) return;
            const rect = canvasRef.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            ctxRef.current.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            hexesRef.current.forEach((hex) => {
                hex.update(mouseX, mouseY);
                hex.draw(ctxRef.current!);
            });
        },
        [mouseOnCanvas, ctxRef]
    );

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const c = canvas.getContext("2d");
        ctxRef.current = c;
        if (!c) return;
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        function generateHexes() {
            const startingX = CANVAS_WIDTH / 2 - 300;
            const letterGap = 70;
            generateLetter(startingX, 130, LETTER_P_POSITIONS);
            generateLetter(startingX + letterGap * 1, 130, LETTER_R_POSITIONS);
            generateLetter(startingX + letterGap * 2, 130, LETTER_O_POSITIONS);
            generateLetter(startingX + letterGap * 3, 130, LETTER_J_POSITIONS);
            generateLetter(startingX + letterGap * 4, 130, LETTER_E_POSITIONS);
            generateLetter(startingX + letterGap * 5, 130, LETTER_C_POSITIONS);
            generateLetter(startingX + letterGap * 6, 130, LETTER_T_POSITIONS);
            generateLetter(startingX + letterGap * 7, 130, LETTER_S_POSITIONS);
        }

        function generateHex(x: number, y: number) {
            hexesRef.current.push(new Hex(x, y));
        }

        function movePointToRight(startingX: number, times: number = 1) {
            return startingX + (HEXA_CELL_WIDTH + HEXA_SPACING) * times;
        }

        function movePointDown(startingY: number, times: number = 1) {
            return startingY + (HEXA_CELL_HEIGHT / 2 + HEXA_SPACING) * times;
        }

        function generateLetter(
            startingX: number,
            startingY: number,
            positions: Array<Array<0 | 1>>
        ) {
            for (let row = 0; row < positions.length; row++) {
                for (let col = 0; col < positions[row].length; col++) {
                    const cell = positions[row][col];
                    if (cell === 1) {
                        generateHex(
                            movePointToRight(startingX, col),
                            movePointDown(startingY, row)
                        );
                    }
                }
            }
        }

        function handleMouseLeave() {
            if (!c) return;
            cancelAnimationFrame(animationFrameRef.current);
            setMouseOnCanvas(false);
            function animate() {
                if (!c) return;
                let allInPosition = true;
                c.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
                hexesRef.current.forEach((hex) => {
                    if (!hex.isInOriginalPosition()) {
                        hex.moveTowardsOriginalPosition();
                        allInPosition = false;
                    }
                    hex.draw(c);
                });

                if (!allInPosition) {
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            }

            animate();
        }

        function handleMouseEnter() {
            cancelAnimationFrame(animationFrameRef.current);
            setMouseOnCanvas(true);
        }

        generateHexes();
        hexesRef.current.forEach((hex) => {
            hex.draw(c);
        });

        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            cancelAnimationFrame(animationFrameRef.current);
            canvas.removeEventListener("mouseleave", handleMouseLeave);
            canvas.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    useEffect(() => {
        canvasRef.current?.addEventListener("mousemove", handleMouseMove);
        const c = canvasRef.current;
        return () => {
            c?.removeEventListener("mousemove", handleMouseMove);
        };
    }, [handleMouseMove]);

    return (
        <canvas
            className="bg-transparent mx-auto overflow-visible"
            ref={canvasRef}
        ></canvas>
    );
}

const LETTER_P_POSITIONS: Array<Array<0 | 1>> = [
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
];
const LETTER_R_POSITIONS: Array<Array<0 | 1>> = [
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
];
const LETTER_O_POSITIONS: Array<Array<0 | 1>> = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
];
const LETTER_J_POSITIONS: Array<Array<0 | 1>> = [
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
];
const LETTER_E_POSITIONS: Array<Array<0 | 1>> = [
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
];
const LETTER_C_POSITIONS: Array<Array<0 | 1>> = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
];
const LETTER_T_POSITIONS: Array<Array<0 | 1>> = [
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
];
const LETTER_S_POSITIONS: Array<Array<0 | 1>> = [
    [0, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
];

class Hex {
    x: number;
    y: number;
    originalX: number;
    originalY: number;
    color: string;
    velocity: number;
    size: number;
    originalSize: number;
    hasShadow: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originalX = x;
        this.originalY = y;
        this.color = Math.random() > 0.5 ? "#af1bcb" : "#8332ff";
        this.velocity = 1.8;
        this.originalSize = 6.5;
        this.size = this.originalSize;
        this.hasShadow = false;
    }

    generateRandomColor() {
        this.color = Math.random() > 0.5 ? "#af1bcb" : "#8332ff";
    }

    draw(c: CanvasRenderingContext2D) {
        const angleStep = (Math.PI * 2) / 6;
        c.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = angleStep * i;
            const vertexX = this.x + this.size * Math.cos(angle);
            const vertexY = this.y + this.size * Math.sin(angle);
            if (i === 0) {
                c.moveTo(vertexX, vertexY);
            } else {
                c.lineTo(vertexX, vertexY);
            }
        }
        c.closePath();
        c.fillStyle = this.color;
        c.strokeStyle = "black";
        c.lineWidth = 0.5;
        if (this.hasShadow) {
            c.shadowColor = "rgba(255, 255, 255, 0.8)";
            c.shadowBlur = 10;
        }
        c.fill();
        c.stroke();
        if (this.hasShadow) {
            c.shadowColor = "rgba(0, 0, 0, 0)";
            c.shadowBlur = 0;
        }
    }

    isInOriginalPosition() {
        return this.x === this.originalX && this.y === this.originalY;
    }

    moveTowardsOriginalPosition() {
        const dx = this.originalX - this.x;
        const dy = this.originalY - this.y;
        const distanceFromOrigin = Math.sqrt(dx ** 2 + dy ** 2);
        this.size = this.originalSize;
        if (distanceFromOrigin < 5) {
            this.generateRandomColor();
            this.hasShadow = false;
        }
        if (distanceFromOrigin > 1) {
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * this.velocity;
            this.y += Math.sin(angle) * this.velocity;
        } else {
            this.x = this.originalX;
            this.y = this.originalY;
            this.generateRandomColor();
            this.hasShadow = false;
        }
    }

    update(mouseX: number, mouseY: number) {
        const distance = Math.sqrt(
            (this.x - mouseX) ** 2 + (this.y - mouseY) ** 2
        );

        if (distance < 70) {
            const maxDistance = Math.sqrt(
                CANVAS_WIDTH ** 2 + CANVAS_HEIGHT ** 2
            );
            const scaleFactor = 1 + (distance / maxDistance) * 9;
            this.size = this.originalSize * scaleFactor;

            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const angle = Math.atan2(dy, dx);
            this.x += Math.cos(angle) * this.velocity;
            this.y += Math.sin(angle) * this.velocity;
            this.color = "white";
            this.hasShadow = true;
        } else {
            if (this.x !== this.originalX || this.y !== this.originalY) {
                this.moveTowardsOriginalPosition();
            }
        }
    }
}
