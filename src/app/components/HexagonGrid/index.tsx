import { cn } from "@/utils/cn";
import * as React from "react";
import Hexagon from "../Hexagon";

export interface IHexagonGridProps {
    className?: string;
    cols?: number;
    rows?: number;
}

export default function HexagonGrid({
    className,
    cols = 3,
    rows = 3,
}: IHexagonGridProps) {
    if (!cols || !rows) return;
    if (cols <= 0 || rows <= 0) return "";

    return (
        <div className={cn("py-[26px]", className)}>
            {new Array(rows).fill(0).map((_, i) => (
                <div
                    className={cn(
                        "flex",
                        i % 2 !== 0 && "ml-[53px]"
                    )}
                    key={i}
                >
                    {new Array(cols + (i % 2 === 0 ? 1 : 0)).fill(0).map((_, j) => (
                        <Hexagon
                            className={cn("ml-[1px] mb-[1px]", i === rows - 1 && "mb-[30px]")}
                            key={j}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
