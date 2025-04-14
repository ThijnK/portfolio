"use client";

import { useEffect, useRef } from "react";

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawNoise = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const imageData = ctx.createImageData(width, height);
    const pixels = imageData.data;

    for (let i = 0; i < pixels.length; i += 4) {
      // Generate random grayscale noise
      const val = Math.random() * 255;
      pixels[i] = val; // red
      pixels[i + 1] = val; // green
      pixels[i + 2] = val; // blue
      pixels[i + 3] = 15; // alpha
    }

    ctx.putImageData(imageData, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeAndDraw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawNoise(ctx, canvas.width, canvas.height);
    };

    resizeAndDraw();
    window.addEventListener("resize", resizeAndDraw);

    return () => {
      window.removeEventListener("resize", resizeAndDraw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 dark:opacity-60"
    />
  );
}
