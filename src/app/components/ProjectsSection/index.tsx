import { Point } from "@/types";
import localFont from "next/font/local";
import { useEffect, useRef } from "react";

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
const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 140;

export default function ProjectsSection() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const c = canvas.getContext("2d");
        if (!c) return;
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;
        drawLetter(c, 27, 23, LETTER_P_POSITIONS);
        drawLetter(c, 96, 23, LETTER_R_POSITIONS);
        drawLetter(c, 166, 23, LETTER_O_POSITIONS);
        drawLetter(c, 236, 23, LETTER_J_POSITIONS);
        drawLetter(c, 306, 23, LETTER_E_POSITIONS);
        drawLetter(c, 376, 23, LETTER_C_POSITIONS);
        drawLetter(c, 446, 23, LETTER_T_POSITIONS);
        drawLetter(c, 516, 23, LETTER_S_POSITIONS);
    }, []);

    return (
        <div
            className={
                "pb-96 relative inline-padding py-10 text-center " + hexa.variable
            }
        >
            <h2 className="opacity-0 absolute top-0 left-1/2 -translate-x-1/2 font-hexa text-[140px] tracking-tighter">
                PROJECTS
            </h2>
            <canvas className="bg-transparent mx-auto" ref={canvasRef}></canvas>
            
        </div>
    );
}

function drawHex(c: CanvasRenderingContext2D, x: number, y: number) {
    const angleStep = (Math.PI * 2) / 6; // Angle between each vertex
    c.beginPath();
    for (let i = 0; i < 6; i++) {
        const angle = angleStep * i;
        const vertexX = x + (HEXA_CELL_WIDTH / 2) * Math.cos(angle);
        const vertexY = y + (HEXA_CELL_WIDTH / 2) * Math.sin(angle);
        if (i === 0) {
            c.moveTo(vertexX, vertexY);
        } else {
            c.lineTo(vertexX, vertexY);
        }
    }
    c.closePath();
    const amIinTheMoodToRender = Math.random() > 0.5;
    c.fillStyle = amIinTheMoodToRender ? "#3bb1e3" : "#9f51f3";
    c.fill();
    c.strokeStyle = "black"; // Optional: Add an outline
    c.stroke();
}


function movePointToRight(startingX: number, times: number = 1) {
    return startingX + (HEXA_CELL_WIDTH + HEXA_SPACING) * times;
}
function movePointDown(startingY: number, times: number = 1) {
    return startingY + (HEXA_CELL_HEIGHT / 2 + HEXA_SPACING) * times;
}

function drawLetter(
    c: CanvasRenderingContext2D,
    startingX: number,
    startingY: number,
    positions: Array<Array<0 | 1>>
) {
    for (let row = 0; row < positions.length; row++) {
        for (let col = 0; col < positions[row].length; col++) {
            const cell = positions[row][col];
            if (cell === 1) {
                drawHex(
                    c,
                    movePointToRight(startingX, col),
                    movePointDown(startingY, row)
                );
            }
        }
    }
}

const LETTER_P_POSITIONS:Array<Array<0 | 1>> = [
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
const LETTER_R_POSITIONS:Array<Array<0 | 1>> = [
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
const LETTER_O_POSITIONS:Array<Array<0 | 1>> = [
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
const LETTER_J_POSITIONS:Array<Array<0 | 1>> = [
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
const LETTER_E_POSITIONS:Array<Array<0 | 1>> = [
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
const LETTER_C_POSITIONS:Array<Array<0 | 1>> = [
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
const LETTER_T_POSITIONS:Array<Array<0 | 1>> = [
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
const LETTER_S_POSITIONS:Array<Array<0 | 1>> = [
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 0, 1, ],
  [1, 0, 0, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
];