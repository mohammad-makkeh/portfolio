import Glow from "@/components/Glow";
import { BorderBeam } from "@/components/magicui/border-beam";
import * as React from "react";

export interface IExperienceCardProps {
    startYear: number;
    endYear: number | string;
    company: string;
    position: string;
    description: string[];
    style?: React.CSSProperties;
    glowOptions?: React.ComponentProps<typeof Glow>;
    index: number;
}

export default function ExperienceCard({
    startYear,
    endYear,
    company,
    position,
    description,
    style,
    glowOptions,
    index,
}: IExperienceCardProps) {
    
    return (
        <div
            className="absolute flex justify-center gap-40 w-full"
            style={style}
        >
            <div className={`w-[400px] p-6 overflow-hidden rounded-lg backdrop-filter backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="relative z-10">
                    <h3 className="font-bold text-white text-2xl mb-2">{position}</h3>
                    <h4 className="mb-4 text-sm font-semibold text-white/90 uppercase flex items-center gap-1">
                        <span>{company}</span>
                        <span className="inline-block mx-2 w-1 h-1 bg-white/70 rounded-full"></span>
                        <span className="leading-snug tracking-wide">
                            {startYear} - {endYear}
                        </span>
                    </h4>

                    <ul className="list-disc pl-5 text-sm text-white">
                        {description.map((item, i) => (
                            <li key={i} className="mb-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <BorderBeam borderWidth={3} delay={index * 2} />

                <Glow size="medium" intensity="intense" {...glowOptions} />
            </div>
            <div className="w-[400px]">
                <div className="rounded-lg overflow-hidden pt-[56.25%] bg-white/5"></div>
            </div>
        </div>
    );
}
