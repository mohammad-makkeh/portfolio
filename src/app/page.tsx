"use client"
import { Hero } from "./components/Hero";
import HexagonalBackground from "./components/HexagonalBackground";
import ProjectsSection from "./components/ProjectsSection";
import useSmoothCursor from "@/hooks/useSmoothCursor";

export default function Home() {
    const {hexaCursorRef, mainCursorRef} = useSmoothCursor();

    return (
        <>
            <main className={"min-h-screen relative z-50 cursor-none"}>
                <div
                    className="fixed select-none z-[9999] text-white opacity-30"
                    style={{ textShadow: "0 0 20px white" }}
                    ref={hexaCursorRef}
                >
                    &#x2B22;
                </div>
                <div
                    className="fixed select-none z-[9999] text-white"
                    style={{ textShadow: "0 0 20px white" }}
                    ref={mainCursorRef}
                >
                    &#x2B22;
                </div>
                <HexagonalBackground />
                <Hero />
                <ProjectsSection />
            </main>
        </>
    );
}
