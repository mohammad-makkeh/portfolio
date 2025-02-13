import { cn } from "@/lib/utils";
import Image from "next/image";
import * as React from "react";

export interface IYelloStarProps {
    className?: string;
}

export default function YellowStar({className}: IYelloStarProps) {
    return (
        <div className={cn("yellow-star", className)}>
            <Image
                alt="decoration"
                src={"/img/project-100/yellow-star.svg"}
                className="object-cover"
                fill
            />
        </div>
    );
}
