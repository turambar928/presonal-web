import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // 初始化粒子
    const initParticles = () => {
      particlesRef.current = Array(100).fill(null).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3
      }));
    };

    // 更新和绘制粒子
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';

      particlesRef.current.forEach((particle) => {
        // 更新位置
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // 处理边界
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // 绘制粒子
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // 连接临近粒子
        particlesRef.current.forEach((p2) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - p2.x, 2) + Math.pow(particle.y - p2.y, 2)
          );
          if (distance < 150) {
            ctx.beginPath();
            const opacity = 0.15 - distance / 1500;
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            if (distance < 100) {
              ctx.beginPath();
              ctx.fillStyle = `rgba(59, 130, 246, ${0.1 - distance / 1000})`;
              ctx.arc((particle.x + p2.x) / 2, (particle.y + p2.y) / 2, 0.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    // 移除鼠标移动监听器
    window.addEventListener('resize', resizeCanvas);
    
    resizeCanvas();
    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground; 