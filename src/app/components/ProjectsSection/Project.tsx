import { cn } from "@/lib/utils";
import * as React from "react";
import { useState } from "react";
import localFont from "next/font/local";

const hexa = localFont({
    src: [
        {
            //   path: '../../../../public/fonts/d3-concretism-font/D3ConcretismTypeb-0WAo.ttf',
            //   path: '../../../../public/fonts/he-xk-ey-font/HexkeySolid-yw32d.otf',
            // path: "../../../../public/fonts/honeycomb-happiness-font/HoneycombHappiness-ywnRm.ttf",
            //   path: '../../../../public/fonts/mysterons-brk/mysteron.ttf',
            path: "../../../../public/fonts/hippopotamus-apocalypse-font/HippopotamusApocalypse-Gzly.ttf",
            //   path: '../../../../public/fonts/hexgon-font/Hexgon-2xwv.otf',
            weight: "400",
        },
    ],
    variable: "--font-hexa",
});

export interface IProjectProps {
    project: IProject;
}

export interface IProject {
    image: string;
    title: string;
    demoLink: string;
    githubLink: string;
    description: string;
}

export default function Project({ project }: IProjectProps) {
    const [isHovered, setIsHovered] = useState(false);
    const { demoLink, description, githubLink, image, title } = project;

    return (
        <div
            className="w-96 2xl:w-80 xl:w-72 lg:w-64 md:w-52 sm:w-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-full pt-[110%]">
                <svg
                    className={cn(
                        "absolute top-0 left-0 w-full h-full transition-all",
                        isHovered ? "" : ""
                    )}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M50 0 L100 25 V75 L50 100 L0 75 V25 Z"
                        fill="#120a1d"
                    />
                </svg>

                <div className="absolute w-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="absolute pt-[56.25%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                        <img
                            src={image}
                            alt={title}
                            className="absolute inset-0 w-full h-full rounded shadow-xl"
                        />
                    </div>
                </div>

                {/* info */}
                <div
                    className={cn(
                        "absolute text-white left-1/2 text-2xl -translate-x-1/2 top-20 tracking-wide",
                        hexa.className
                    )}
                >
                    {title}
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 overflow-visible">
                    <div className="pt-[110%] overflow-visible">
                        <svg
                            className={cn(
                                "absolute top-0 left-0 w-full h-full transition-all overflow-visible",
                                isHovered ? "" : ""
                            )}
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <filter id="glowFilter">
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
                                    result="coloredBlur"
                                />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#8c60ff"
                                    stopOpacity="0.8"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#f24d91"
                                    stopOpacity="0.8"
                                />
                            </linearGradient>
                            <path
                                d="M50 0 L100 25 V75 L50 100 L0 75 V25 Z"
                                fill="url(#gradient)"
                                filter="url(#glowFilter)"
                            />
                        </svg>
                        <svg
                            width="19"
                            height="21"
                            viewBox="0 0 19 21"
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5.02423 0.329837C5.77555 0.58337 6.49007 0.935082 7.14923 1.37584C8.08075 1.13741 9.03868 1.01779 10.0002 1.01984C10.9932 1.01984 11.9512 1.14384 12.8492 1.37484C13.5081 0.934509 14.2223 0.583137 14.9732 0.329837C15.6702 0.0928372 16.6632 -0.291163 17.2532 0.361837C17.6532 0.805837 17.7532 1.54984 17.8242 2.11784C17.9042 2.75184 17.9232 3.57784 17.7132 4.39784C18.5162 5.43484 19.0002 6.67184 19.0002 8.01984C19.0002 10.0618 17.8942 11.8348 16.2572 13.0628C15.469 13.6458 14.5954 14.1032 13.6672 14.4188C13.8812 14.9088 14.0002 15.4508 14.0002 16.0198V19.0198C14.0002 19.2851 13.8949 19.5394 13.7073 19.7269C13.5198 19.9145 13.2654 20.0198 13.0002 20.0198H7.00023C6.73501 20.0198 6.48066 19.9145 6.29312 19.7269C6.10559 19.5394 6.00023 19.2851 6.00023 19.0198V18.0288C5.04523 18.1458 4.24423 18.0418 3.56323 17.7528C2.85123 17.4508 2.35523 16.9828 1.98223 16.5348C1.62823 16.1108 1.24223 15.1548 0.684229 14.9688C0.559605 14.9273 0.444374 14.8617 0.345117 14.7757C0.245859 14.6896 0.164519 14.5849 0.105739 14.4674C-0.0129713 14.2302 -0.032579 13.9555 0.0512294 13.7038C0.135038 13.4521 0.315397 13.2441 0.552631 13.1253C0.789864 13.0066 1.06454 12.987 1.31623 13.0708C1.98223 13.2928 2.41623 13.7728 2.71323 14.1588C3.19323 14.7788 3.58323 15.5888 4.34323 15.9118C4.65623 16.0448 5.11523 16.1318 5.83323 16.0338L6.00023 15.9998C6.00253 15.4557 6.11584 14.9177 6.33323 14.4188C5.4051 14.1032 4.53143 13.6458 3.74323 13.0628C2.10623 11.8348 1.00023 10.0628 1.00023 8.01984C1.00023 6.67384 1.48323 5.43784 2.28423 4.40184C2.07423 3.58184 2.09223 2.75384 2.17223 2.11884L2.17723 2.08084C2.25023 1.49884 2.33523 0.813837 2.74323 0.361837C3.33323 -0.291163 4.32723 0.0938374 5.02323 0.330837L5.02423 0.329837Z"
                                fill="#fff"
                            />
                        </svg>
                    </div>
                </div>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-10 overflow-visible">
                    <div className="pt-[110%] overflow-visible">
                        <svg
                            className={cn(
                                "absolute top-0 left-0 w-full h-full transition-all overflow-visible",
                                isHovered ? "" : ""
                            )}
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <filter id="glowFilter">
                                <feGaussianBlur
                                    in="SourceGraphic"
                                    stdDeviation="10"
                                    result="coloredBlur"
                                />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <linearGradient
                                id="gradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop
                                    offset="0%"
                                    stopColor="#8c60ff"
                                    stopOpacity="0.8"
                                />
                                <stop
                                    offset="100%"
                                    stopColor="#f24d91"
                                    stopOpacity="0.8"
                                />
                            </linearGradient>
                            <path
                                d="M50 0 L100 25 V75 L50 100 L0 75 V25 Z"
                                fill="url(#gradient)"
                                filter="url(#glowFilter)"
                            />
                        </svg>
                        <svg
                            width="19"
                            height="21"
                            viewBox="0 0 20 21"
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 2H2V16C2 16.5304 2.21071 17.0391 2.58579 17.4142C2.96086 17.7893 3.46957 18 4 18H16C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16V11M7 13L18 2M18 2H13M18 2V7"
                                stroke="#120a1d"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
