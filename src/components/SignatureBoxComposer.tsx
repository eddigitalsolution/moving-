import React, { useEffect, useRef, useState } from 'react';
import { Package, RefreshCw, CheckCircle, Layers, Box, MoveRight, LayoutGrid } from 'lucide-react';
import confetti from 'canvas-confetti';
import gsap from 'gsap';

export const SignatureBoxComposer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [composed, setComposed] = useState(true);
  const [activePreset, setActivePreset] = useState<'stack' | 'wall' | 'pyramid'>('wall');

  const activePresetRef = useRef(activePreset);
  const composedRef = useRef(composed);

  useEffect(() => {
    activePresetRef.current = activePreset;
    composedRef.current = composed;
  }, [activePreset, composed]);

  const boxes = [
    { id: 'box-1', name: 'SOFA & LOUNGER', bg: 'bg-industrial-amber', text: 'text-industrial-black', border: 'border-industrial-black', category: 'LIVING ROOM', weight: '120KG' },
    { id: 'box-2', name: 'DINING TABLE 8P', bg: 'bg-industrial-yellow', text: 'text-industrial-black', border: 'border-industrial-black', category: 'DINING', weight: '85KG' },
    { id: 'box-3', name: 'SERVER RACK 42U', bg: 'bg-industrial-dark', text: 'text-industrial-light', border: 'border-industrial-amber', category: 'OFFICE IT', weight: '210KG' },
    { id: 'box-4', name: 'KING BED FRAME', bg: 'bg-industrial-gray', text: 'text-industrial-light', border: 'border-industrial-yellow', category: 'BEDROOM', weight: '95KG' },
    { id: 'box-5', name: 'ARTWORK & GLASS', bg: 'bg-industrial-black', text: 'text-industrial-amber', border: 'border-industrial-amber', category: 'FRAGILE', weight: '45KG' },
    { id: 'box-6', name: 'EXECUTIVE DESKS', bg: 'bg-industrial-amber', text: 'text-industrial-black', border: 'border-industrial-black', category: 'OFFICE', weight: '140KG' },
  ];

  const handleCompose = (preset: 'stack' | 'wall' | 'pyramid', triggerConfetti = true) => {
    setActivePreset(preset);
    setComposed(true);

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

    boxes.forEach((b, idx) => {
      const el = document.getElementById(b.id);
      if (!el) return;

      let targetX = 0;
      let targetY = 0;
      let targetRotate = 0;

      if (preset === 'stack') {
        targetX = (idx % 2 === 0 ? -1 : 1) * (isMobile ? 5 : 12);
        targetY = (idx - 2.5) * (isMobile ? 24 : 36);
        targetRotate = (idx % 2 === 0 ? -1.5 : 1.5);
      } else if (preset === 'wall') {
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        targetX = (col - 1) * (isMobile ? 102 : 200);
        targetY = (row - 0.5) * (isMobile ? 70 : 110);
        targetRotate = 0;
      } else if (preset === 'pyramid') {
        if (idx < 3) {
          targetX = (idx - 1) * (isMobile ? 100 : 190);
          targetY = isMobile ? 30 : 50;
        } else if (idx < 5) {
          targetX = (idx - 3.5) * (isMobile ? 100 : 190);
          targetY = isMobile ? -30 : -50;
        } else {
          targetX = 0;
          targetY = isMobile ? -85 : -140;
        }
        targetRotate = 0;
      }

      gsap.to(el, {
        x: targetX,
        y: targetY,
        rotation: targetRotate,
        duration: 0.8,
        stagger: 0.04,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    });

    if (triggerConfetti) {
      confetti({
        particleCount: isMobile ? 20 : 35,
        spread: 55,
        origin: { y: 0.8 },
        colors: ['#FF5500', '#FFE600', '#F4F4F0']
      });
    }
  };

  const handleScatter = () => {
    setComposed(false);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

    boxes.forEach((b, idx) => {
      const el = document.getElementById(b.id);
      if (!el) return;
      
      const spreadX = isMobile ? 55 : 140;
      const spreadY = isMobile ? 35 : 70;
      const randomX = (idx % 2 === 0 ? -1 : 1) * (spreadX * 0.6 + Math.random() * (spreadX * 0.5));
      const randomY = (Math.floor(idx / 2) - 1) * spreadY + (Math.random() - 0.5) * 15;
      const randomRot = (Math.random() - 0.5) * 10;

      gsap.to(el, {
        x: randomX,
        y: randomY,
        rotation: randomRot,
        duration: 0.8,
        ease: 'back.out(1.2)',
        overwrite: 'auto'
      });
    });
  };

  useEffect(() => {
    handleCompose('wall', false);

    const handleResize = () => {
      if (composedRef.current) {
        handleCompose(activePresetRef.current, false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="composition" ref={containerRef} className="py-14 sm:py-24 px-3 sm:px-6 lg:px-8 bg-industrial-dark border-b-4 border-industrial-border relative overflow-hidden max-w-full scroll-mt-16">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-industrial-dots opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-industrial-amber text-industrial-black px-2.5 py-1 font-mono text-[10px] sm:text-xs font-black uppercase max-w-full truncate">
            <Package className="w-3.5 h-3.5 shrink-0" />
            <span>SIGNATURE INTERACTION // BOX PHYSICS ENGINE</span>
          </div>
          <h2 className="font-headline font-black text-2xl sm:text-5xl uppercase tracking-tight text-industrial-light">
            BOXES <span className="text-industrial-amber">MOVE.</span> <br />
            COMPOSITION <span className="text-industrial-yellow">FORMS.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-industrial-light/70 px-2">
            Watch individual cargo containers translation-calculate across physical coordinates to form a balanced composition.
          </p>
        </div>

        {/* Control Bar for Preset Formations - Razor Sharp Alignment */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 sm:mb-12 font-mono text-[11px] sm:text-xs font-bold uppercase">
          <button
            onClick={() => handleCompose('stack')}
            className={`h-10 sm:h-11 px-3.5 sm:px-5 border-2 transition-colors flex items-center gap-2 rounded-none ${
              activePreset === 'stack' && composed
                ? 'bg-industrial-amber text-industrial-black border-industrial-amber font-extrabold'
                : 'bg-industrial-black text-industrial-light border-industrial-border hover:border-industrial-amber hover:text-industrial-amber'
            }`}
          >
            <Layers className="w-4 h-4 shrink-0" />
            <span><span className="hidden sm:inline">01 // </span>STACK</span>
          </button>

          <button
            onClick={() => handleCompose('wall')}
            className={`h-10 sm:h-11 px-3.5 sm:px-5 border-2 transition-colors flex items-center gap-2 rounded-none ${
              activePreset === 'wall' && composed
                ? 'bg-industrial-yellow text-industrial-black border-industrial-yellow font-extrabold'
                : 'bg-industrial-black text-industrial-light border-industrial-border hover:border-industrial-yellow hover:text-industrial-yellow'
            }`}
          >
            <Box className="w-4 h-4 shrink-0" />
            <span><span className="hidden sm:inline">02 // </span>WALL</span>
          </button>

          <button
            onClick={() => handleCompose('pyramid')}
            className={`h-10 sm:h-11 px-3.5 sm:px-5 border-2 transition-colors flex items-center gap-2 rounded-none ${
              activePreset === 'pyramid' && composed
                ? 'bg-industrial-light text-industrial-black border-industrial-light font-extrabold'
                : 'bg-industrial-black text-industrial-light border-industrial-border hover:border-industrial-light'
            }`}
          >
            <LayoutGrid className="w-4 h-4 shrink-0" />
            <span><span className="hidden sm:inline">03 // </span>PYRAMID</span>
          </button>

          <button
            onClick={handleScatter}
            className={`h-10 sm:h-11 px-3.5 sm:px-5 border-2 transition-colors flex items-center gap-2 rounded-none ${
              !composed
                ? 'bg-industrial-amber text-industrial-black border-industrial-amber font-extrabold'
                : 'bg-industrial-black text-industrial-amber border-industrial-amber/60 hover:bg-industrial-amber hover:text-industrial-black'
            }`}
          >
            <RefreshCw className="w-4 h-4 shrink-0" />
            <span>SCATTER</span>
          </button>
        </div>

        {/* Interactive Box Canvas Area */}
        <div className="w-full min-h-[320px] sm:min-h-[460px] bg-industrial-black border-2 sm:border-4 border-industrial-light p-2 sm:p-12 relative flex items-center justify-center shadow-brutal-amber overflow-hidden">
          
          <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 font-mono text-[8px] sm:text-[10px] uppercase text-industrial-amber flex items-center gap-1">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-industrial-amber rounded-full animate-ping"></span>
            <span>STATUS: {composed ? `LOCKED (${activePreset.toUpperCase()})` : 'SCATTERED'}</span>
          </div>

          <div className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 font-mono text-[8px] sm:text-[10px] text-industrial-light/40">
            [INTERACTIVE DECK]
          </div>

          {/* Render Moving Boxes */}
          <div className="relative w-full max-w-4xl h-64 sm:h-80 flex items-center justify-center">
            {boxes.map((box) => (
              <div
                key={box.id}
                id={box.id}
                className={`absolute w-32 sm:w-56 p-2 sm:p-3.5 ${box.bg} ${box.text} border-2 sm:border-4 ${box.border} shadow-brutal-sm sm:shadow-brutal cursor-pointer transition-shadow hover:z-50 hover:shadow-brutal-lg flex flex-col justify-between h-20 sm:h-32 select-none`}
              >
                <div className="flex justify-between items-center font-mono text-[7.5px] sm:text-[9px] font-extrabold uppercase">
                  <span>[{box.id.toUpperCase()}]</span>
                  <span className="truncate max-w-[65px] sm:max-w-[80px]">{box.category}</span>
                </div>
                <div>
                  <div className="font-headline font-black text-[11px] sm:text-base uppercase leading-tight line-clamp-1 sm:line-clamp-none">
                    {box.name}
                  </div>
                </div>
                <div className="flex justify-between items-center font-mono text-[7.5px] sm:text-[10px] border-t border-current/20 pt-0.5 sm:pt-1 font-bold">
                  <span>{box.weight}</span>
                  <Package className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-8 bg-industrial-black border-2 border-industrial-border p-4 font-mono text-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-industrial-light/80">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-industrial-amber" />
            <span>PHYSICAL LOAD-BALANCING ALGORITHM GUARANTEES ZERO DAMAGE</span>
          </div>
          <div className="text-industrial-yellow font-bold flex items-center gap-1">
            <span>DISPATCH CAPACITY VERIFIED</span>
            <MoveRight className="w-4 h-4" />
          </div>
        </div>

      </div>
    </section>
  );
};
