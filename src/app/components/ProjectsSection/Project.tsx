import { cn } from "@/lib/utils";
import * as React from "react";
import { useState } from "react";

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
                        isHovered ? "opacity-100" : "opacity-80"
                    )}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <mask id="hexMask">
                            <path
                                d="M50 0 L100 25 V75 L50 100 L0 75 V25 Z"
                                fill="white"
                            />
                        </mask>
                    </defs>
                    <image
                        href={project.image}
                        width="100"
                        height="100"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#hexMask)"
                    />
                    <path
                        d="M50 0 L100 25 V75 L50 100 L0 75 V25 Z"
                        fill="transparent"
                    />
                </svg>
                {/* info */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center w-full flex flex-col justify-between">
                    <h3 className="text-xl font-bold text-center w-full relative">
                        {project.title}
                        <div className="-z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[250%] bg-gradient-to-r from-purple-500 to-pink-500 transform -skew-y-3"></div>
                    </h3>
                    {isHovered && (
                        <div className="mt-2 transition-opacity duration-300 ease-in-out">
                            <p className="text-sm text-gray-500 mb-2">
                                {project.description}
                            </p>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href={project.demoLink}
                                    className="text-blue-500 hover:underline"
                                >
                                    Demo
                                </a>
                                <a
                                    href={project.githubLink}
                                    className="text-gray-500 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
