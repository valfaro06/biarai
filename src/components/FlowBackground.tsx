'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface FlowLine {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  progress: number;
  speed: number;
  opacity: number;
  color: string;
}

export default function FlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Simple gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#e0f2fe');
      gradient.addColorStop(0.5, '#f0f9ff');
      gradient.addColorStop(1, '#f8fafc');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Moving circles
      const time = Date.now() * 0.001;
      
      // Circle 1
      const x1 = canvas.width * 0.2 + Math.sin(time * 0.5) * 30;
      const y1 = canvas.height * 0.3 + Math.cos(time * 0.3) * 20;
      const grad1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, 100);
      grad1.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
      grad1.addColorStop(1, 'rgba(59, 130, 246, 0)');
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(x1, y1, 100, 0, Math.PI * 2);
      ctx.fill();
      
      // Circle 2
      const x2 = canvas.width * 0.8 + Math.sin(time * 0.7) * 25;
      const y2 = canvas.height * 0.7 + Math.cos(time * 0.4) * 15;
      const grad2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, 80);
      grad2.addColorStop(0, 'rgba(99, 102, 241, 0.08)');
      grad2.addColorStop(1, 'rgba(99, 102, 241, 0)');
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(x2, y2, 80, 0, Math.PI * 2);
      ctx.fill();
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}