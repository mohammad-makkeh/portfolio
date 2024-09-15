"use client";
import { cn } from "@/lib/utils";
import AboutMeSection from "./components/AboutMeSection";
import { Hero } from "./components/Hero";
import HexagonalBackground from "./components/HexagonalBackground";
import ProjectsSection from "./components/ProjectsSection";
import useSmoothCursor from "@/hooks/useSmoothCursor";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SmoothScrolling from "./components/SmoothScrollProvider";
import IconCloud from "@/components/magicui/icon-cloud";

export default function Home() {
    const { hexaCursorRef, mainCursorRef, isHoveringInteractive } =
        useSmoothCursor();

    return (
        <SmoothScrolling>
            <main className={"min-h-screen relative z-50"}>
                <div
                    className={cn(
                        "pointer-events-none fixed select-none z-[9999] text-white opacity-30 transition-transform duration-500",
                        isHoveringInteractive && "scale-[4]"
                    )}
                    style={{ textShadow: "0 0 20px white" }}
                    ref={hexaCursorRef}
                >
                    &#x2B22;
                </div>
                <div
                    className="pointer-events-none fixed select-none z-[9999] text-white"
                    style={{ textShadow: "0 0 20px white" }}
                    ref={mainCursorRef}
                >
                    &#x2B22;
                </div>
                <HexagonalBackground />
                <Hero />
                <AboutMeSection />
                <ExperienceTimeline />
                <ProjectsSection />
                {/* <IconCloud
                    iconSlugs={[
                        "typescript",
                        "javascript",
                        "react",
                        "html5",
                        "css3",
                        "nodedotjs",
                        "express",
                        "nextdotjs",
                        "prisma",
                        "postgresql",
                        "firebase",
                        "vercel",
                        "testinglibrary",
                        "jest",
                        "cypress",
                        "docker",
                        "git",
                        "jira",
                        "github",
                        "visualstudiocode",
                        "figma",
                    ]}
                /> */}
            </main>
        </SmoothScrolling>
    );
}
