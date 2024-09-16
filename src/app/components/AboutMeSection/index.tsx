import { ChevronRight } from "lucide-react";
import * as React from "react";
import DeformingLetter from "../DeformingLetter";
import DeformingWord from "../DeformingWord";
import { useInView } from "framer-motion";
import WordsTypewriter from "@/components/WordsTypewriter";
import { motion } from "framer-motion";
import Glow from "@/components/Glow";

export interface IAboutMeSectionProps {}

export default function AboutMeSection(props: IAboutMeSectionProps) {
    const svgRef = React.useRef(null);
    const isInView = useInView(svgRef, { once: true, amount: 0.8 });
    const [hasPlayed, setHasPlayed] = React.useState(false);

    React.useEffect(() => {
        if (isInView && !hasPlayed) {
            const audio = new Audio("/pencil.mp3");
            audio.volume = 0.25;
            audio.currentTime = 0.35;
            audio.play();
            setHasPlayed(true);
        }
    }, [isInView, hasPlayed]);

    return (
        <div className="relative flex items-center justify-center p-4">
            <div className="max-w-7xl w-full grid  grid-cols-2 gap-16 lg:grid-cols-1">
                {/* Image Column */}
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    className={`w-full`}
                >
                    <div className="relative w-full pt-[110%]">
                        <svg
                            className="absolute top-0 left-0 w-full h-full"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            ref={svgRef}
                        >
                            <defs>
                                <linearGradient
                                    id="hexGradient"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <animateTransform
                                        attributeName="gradientTransform"
                                        type="rotate"
                                        from="0 50 50"
                                        to="360 50 50"
                                        dur="40s"
                                        repeatCount="indefinite"
                                    />
                                    <stop offset="0%" stopColor="#ff1b6b">
                                        <animate
                                            attributeName="offset"
                                            values="0;0.35;0"
                                            dur="8s"
                                            repeatCount="indefinite"
                                        />
                                    </stop>
                                    <stop offset="100%" stopColor="#9333ea">
                                        <animate
                                            attributeName="offset"
                                            values="0.6;1;0.6"
                                            dur="8s"
                                            repeatCount="indefinite"
                                        />
                                    </stop>
                                </linearGradient>
                            </defs>
                            <path
                                d="M50 0 L100 25 V75 L50 100 L0 75 V25 Z"
                                fill="url(#hexGradient)"
                            />
                            <svg
                                x="-15"
                                y="25"
                                id="M"
                                width="100"
                                height="100"
                                viewBox="0 0 164 207"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <style>
                                    {`
                                        @keyframes drawPath {
                                            to {
                                                stroke-dashoffset: 0;
                                            }
                                        }
                                        #animatedPath {
                                            stroke-dasharray: 1000;
                                            stroke-dashoffset: 1000;
                                            animation: drawPath 2s linear forwards;
                                            animation-play-state: ${
                                                isInView ? "running" : "paused"
                                            };
                                        }
                                    `}
                                </style>
                                <path
                                    id="animatedPath"
                                    d="M9.09705 144.783L78.8573 31.9468C79.3145 31.2073 80.4323 31.3632 80.6698 32.1995L99.8306 99.6706C100.112 100.663 101.563 100.677 101.831 99.6816C105.824 84.8188 122.503 29.2241 153.186 9.54388C153.839 9.12522 154.675 9.5452 154.675 10.3207C154.675 24.8293 154.675 129.143 154.675 197.737"
                                    stroke="#08020e"
                                    stroke-width="18"
                                    fill="none"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </svg>
                    </div>
                </motion.div>

                {/* Info Column */}
                <div className="flex flex-col justify-center space-y-8">
                    <motion.h1
                        className="text-6xl font-bold"
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 1 }}
                    >
                        <DeformingWord
                            word="I'm Mohammad"
                            className="w-fit bg-clip-text text-transparent bg-gradient-to-r from-[#ff1b6b] to-[#9333ea]"
                        />
                        <DeformingWord
                            word="Makkeh"
                            className="w-fit bg-clip-text text-transparent bg-gradient-to-r from-[#ff1b6b] to-[#9333ea]"
                        />
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <p className="text-xl text-white/80 leading-relaxed">
                            <span className="font-bold text-white">
                                Experienced Frontend Engineer
                            </span>{" "}
                            specializing in creating innovative and performant
                            web applications no matter the complexity.
                            Leveraging cutting-edge technologies and focusing on
                            scalability and best practices.
                        </p>

                        <div className="grid grid-cols-1 grid-rows-2 mt-8">
                            <div className="relative text-3xl border border-white/30 border-b-transparent h-28 flex items-center pl-8">
                                <span>Want to&nbsp;</span>
                                <WordsTypewriter
                                    className="font-bold bg-purple-900"
                                    words={[
                                        "enhance",
                                        "design",
                                        "implement",
                                        "optimize",
                                        "revamp",
                                    ]}
                                />
                                your web app?
                                {/* lines */}
                                <span className="absolute -top-[0.5px] w-[100px] right-full h-[0.9px] bg-gradient-to-l from-white/30 to-transparent"></span>
                                <span className="absolute -bottom-[2px] w-[100px] right-full h-[0.9px] bg-gradient-to-l from-white/30 to-transparent"></span>
                                <span className="absolute -bottom-[2px] w-[100px] left-full h-[0.9px] bg-gradient-to-r from-white/30 to-transparent"></span>
                                <span className="absolute -top-px w-[100px] left-full h-px bg-gradient-to-r from-white/30 to-transparent"></span>
                                <span className="absolute bottom-full h-[100px] -left-[0.5px] w-[0.9px] bg-gradient-to-t from-white/30 to-transparent"></span>
                                <span className="absolute bottom-full h-[200px] -right-px w-px bg-gradient-to-t from-white/30 to-transparent"></span>
                                <span className="absolute top-0 left-full text-xl -translate-x-[7px] -translate-y-[14px]">
                                    &#x2B22;
                                </span>
                            </div>
                            <div className="relative w-full h-fit">
                                <button className="w-full h-28 flex pl-8 border border-white/30 text-white font-semibold items-center space-x-2 group relative overflow-hidden text-lg">
                                    <span className="relative z-10">
                                        Get In Touch
                                    </span>
                                    <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-600 -translate-x-full !m-0 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                                </button>

                                {/* line */}
                                <span className="absolute top-full h-[200px] -left-0 w-px bg-gradient-to-b from-white/30 to-transparent"></span>
                                <span className="absolute top-full h-[100px] -right-0 w-px bg-gradient-to-b from-white/30 to-transparent"></span>
                                <span className="absolute -bottom-[0.5px] w-[100px] right-full h-px bg-gradient-to-l from-white/30 to-transparent"></span>
                                <span className="absolute -bottom-[0.5px] w-[100px] left-full h-px bg-gradient-to-r from-white/30 to-transparent"></span>

                                <span className="absolute top-0 right-full text-xl translate-x-[8px] -translate-y-[13px]">
                                    &#x2B22;
                                </span>
                                <span className="absolute bottom-0 left-full text-xl -translate-x-[8px] translate-y-[14px]">
                                    &#x2B22;
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Glow
                top="100px"
                right="-250px"
                size="huge"
                intensity="high"
                color="purple"
            />
        </div>
    );
}
