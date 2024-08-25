import { cn } from "@/utils/cn";
import * as React from "react";

export interface IHexagonProps {
    className?: string;
    color?: string;
    children?: React.ReactNode;
}

export default function Hexagon({
    className,
    children,
    color = "#08020e",
}: IHexagonProps) {
    // do not remove this, if you did the effect will break because..., well I wont tell you, if you can figure it out, then email me at muhammad.makkeh@gmail.com with the reason!
    if (false)
        return (
            <>
                <div className="before:border-[#08020e]"></div>
                <div className="after:border-[#08020e]"></div>
                <div className="after:border-[white]"></div>
                <div className="before:border-[white]"></div>
            </>
        );
    return (
        <div
            className={cn(
                `relative mt-[30px] w-[104px] h-[60px] bg-[${color}] transition-all duration-500 reltaive before:absolute before:-top-[29px] before:w-0 before:h-0 before:border-b-[30px] before:border-[${color}] before:border-l-[52px] before:border-r-[52px] before:border-l-transparent hover:before:border-r-transparent hover:before:border-l-transparent before:border-r-transparent before:transition-all before:duration-500 after:absolute after:-bottom-[29px] after:w-0 after:h-0 after:border-t-[30px] after:border-[${color}] after:border-l-[52px] after:border-r-[52px] after:border-l-transparent hover:after:border-r-transparent hover:after:border-l-transparent after:border-r-transparent after:transition-all after:duration-500`,
                "grid justify-center items-center",
                className
            )}
            style={{ backgroundColor: color }}
        >
            {children}
        </div>
    );
}
