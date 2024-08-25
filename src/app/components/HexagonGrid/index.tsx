import { cn } from "@/utils/cn";
import * as React from "react";
import { motion } from "framer-motion";
import Hexagon from "../Hexagon";
import { CellContent } from "@/types";

export interface IHexagonGridProps {
    className?: string;
    cols?: number;
    rows?: number;
    cellContents: CellContent[];
}

export default function HexagonGrid({
    className,
    cols = 3,
    rows = 3,
    cellContents,
}: IHexagonGridProps) {
    if (!cols || !rows) return;
    if (cols <= 0 || rows <= 0) return "";

    return (
        <div className={cn("py-[26px]", className)}>
            {new Array(rows).fill(0).map((_, i) => (
                <div className={cn("flex", i % 2 !== 0 && "ml-[53px]")} key={i}>
                    {new Array(cols + (i % 2 === 0 ? 1 : 0))
                        .fill(0)
                        .map((_, j) => {
                            const cellContent = cellContents?.find((c) => {
                                const matchesRow = c.rowFromEnd
                                    ? c.cell.row === rows - (i + 1)
                                    : c.cell.row === i + 1;
                                const matchesCol = c.colFromEnd
                                    ? c.cell.col === cols - (j + 1)
                                    : c.cell.col === j + 1;
                                return matchesRow && matchesCol;
                            });
                            return (
                                <div className="relative" key={j}>
                                    {cellContent && !cellContent?.hideGlow && (
                                        <div
                                            className="absolute -top-[40px] -left-[45px] -z-10 rounded-full animate-rotate !origin-center"
                                            style={{
                                                width: "200px",
                                                height: "200px",
                                                background:
                                                    "linear-gradient(125deg, aqua 30%, deeppink 60%)",
                                                mask: "radial-gradient(circle at 50% 50%, #0005 10%, transparent 70%)",
                                            }}
                                        />
                                    )}
                                    <Hexagon
                                        className={cn(
                                            "font-bold ml-[3px] mb-[1px]",
                                            i === rows - 1 && "mb-[30px]",
                                        )}
                                    >
                                        {cellContent && (
                                            <motion.div
                                                className="z-10"
                                                initial={
                                                    cellContent
                                                        ? {
                                                              scale: 0,
                                                              opacity: 0,
                                                              y: cellContent.hideGlow ? 0 :  200 * (i % 2 === 0 ? 1 : - 1),
                                                          }
                                                        : {}
                                                }
                                                animate={
                                                    cellContent
                                                        ? {
                                                                scale: 1,
                                                                opacity: 1,
                                                                y: 0,
                                                              transition: {
                                                                  duration: 0.3,
                                                                  delay: (i * j) / 35,
                                                              },
                                                          }
                                                        : {}
                                                }
                                            >
                                                {cellContent.content}{" "}
                                            </motion.div>
                                        )}
                                    </Hexagon>
                                </div>
                            );
                        })}
                </div>
            ))}
        </div>
    );
}
