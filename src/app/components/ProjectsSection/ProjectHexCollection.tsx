import * as React from "react";
import Project, { IProject } from "./Project";

export interface IProjectHexCollectionProps {
    projects: IProject[];
}

export default function ProjectHexCollection({ projects }: IProjectHexCollectionProps) {
    return  <div className="relative">
    <div className="flex gap-2 flex-none justify-center">
        {projects.slice(0, 2).map((project, index) => (
            <Project key={index} project={project} />
        ))}
    </div>
    <div className="flex gap-2 flex-none justify-center -translate-y-[100px] 2xl:-translate-y-[80px] xl:-translate-y-[73px] lg:-translate-y-[63px] md:-translate-y-[50px] sm:-translate-y-[38px]">
        {projects.slice(2, 5).map((project, index) => (
            <Project key={index + 2} project={project} />
        ))}
    </div>
    <div className="flex gap-2 flex-none justify-center -translate-y-[200px] 2xl:-translate-y-[180px] xl:-translate-y-[173px] lg:-translate-y-[163px] md:-translate-y-[150px] sm:-translate-y-[138px]">
        {projects.slice(5, 7).map((project, index) => (
            <Project key={index + 5} project={project} />
        ))}
    </div>
</div>;
}   