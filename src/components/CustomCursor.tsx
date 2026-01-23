'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const cursorRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef<Array<{ x: number; y: number; id: number }>>([]);
  const rafRef = useRef<number>();
  
  useEffect(() => {
    let trailId = 0;
    let lastTrailTime = 0;
    let lastFrameTime = performance.now();

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      
      // Add trail effect with timing control optimized for high fps
      const now = performance.now();
      if (now - lastTrailTime > 16) { // ~60 times per second for trail
        trailRef.current = [...trailRef.current, { x: e.clientX, y: e.clientY, id: trailId++ }].slice(-6);
        lastTrailTime = now;
      }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastFrameTime) / 16.67; // Normalize to 60fps baseline
      lastFrameTime = currentTime;
      
      // Frame-rate independent smooth interpolation optimized for 144fps+
      const lerpFactor = Math.min(0.25 * deltaTime, 1); // Faster response for high refresh rates
      
      cursorRef.current.x = lerp(cursorRef.current.x, targetRef.current.x, lerpFactor);
      cursorRef.current.y = lerp(cursorRef.current.y, targetRef.current.y, lerpFactor);
      
      setPosition({
        x: cursorRef.current.x,
        y: cursorRef.current.y,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Trail Effect */}
      {trailRef.current.map((point, index) => (
        <div
          key={point.id}
          className="custom-cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index + 1) / trailRef.current.length * 0.4,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trailRef.current.length})`,
          }}
        />
      ))}

      {/* Main Cursor - Outer Ring */}
      <div
        className={`custom-cursor-outer ${isPointer ? 'active' : ''} ${isHidden ? 'hidden' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          willChange: 'transform',
        }}
      />

      {/* Main Cursor - Inner Dot */}
      <div
        className={`custom-cursor-inner ${isPointer ? 'active' : ''} ${isHidden ? 'hidden' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          willChange: 'transform',
        }}
      />

      {/* Glow Effect */}
      <div
        className={`custom-cursor-glow ${isPointer ? 'active' : ''} ${isHidden ? 'hidden' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          willChange: 'transform, opacity',
        }}
      />
    </>
  );
}
