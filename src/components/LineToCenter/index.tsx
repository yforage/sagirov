import React, { useEffect, useRef } from "react";

const LineToCenter: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const { width, height } = canvas.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;

    const lineX = width - 10;
    const lineY = height - 10;

    context.translate(.5,.5);
    context.lineWidth = 1.5;
    const gradient = context.createLinearGradient(0, 0, lineX, lineY);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.01)");
    gradient.addColorStop(1, "#FFFFFF");
    context.strokeStyle = gradient;

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(lineX / 4, lineY);
    context.lineTo(lineX, lineY);
    context.stroke();
    context.beginPath();
    context.arc(lineX + 4, lineY, 4, 0, 2 * Math.PI, true);
    context.stroke();
  }, []);

  return (
    <canvas ref={canvasRef} />
  )
}

export default LineToCenter;