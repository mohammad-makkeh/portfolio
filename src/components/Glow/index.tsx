import * as React from "react";

export interface IGlowProps {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    color?: "red" | "purple" | "lightblue";
    size?: "small" | "medium" | "large" | "huge";
    intensity?: "low" | "medium" | "high" | "intense";
}

export default function Glow({
    top = "auto",
    left = "auto",
    right = "auto",
    bottom = "auto",
    color = "red",
    size = "medium",
    intensity = "low",
}: IGlowProps) {
    function getOpacity(): number {
        switch (intensity) {
            case "low":
                return 0.3;
            case "medium":
                return 0.45;
            case "high":
                return 0.6;
            case "intense":
                return 0.9;
            default:
                return 0.3;
        }
    }
    function getWidth(): string {
        switch (size) {
            case "small":
                return 'max(10vw, 100px)';
            case "medium":
                return 'max(20vw, 300px)';
            case "large":
                return 'max(30vw, 500px)';
            case "huge":
                return 'max(40vw, 800px)';
            default:
                return 'max(30vw, 500px)';
        }
    }

    return (
        <div
            className={`glow glow-${color}`}
            style={{
                top,
                left,
                right,
                bottom,
                width: getWidth(),
                opacity: getOpacity(),
            }}
        ></div>
    );
}
