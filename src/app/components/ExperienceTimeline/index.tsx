"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import localFont from "next/font/local";
import Roots from "./Roots";
import Particle from "./Particle";
const hexaFont = localFont({
    src: [
        {
            path: "../../../../public/fonts/mysterons-brk/mysteron.ttf",
        },
    ],
    variable: "--font-hexa",
});
const timelineData: Array<{
    startYear: number;
    endYear: number | string;
    company: string;
    position: string;
    description: string[];
}> = [
    {
        startYear: 2024,
        endYear: "Present",
        company: "DOTCOM",
        position: "Senior Frontend Lead",
        description: [
            "Engineered an optimized React-based framework to develop OTT VOD TV apps for major MENA platforms on Samsung, LG, and Hisense TVs.",
            "Enhanced React performance on low-end devices, achieving a 90% performance boost.",
            "Reduced TV app development time by 60% through architectural improvements.",
            "Developed CLI tools and Node.js scripts to streamline the developer experience."
        ]
    },
    {
        startYear: 2022,
        endYear: 2024,
        company: "COGNATIVEX",
        position: "Next.js, React & JS SDK Developer",
        description: [
            "Maintained and extended a JavaScript SDK for tracking user events and embedding recommendation widgets on news publisher websites.",
            "Led the migration of a large React dashboard from class components and Redux to functional components with a modern tech stack.",
            "Developed and enhanced complex UI components in a high-scale dashboard.",
            "Improved the UI/UX of company products, making them 10× more intuitive.",
            "Owned and built a major new product, including the website, Next.js dashboard, and TypeScript SDK."
        ]
    },
    {
        startYear: 2021,
        endYear: 2022,
        company: "AGRICOM",
        position: "UI/UX and Data Visualization Designer",
        description: [
            "Designed a highly specialized dashboard for agrifood cooperatives and farmers.",
            "Conducted UX research and collaborated with users for feedback-driven design improvements.",
            "Mapped user journeys and constructed user flows to optimize usability.",
            "Created comprehensive product documents and reports for strategic alignment.",
            "Developed innovative UX components to enhance user experience and accessibility."
        ]
    }
];

