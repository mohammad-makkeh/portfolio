import * as React from "react";
import ProjectsTitle from "./ProjectsTitle";
import ProjectHexCollection from "./ProjectHexCollection";

export interface IProjectsSectionProps {}

export default function ProjectsSection(props: IProjectsSectionProps) {
    return (
        <div>
            {/* <ProjectsTitle /> */}
          {/* <ProjectHexCollection projects={projects}/> */}
        </div>
    );
}

const projects = [
    {
        image: "/img/prj-nx.png",
        title: "NewsletterX",
        demoLink: "https://ai-task-manager.demo.com",
        githubLink: "https://github.com/username/ai-task-manager",
        description:
            "An intelligent task management application that uses machine learning to prioritize and suggest tasks based on user behavior and deadlines.",
    },
    {
        image: "/img/prj-nx.png",
        title: "NewsletterX",
        demoLink: "https://blockchain-voting.demo.com",
        githubLink: "https://github.com/username/blockchain-voting",
        description:
            "A secure and transparent voting system built on blockchain technology, ensuring tamper-proof elections and real-time result tracking.",
    },
    {
        image: "/img/prj-nx.png",
        title: "NewsletterX",
        demoLink: "https://ar-interior.demo.com",
        githubLink: "https://github.com/username/ar-interior-designer",
        description:
            "An augmented reality app that allows users to visualize furniture and decor in their space before making a purchase.",
    },
    {
        image: "/img/prj-nx.png",
        title: "NewsletterX",
        demoLink: "https://eco-travel.demo.com",
        githubLink: "https://github.com/username/eco-travel-planner",
        description:
            "A travel planning application that helps users create itineraries with the lowest carbon footprint, suggesting eco-friendly transportation and accommodations.",
    },
    {
        image: "/img/prj-nx.png",
        title: "NewsletterX",
        demoLink: "https://quantum-sim.demo.com",
        githubLink: "https://github.com/username/quantum-simulator",
        description:
            "A web-based quantum computing simulator that allows researchers and students to experiment with quantum algorithms without access to actual quantum hardware.",
    },
    {
        image: "/img/prj-nx.png",
        title: "NewsletterX",
        demoLink: "https://health-ai.demo.com",
        githubLink: "https://github.com/username/personalized-health-ai",
        description:
            "An AI-driven health assistant that provides personalized diet, exercise, and lifestyle recommendations based on user data and genetic information.",
    },
    {
        image: "/img/prj-nx.png",
        title: "NewsletterX",
        demoLink: "https://decentralized-social.demo.com",
        githubLink: "https://github.com/username/decentralized-social",
        description:
            "A blockchain-based social media platform that gives users full control over their data and content, with built-in monetization features for creators.",
    },
];
