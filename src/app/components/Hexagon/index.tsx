import { cn } from "@/utils/cn";
import * as React from "react";

export interface IHexagonProps {
    className?: string;
}

export default function Hexagon({ className }: IHexagonProps) {
    return (
        <div
            className={cn(
                "relative mt-[30px] w-[104px] h-[60px] bg-[#08020e] hover:bg-[#250e25] transition-all duration-500 reltaive before:absolute before:-top-[30px] before:w-0 before:h-0 before:border-b-[30px] before:border-[#08020e] hover:before:border-[#250e25] before:border-l-[52px] before:border-r-[52px] before:border-l-transparent hover:before:border-r-transparent hover:before:border-l-transparent before:border-r-transparent before:transition-all before:duration-500 after:absolute after:-bottom-[30px] after:w-0 after:h-0 after:border-t-[30px] after:border-[#08020e] hover:after:border-[#250e25] after:border-l-[52px] after:border-r-[52px] after:border-l-transparent hover:after:border-r-transparent hover:after:border-l-transparent after:border-r-transparent after:transition-all after:duration-500",
                className
            )}
        ></div>
    );
}
