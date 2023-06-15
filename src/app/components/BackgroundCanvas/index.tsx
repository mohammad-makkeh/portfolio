"use client"
import * as React from "react";
import drawOnCanvas from "./drawOnCanvas";
export interface IBackCanvasProps {}

export default function BackCanvas(props: IBackCanvasProps) {
    
    const backCanvasRef = React.useRef(null);
    React.useEffect(() => drawOnCanvas(backCanvasRef), []);

    return (
        <canvas
            ref={backCanvasRef}
            style={{
                width: "100vw",
                height: "100%",
                position: 'absolute',
                inset: 0,
                zIndex: -1,
            }}
        ></canvas>
    );
}