export default function ExperienceTimeline() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const lineRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!lineRef.current || !containerRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const containerTop = containerRect.top;
            const containerHeight = containerRect.height;
            const viewportHeight = window.innerHeight;
            const rootScrollMargin = 300; // 100px margin

            const visibleHeight = Math.min(
                containerHeight,
                viewportHeight - 2 * rootScrollMargin
            );
            const scrollableHeight = containerHeight - visibleHeight;

            let scrollPosition = -(containerTop - rootScrollMargin);
            if (scrollPosition < 0) scrollPosition = 0;
            if (scrollPosition > scrollableHeight)
                scrollPosition = scrollableHeight;

            const percentage = (scrollPosition / scrollableHeight) * 100;
            setScrollPercentage(Math.min(Math.max(percentage, 0), 100));
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Call once to set initial position
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const hexFontSize = 35; // Base font size for hexagons
    const lineWidth = hexFontSize * 1.214; // Equivalent to 85px when hexFontSize is 70px
    const hexSpacing = hexFontSize * 0.628; // Equivalent to 44px when hexFontSize is 70px
    const hexOffsetY = hexFontSize * -0.571; // Equivalent to -40px when hexFontSize is 70px
    const hexOffsetXEven = hexFontSize * -0.114; // Equivalent to -8px when hexFontSize is 70px
    const hexOffsetXOdd = hexFontSize * -0.457; // Equivalent to -32px when hexFontSize is 70px
    const hexOffsetXThird = hexFontSize * 1.357; // Equivalent to 95px when hexFontSize is 70px

    const glowOptions: Array<{ color: "purple" | "red" | "lightblue", top?: string, left?: string, bottom?: string, right?: string }> = [
        { color: "purple", top: "-140px", left: "-120px" },
        { color: "red", bottom: "-110px", right: "-70px" },
        { color: "lightblue", bottom: "0px", right: "-20px" },
        { color: "purple", bottom: "-100px", left: "-30px" },
    ];

    return (
        <div className="relative py-56 select-none">
            <motion.h2
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                className="text-white text-6xl font-bold text-center mb-3"
            >
                Down to my roots
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                className="text-white text-center text-xl mb-20"
            >
                Move your mouse to draw cool roots
            </motion.p>
            <div
                ref={containerRef}
                className="flex-grow relative min-h-[2000px]"
            >
                <div
                    ref={lineRef}
                    className="absolute left-1/2 top-0 -translate-x-1/2 h-full overflow-hidden"
                    style={{
                        width: `${lineWidth}px`,
                    }}
                >
                    <span
                        className="absolute top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage: `linear-gradient(to bottom, 
                            #2b42ff ${scrollPercentage}%, 
                            #150f1b ${scrollPercentage}%)`,
                        }}
                    ></span>
                    {new Array(150).fill(0).map((_, i) => {
                        const isEven = i % 2 === 0;
                        const top = i * hexSpacing;
                        const offsetX = isEven ? hexOffsetXEven : hexOffsetXOdd;
                        return (
                            <>
                                <div
                                    className="absolute text-[#08020e]"
                                    key={`${i}-1`}
                                    style={{
                                        fontSize: `${hexFontSize}px`,
                                        top: `${top + hexOffsetY}px`,
                                        left: `${offsetX}px`,
                                    }}
                                >
                                    &#x2B22;
                                </div>
                                <div
                                    className="absolute text-[#08020e]"
                                    key={`${i}-2`}
                                    style={{
                                        fontSize: `${hexFontSize}px`,
                                        top: `${top + hexOffsetY}px`,
                                        left: `${
                                            offsetX + hexFontSize * 0.686
                                        }px`, // Equivalent to 48px when hexFontSize is 70px
                                    }}
                                >
                                    &#x2B22;
                                </div>
                                {!isEven && (
                                    <div
                                        className="absolute text-[#08020e]"
                                        key={`${i}-3`}
                                        style={{
                                            fontSize: `${hexFontSize}px`,
                                            top: `${top + hexOffsetY}px`,
                                            left: `${
                                                offsetX + hexOffsetXThird
                                            }px`,
                                        }}
                                    >
                                        &#x2B22;
                                    </div>
                                )}
                            </>
                        );
                    })}
                </div>
                {/* smoothers */}
                <div
                    className="absolute top-0 left-0 w-5 z-10 h-full bg-gradient-to-r from-[#08020e] to-transparent"
                    style={{ left: `calc(50% - ${lineWidth / 2 + 1}px)` }}
                />
                <div
                    className="absolute top-0 right-0 w-5 z-10 h-full bg-gradient-to-l from-[#08020e] to-transparent"
                    style={{ right: `calc(50% - ${lineWidth / 2 + 1}px)` }}
                />

                {/* handle */}
                <div
                    className="absolute z-10 -translate-x-1/2 h-2 rounded-full"
                    style={{
                        top: `calc(${scrollPercentage}% + ${-40}px)`,
                        left: `calc(50% - 1px)`,
                        width: `${lineWidth + 10}px`,
                        fontSize: `${hexFontSize * 2}px`,
                        filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))",
                    }}
                >
                    <span
                        className="inline-block"
                        style={{
                            background:
                                "linear-gradient(45deg, #ff2Baa, #1E90FF)",
                            backgroundSize: "200% 200%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            animation: "gradient 3s ease infinite alternate",
                        }}
                    >
                        &#x2B22;
                    </span>
                </div>

                {/* time stops handles */}
                {timelineData.map((item, index) => {
                    const percent = Math.min(
                        100,
                        (100 / timelineData.length) * index
                    );
                    return (
                        <>
                            <div
                                key={index}
                                className="absolute z-10 -translate-x-1/2 rounded-full"
                                style={{
                                    top: `calc(${percent}% - ${
                                        hexFontSize * 1.1
                                    }px)`,
                                    left: `calc(50% - 1px)`,
                                    width: `${lineWidth + 10}px`,
                                    fontSize: `${hexFontSize * 2}px`,
                                }}
                            >
                                <span
                                    className="inline-block"
                                    style={
                                        scrollPercentage > percent
                                            ? {
                                                  background:
                                                      "linear-gradient(45deg, #ff2Baa, #1E90FF)",
                                                  backgroundSize: "200% 200%",
                                                  WebkitBackgroundClip: "text",
                                                  WebkitTextFillColor:
                                                      "transparent",
                                                  animation:
                                                      "gradient 3s ease infinite alternate",
                                              }
                                            : {
                                                  WebkitTextStrokeWidth: "1px",
                                                  WebkitTextStrokeColor:
                                                      "white",
                                                  color: "transparent",
                                              }
                                    }
                                >
                                    &#x2B22;
                                </span>
                                <span
                                    className={`text-white text-2xl font-bold absolute left-1/2 top-1/2 -translate-x-[40%] -translate-y-1/2 tracking-widest ${hexaFont.className}`}
                                >
                                    {item.startYear.toString().slice(2, 4)}
                                </span>
                            </div>
                            <ExperienceCard
                                {...item}
                                index={index}
                                glowOptions={glowOptions[index]}
                                style={{
                                    top: `calc(${percent}% - ${
                                        hexFontSize * 0.25
                                    }px)`,
                                    left: `0`,
                                    flexDirection:
                                        index % 2 === 0 ? "row" : "row-reverse",
                                }}
                            />
                        </>
                    );
                })}

                <style jsx>{`
                    @keyframes gradient {
                        0% {
                            background-position: 0% 50%;
                        }
                        50% {
                            background-position: 100% 50%;
                        }
                        100% {
                            background-position: 0% 50%;
                        }
                    }
                `}</style>
            </div>

            {/* roots bg */}
            {containerRef.current && (
                <Roots
                    height={
                        containerRef.current.getBoundingClientRect().height +
                        224 * 2 // padding top and bottom
                    }
                />
            )}
        </div>
    );
}
