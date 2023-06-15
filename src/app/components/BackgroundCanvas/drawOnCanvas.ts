
export default function drawOnCanvas(canvasRef: any){
    if(!canvasRef?.current) return;
    const canvas = canvasRef?.current;
    const ctx = canvasRef?.current.getContext("2d");
    initCanvas(canvas, ctx);
}

function initCanvas (canvas: any, ctx: CanvasRenderingContext2D){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = '#f7f7f7';
    ctx.strokeStyle = '#f7f7f7';
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 300);
    // ctx.stroke();
    ctx.closePath();
}