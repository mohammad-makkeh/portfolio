"use client";
import { useEffect, useRef, useState } from "react";
import HexagonGrid from "../HexagonGrid";
import { Point } from "framer-motion";
import { CellContent } from "@/types";
import DeformingLetter from "../DeformingLetter";

export default function HexagonalBackground() {
    const [effectsEnabled, setEffectsEnabled] = useState(false);

    const mainGlowRef = useRef<any>();
    const containerRef = useRef<any>();
    const glowsContainerRef = useRef<any>();
    // const audioRef = useRef<HTMLAudioElement | null>(null);
    const pivotPointRef = useRef<Point>();

    const GLOW_SIZE = 200;
    const THRESHOLD_TO_ADD_NEW_GLOW = GLOW_SIZE / 2;

    // useEffect(() => {
    //     audioRef.current = new Audio("/popp.mp3");
    //     audioRef.current.volume = 1;
    // }, [])
    
    useEffect(() => {
        function handleMouseMove(e: any) {
            setTimeout(() => {
                if (pivotPointRef.current) {
                    const newMousePosition: Point = {
                        x: e.clientX - GLOW_SIZE / 6,
                        y: e.clientY + window.scrollY - GLOW_SIZE / 6,
                    };

                    const distance = getDistanceBetweenTwoPoints(
                        pivotPointRef.current,
                        newMousePosition
                    );

                    if (distance >= THRESHOLD_TO_ADD_NEW_GLOW) {
                        const newGlow = document.createElement("div");
                        newGlow.className =
                            "absolute duration-1000 transition-opacity -z-10 rounded-full";
                        newGlow.style.width = GLOW_SIZE + "px";
                        newGlow.style.height = GLOW_SIZE + "px";
                        newGlow.style.top = pivotPointRef.current.y + "px";
                        newGlow.style.left = pivotPointRef.current.x + "px";
                        newGlow.style.background =
                            "linear-gradient(125deg, aqua 30%, deeppink 60%)";
                        newGlow.style.mask =
                            "radial-gradient(circle at 50% 50%, #0009 10%, transparent 70%)";
                        glowsContainerRef.current.append(newGlow);
                        // if (audioRef.current) {
                        //     audioRef.current.currentTime = 0;
                        //     audioRef.current?.play();
                        // }

                        setTimeout(() => {
                            newGlow.style.opacity = "0";
                        }, 200);
                        setTimeout(() => {
                            newGlow.remove();
                        }, 1200);

                        // reset the pivot
                        pivotPointRef.current = {
                            x: e.clientX - GLOW_SIZE / 6,
                            y: e.clientY + window.scrollY - GLOW_SIZE / 6,
                        };
                    }
                }

                if (!pivotPointRef.current) {
                    pivotPointRef.current = {
                        x: e.clientX - GLOW_SIZE / 6,
                        y: e.clientY + window.scrollY - GLOW_SIZE / 6,
                    };
                }
            }, 200);
        }
        if (effectsEnabled)
            document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [effectsEnabled, THRESHOLD_TO_ADD_NEW_GLOW]);

    return (
        <>
            <div
                className="absolute max-h-[105vh] overflow-hidden z-50 -top-[60px] -left-[60px] select-none"
                ref={containerRef}
                onMouseEnter={() => setEffectsEnabled(true)}
                onMouseLeave={() => setEffectsEnabled(false)}
            >
                <div ref={glowsContainerRef}>
                    <div
                        className="absolute hidden -z-10 rounded-full animate-glow !origin-center"
                        style={{
                            width: GLOW_SIZE + "px",
                            height: GLOW_SIZE + "px",
                            background:
                                "linear-gradient(125deg, aqua 30%, deeppink 60%)",
                            mask: "radial-gradient(circle at 50% 50%, #0005 10%, transparent 70%)",
                        }}
                        ref={mainGlowRef}
                    />
                </div>

                <HexagonGrid
                    rows={getHexagonRows()}
                    cols={getHexagonCols()}
                    cellContents={getCellContents()}
                />
            </div>
        </>
    );
}

function getDistanceBetweenTwoPoints(a: Point, b: Point): number {
    return Math.hypot(b.x - a.x, b.y - a.y);
}

function getHexagonCols() {
    if(typeof window === 'undefined') return 0;
    return Math.ceil(window.innerWidth / 104 + 1);
}

function getHexagonRows() {
    if(typeof window === 'undefined') return 0;
    return Math.ceil(window.innerHeight / (60 + 30) + 1);
}

function getCenterRow() {
    const centerRow = Math.ceil(getHexagonRows() / 2);
    if (centerRow % 2 === 0) return centerRow - 1;
    return centerRow;
}
function getCenterCol() {
    return getCenterRow() % 2 === 0
        ? Math.ceil(getHexagonCols() / 2) - 1
        : Math.ceil(getHexagonCols() / 2);
}

function getCellContents(): CellContent[] {
    const centerRow = getCenterRow();
    const centerCol = getCenterCol();
    return [
        {
            cell: {
                row: centerRow - 1,
                col: centerCol - 5,
            },
            content: (
                <img className="w-14" src="/img/react.svg" alt="react logo" />
            ),
        },
        {
            cell: {
                row: centerRow,
                col: centerCol - 5,
            },
            content: (
                <img className="w-16" src="/img/next.svg" alt="react logo" />
            ),
        },
        {
            cell: {
                row: centerRow + 1,
                col: centerCol - 5,
            },
            content: (
                <img
                    className="w-14"
                    src="/img/tailwind.svg"
                    alt="react logo"
                />
            ),
        },
        {
            cell: {
                row: centerRow - 2,
                col: centerCol + 5,
            },
            content: (
                <img
                    className="w-12"
                    src="/img/typescript.svg"
                    alt="react logo"
                />
            ),
        },
        {
            cell: {
                row: centerRow - 1,
                col: centerCol + 5,
            },
            content: (
                <img className="w-12" src="/img/threejs.svg" alt="react logo" />
            ),
        },
        {
            cell: {
                row: centerRow,
                col: centerCol + 5,
            },
            content: (
                <img className="w-8" src="/img/figma.svg" alt="react logo" />
            ),
        },
        {
            cell: {
                row: centerRow + 2,
                col: centerCol + 2,
            },
            content: (
                <img
                    className="w-12"
                    src="/img/react-query.svg"
                    alt="react logo"
                />
            ),
        },
        {
            cell: {
                row: centerRow + 2,
                col: centerCol + 1,
            },
            content: (
                <img className="w-12" src="/img/nodejs.svg" alt="react logo" />
            ),
        },
        {
            cell: {
                row: centerRow,
                col: centerCol,
            },
            content: (
                <img
                    className="w-full -translate-y-[30px] z-10"
                    src="/img/logo.svg"
                    alt="react logo"
                />
            ),
        },
        {
            cell: {
                row: centerRow,
                col: centerCol - 4,
            },
            content: <DeformingLetter className="text-lg" letter="F" /> ,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow,
                col: centerCol - 3,
            },
            content: <DeformingLetter className="text-lg" letter="R" /> ,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow,
                col: centerCol - 2,
            },
            content: <DeformingLetter className="text-lg" letter="O" /> ,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow,
                col: centerCol - 1,
            },
            content: <DeformingLetter className="text-lg" letter="N" /> ,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow,
                col: centerCol + 1,
            },
            content: <DeformingLetter className="text-lg" letter="T" /> ,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow,
                col: centerCol + 2,
            },
            content: <DeformingLetter className="text-lg" letter="E" /> ,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow,
                col: centerCol + 3,
            },
            content: <DeformingLetter className="text-lg" letter="N" /> ,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow,
                col: centerCol + 4,
            },
            content: <DeformingLetter className="text-lg" letter="D" /> ,
            hideGlow: true,
        },
        // senior
        {
            cell: {
                row: centerRow - 1,
                col: centerCol - 3,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="S" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow - 1,
                col: centerCol - 2,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="E" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow - 1,
                col: centerCol - 1,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="N" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow - 1,
                col: centerCol - 0,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="I" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow - 1,
                col: centerCol + 1,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="O" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow - 1,
                col: centerCol + 2,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="R" />,
            hideGlow: true,
        },
        // engineer
        {
            cell: {
                row: centerRow + 1,
                col: centerCol - 4,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="E" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow + 1,
                col: centerCol - 3,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="N" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow + 1,
                col: centerCol - 2,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="G" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow + 1,
                col: centerCol - 1,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="I" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow + 1,
                col: centerCol - 0,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="N" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow + 1,
                col: centerCol + 1,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="E" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow + 1,
                col: centerCol + 2,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="E" />,
            hideGlow: true,
        },
        {
            cell: {
                row: centerRow + 1,
                col: centerCol + 3,
            },
            content: <DeformingLetter className="text-lg text-sky-400" letter="R" />,
            hideGlow: true,
        },
    ];
}
