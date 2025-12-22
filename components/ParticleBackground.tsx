import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      // Adjust density: fewer particles on mobile
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // Random size between 0.5 and 2.5
          speedX: Math.random() * 0.4 + 0.1, // Constant drift to the right (wind)
          speedY: (Math.random() - 0.5) * 0.2, // Slight vertical wobble
          opacity: Math.random() * 0.5 + 0.1, // Random opacity
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Detect dark mode for particle color
      const isDark = document.documentElement.classList.contains('dark');
      // White/Gray in dark mode, Slate-400 in light mode
      const r = isDark ? 200 : 148;
      const g = isDark ? 210 : 163;
      const b = isDark ? 230 : 184;

      particles.forEach((p) => {
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around screen edges to create infinite flow
        if (p.x > canvas.width) p.x = -p.size;
        if (p.y > canvas.height) p.y = -p.size;
        if (p.y < -p.size) p.y = canvas.height;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });

    // Handle theme change (observer to re-trigger draw if needed, though r/g/b calc is per frame)
    // We calculate color per frame so no explicit listener needed for theme switch

    resizeCanvas();
    initParticles();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-60 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;