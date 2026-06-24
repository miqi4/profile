'use client';

import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CurtainDrag() {
  const router = useRouter();
  const curtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsTextRef = useRef<HTMLHeadingElement>(null);
  const startYRef = useRef(0);
  const dragYRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragY, setDragY] = useState(0);

  const THRESHOLD = 150;

  useEffect(() => {
    const curtain = curtainRef.current;
    const content = contentRef.current;
    const handle = document.querySelector('.curtain-handle') as HTMLElement | null;
    if (!curtain || !content || !handle) return;

    const handleMouseDown = (e: MouseEvent) => {
      startYRef.current = e.clientY;
      setIsDragging(true);
      setDragY(0);
      dragYRef.current = 0;
      if (curtain) {
        curtain.style.transition = 'none';
        curtain.style.opacity = '1';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!startYRef.current || !curtain) return;

      const currentY = e.clientY;
      const diff = startYRef.current - currentY;

      if (diff > 0) {
        setDragY(diff);
        dragYRef.current = diff;
        const closePercent = Math.min((diff / THRESHOLD) * 100, 100);
        curtain.style.transform = `scaleY(${closePercent / 100})`;
        content.style.opacity = `${closePercent / 100}`;
      }
    };

    const handleMouseUp = () => {
      const currentDragY = dragYRef.current;
      if (currentDragY > THRESHOLD) {
        if (curtain && content) {
          curtain.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
          curtain.style.transform = 'scaleY(1)';
          curtain.style.opacity = '1';
          content.style.transition = 'opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
          content.style.opacity = '1';
          
          // Trigger scale animation on SKILLS text
          if (skillsTextRef.current) {
            skillsTextRef.current.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            skillsTextRef.current.style.transform = 'scale(1)';
          }
          
          setTimeout(() => {
            router.push('/skills');
          }, 300);
        }
      } else {
        if (curtain && content) {
          curtain.style.transition = 'all 0.3s ease-out';
          curtain.style.transform = 'scaleY(0)';
          curtain.style.opacity = '0';
          content.style.transition = 'opacity 0.3s ease-out';
          content.style.opacity = '0';
          
          // Reset scale on SKILLS text
          if (skillsTextRef.current) {
            skillsTextRef.current.style.transition = 'transform 0.3s ease-out';
            skillsTextRef.current.style.transform = 'scale(0.8)';
          }
        }
      }
      setIsDragging(false);
      setDragY(0);
      startYRef.current = 0;
      dragYRef.current = 0;
    };

    handle.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      handle.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Curtain Container - from bottom, covering upward */}
      <div
        ref={curtainRef}
        className="hidden md:block fixed inset-0 bottom-0 z-40 origin-bottom pointer-events-none overflow-hidden"
        style={{ 
          transformOrigin: 'bottom',
          opacity: 0,
          transform: 'scaleY(0)',
          transition: 'all 0.3s ease-out'
        }}
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Skills Text */}
        <div
          ref={contentRef}
          className="relative z-10 h-full flex items-center justify-center"
          style={{ 
            opacity: 0,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <h2 
            ref={skillsTextRef}
            className="text-[80px] md:text-[120px] lg:text-[150px] leading-none font-bold text-primary font-[family-name:var(--font-family-display)] tracking-tighter"
            style={{
              transform: 'scale(0.8)',
            }}
          >
            SKILLS
          </h2>
        </div>
      </div>

      {/* Curtain Handle - at bottom */}
      <div className="hidden md:block fixed bottom-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
        <div
          className="curtain-handle flex flex-col items-center gap-3 px-6 py-4 cursor-grab active:cursor-grabbing hover:opacity-80 transition-opacity group"
        >
          {/* Simple Chevron Icon */}
          <svg 
            className="w-6 h-6 text-primary/60 group-hover:text-primary transition-colors animate-bounce"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
          
          {/* Hint Text */}
          <span className="text-xs tracking-wider font-medium text-primary/70 uppercase whitespace-nowrap group-hover:text-primary transition-colors">
            {dragY > 0 ? (dragY > THRESHOLD ? '✓ Release!' : `${Math.round(dragY)}px`) : 'Drag up'}
          </span>
        </div>
      </div>
    </>
  );
}
