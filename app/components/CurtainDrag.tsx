'use client';

export default function CurtainDrag() {
  return (
    <>
      {/* Curtain Container - from bottom, covering upward */}
      <div
        id="curtain-overlay"
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
          id="curtain-content"
          className="relative z-10 h-full flex items-center justify-center"
          style={{ 
            opacity: 0,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          <h2 
            className="text-[80px] md:text-[120px] lg:text-[150px] leading-none font-bold text-primary font-[family-name:var(--font-family-display)] tracking-tighter"
            style={{
              transform: 'scale(0.8)',
              transition: 'transform 0.3s ease-out',
            }}
          >
            SKILLS
          </h2>
        </div>
      </div>
    </>
  );
}
