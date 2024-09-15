"use client";

import React, { useState, useEffect, useRef } from "react";

interface PixelsWordEffectProps {
    word?: string;
    fontSize?: number;
    pixelSize?: number;
}

export default function PixelsWordEffect({
    word = "Pixels",
    fontSize = 66,
    pixelSize = 5,
}: PixelsWordEffectProps) {
    const FLICKER_INTERVAL = 100; // ms

    const [pixels, setPixels] = useState<boolean[]>([]);
    const textRef = useRef<SVGTextElement>(null);
    const [textDimensions, setTextDimensions] = useState({
        width: 0,
        height: 0,
    });
    const [gridSize, setGridSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (textRef.current) {
            const bbox = textRef.current.getBBox();
            const width = Math.ceil(bbox.width);
            const height = Math.ceil(bbox.height);
            setTextDimensions({ width, height });

            const gridWidth = Math.ceil(width / pixelSize);
            const gridHeight = Math.ceil(height / pixelSize);
            setGridSize({ width: gridWidth, height: gridHeight });

            setPixels(Array(gridWidth * gridHeight).fill(false));
        }
    }, [word, fontSize, pixelSize]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPixels((prevPixels) =>
                prevPixels.map(() => Math.random() > 0.5)
            );
        }, FLICKER_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <span
            className="inline-block align-middle overflow-hidden mb-4"
            style={{ height: `${fontSize}px`, verticalAlign: "middle" }}
        >
            <svg
                width={textDimensions.width}
                height={textDimensions.height}
                className="inline-block"
                style={{ overflow: "visible" }}
            >
                <defs>
                    <mask id={`text-mask-${word}`}>
                        <rect width="100%" height="100%" fill="#08020e" />
                        <text
                            ref={textRef}
                            x="50%"
                            y="50%"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize={`${fontSize}px`}
                            fontWeight="bold"
                            fill="white"
                        >
                            {word}
                        </text>
                    </mask>
                </defs>
                <g mask={`url(#text-mask-${word})`}>
                    {pixels.map((isOn, index) => {
                        const x = (index % gridSize.width) * pixelSize;
                        const y =
                            Math.floor(index / gridSize.width) * pixelSize;
                        return (
                            <rect
                                key={index}
                                x={x}
                                y={y}
                                width={pixelSize}
                                height={pixelSize}
                                fill={isOn ? "currentColor" : "transparent"}
                            />
                        );
                    })}
                </g>
            </svg>
        </span>
    );
}
