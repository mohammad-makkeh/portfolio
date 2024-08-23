"use client";
import { useEffect, useRef } from "react";
import HexagonGrid from "../HexagonGrid";

export default function HexagonalBackground() {
    const glowRef = useRef<any>();
    const containerRef = useRef<any>();

    useEffect(() => {
        function handleMouseMove(e: any) {
            const bcr = containerRef.current.getBoundingClientRect();
            glowRef.current.style.top = e.clientY - bcr.top + "px";
            glowRef.current.style.left = e.clientX - bcr.left + "px";
        }

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <div
                className="fixed z-50 -top-[60px] -left-[60px] overflow-hidden bg-white/0"
                ref={containerRef}
            >
                <div
                    className="fixed -z-10 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(#fff6 10%, transparent 70%)",
                    }}
                    ref={glowRef}
                />
                <HexagonGrid rows={11} cols={30}/>
            </div>
        </>
    );
}
