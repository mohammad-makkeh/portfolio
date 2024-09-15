import React, { useEffect, useRef } from "react";
import Particle from "./Particle";

const Roots: React.FC<{ height?: number }> = ({ height = 2000 }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const clickedRef = useRef<boolean>(false);
    const mouseRef = useRef<{ x: number | null; y: number | null; r: number }>({
        x: null,
        y: null,
        r: 30,
    });
    const particlesRef = useRef<Particle[]>([]);
    let c: CanvasRenderingContext2D | null = null;

    useEffect(() => {
        if (canvasRef.current) {
            c = canvasRef.current.getContext("2d");
            if (c) {
                initCanvas();
                setupEventListeners();
                setupCanvasStyle();
            }
        }

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'p') {
                console.log(particlesRef.current);
            }
        };

        window.addEventListener('keypress', handleKeyPress);

        return () => {
            // Cleanup event listeners
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener('keypress', handleKeyPress);
        };
    }, []);

    const initCanvas = () => {
        if (canvasRef.current && c) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = height;
        }
    };

    const handleResize = () => {
        if (canvasRef.current && c) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
        }
    };

    const setupEventListeners = () => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mousemove", handleMouseMove);
    };

    const setupCanvasStyle = () => {
        if (c) {
            c.fillStyle = "#0a0";
            c.strokeStyle = "#000";
            c.lineWidth = 1.5;
        }
    };

    const handleMouseDown = (e: MouseEvent) => {
        clickedRef.current = true;
        // generateRoots(5);
    };

    const handleMouseUp = () => {
        clickedRef.current = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY - rect.top;
            // console.log(e.clientY, rect.top)
        }
        // if (clickedRef.current) {
        generateRoots(2);
        // }
    };

    const between = (min = 0, max = 1) => {
        return Math.random() * (max - min) + min;
    };

    const randomSign = () => {
        return Math.random() - 0.5 < 0 ? -1 : 1;
    };

    const generateRoots = (n: number) => {
        if (!c) return;
        for (let i = 0; i < n; i++) {
            let r = between(15, 25);
            let v = {
                x: between(-2, 2),
                y: between(-2, 2) * randomSign(),
                r: between(-0.2, -0.9),
                angle: between(0.08, 0.5),
            };
            const colors = ['#1E90FF', '#8A2BE2', '#FF1493']; // vibrant blue, purple, red pink
            let clr = colors[Math.floor(Math.random() * colors.length)];
            let particle = new Particle(mouseRef.current.x || 0, mouseRef.current.y || 0, r, v, clr);
            particlesRef.current.push(particle);
            particle.update(c);
        }
    };

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -10,
                background: "transparent",
                opacity: 0.1,
                width: "100%",
                height: height,
            }}
        />
    );
};

export default Roots;
