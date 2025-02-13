import Glow from "@/components/Glow";
import { BorderBeam } from "@/components/magicui/border-beam";
import * as React from "react";
import { motion, useInView } from "framer-motion";
import TypingAnimation from "@/components/magicui/typing-animation";

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
    const ref = React.useRef<HTMLDivElement>(null);
    const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 1 });

    return (
        <div
            ref={ref}
            className="absolute flex justify-center gap-40 w-full"
            style={style}
        >
            <motion.div
                className={`w-[400px] p-6 overflow-hidden rounded-lg backdrop-filter backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:shadow-xl`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{duration: 0.3, ease:"easeIn"}}
                viewport={{ once: true, amount: 1 }}
            >
                <div className="relative z-10">
                    {inView && (
                        <TypingAnimation
                            duration={40}
                            text={position}
                            className="font-bold text-white text-2xl mb-2"
                        />
                    )}
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
            </motion.div>
            <div className="w-[400px]">
                {/* <div className="rounded-lg overflow-hidden pt-[56.25%] bg-white/5"></div> */}
            </div>
        </div>
    );
}
