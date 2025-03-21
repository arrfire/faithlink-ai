
import { useEffect, useRef } from 'react';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Create gradient points
    const points = [
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.2,
        radius: canvas.width * 0.2,
        color: 'rgba(201, 171, 114, 0.12)', // scripture-accent very light
        vx: 0.2,
        vy: 0.1
      },
      {
        x: canvas.width * 0.7,
        y: canvas.height * 0.8,
        radius: canvas.width * 0.25,
        color: 'rgba(26, 54, 93, 0.08)', // scripture-deep very light
        vx: -0.15,
        vy: -0.2
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.5,
        radius: canvas.width * 0.3,
        color: 'rgba(59, 130, 246, 0.05)', // blue-500 very light
        vx: 0.1,
        vy: -0.1
      }
    ];
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update each point
      points.forEach(point => {
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, point.radius
        );
        
        gradient.addColorStop(0, point.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Move point
        point.x += point.vx;
        point.y += point.vy;
        
        // Bounce off edges
        if (point.x - point.radius < 0 || point.x + point.radius > canvas.width) {
          point.vx = -point.vx;
        }
        
        if (point.y - point.radius < 0 || point.y + point.radius > canvas.height) {
          point.vy = -point.vy;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full -z-10 ${className || ''}`}
    />
  );
};

export default AnimatedGradient;
