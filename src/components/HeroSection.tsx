import React, { useEffect, useRef } from 'react';
import { PackageCheck, Truck, ShieldAlert, Layers, Server, Home, Box, ArrowUpRight, Phone } from 'lucide-react';
import gsap from 'gsap';

interface HeroSectionProps {
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCalculator }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth entrance for the 3 cargo manifest cards
      if (cardsRef.current?.children) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            delay: 0.2
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const cargoCards = [
    {
      id: 'it-datacenter',
      code: 'CRATE #8802-A',
      category: 'COMMERCIAL & IT',
      icon: Server,
      title: 'Server Racks & Workstations',
      specs: 'Shockproof foam casing • Anti-static wraps • Overnight swap',
      weight: '340 KG',
      status: 'DISPATCH READY',
      accentColor: 'border-industrial-amber text-industrial-amber',
      badgeBg: 'bg-industrial-amber text-industrial-black'
    },
    {
      id: 'luxury-residential',
      code: 'CONTAINER #104-B',
      category: 'RESIDENTIAL & PENTHOUSE',
      icon: Home,
      title: 'Luxury Estates & Furniture',
      specs: 'Full blanket padding • Precision dis/assembly • White-glove setup',
      weight: '520 KG',
      status: 'LOADED',
      accentColor: 'border-industrial-yellow text-industrial-yellow',
      badgeBg: 'bg-industrial-yellow text-industrial-black'
    },
    {
      id: 'fine-art-vault',
      code: 'VAULT #09-ISPM',
      category: 'HIGH-VALUE & ARTWORK',
      icon: Box,
      title: 'Timber Crating & Climate Vault',
      specs: 'ISPM-15 heat-treated wood • Humidity lock • RM1M goods insurance',
      weight: '180 KG',
      status: 'SEALED',
      accentColor: 'border-industrial-light text-industrial-light',
      badgeBg: 'bg-industrial-light text-industrial-black'
    }
  ];

  return (
    <section ref={heroRef} className="relative min-h-[92vh] pt-24 sm:pt-28 pb-12 sm:pb-14 px-3 sm:px-6 lg:px-8 bg-industrial-black bg-industrial-grid flex flex-col justify-between overflow-hidden border-b-4 border-industrial-border max-w-full">
      
      {/* Top Telemetry Header Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] sm:text-xs text-industrial-light/80 mb-6 sm:mb-8 z-10 border-b border-industrial-border/60 pb-2.5">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-industrial-dark px-2.5 sm:px-3 py-1 border border-industrial-border max-w-full">
          <span className="w-2 h-2 bg-industrial-amber rounded-full animate-pulse shrink-0"></span>
          <span className="text-industrial-amber font-bold">SYSTEM // TELEMETRY</span>
          <span className="text-industrial-light/40">|</span>
          <span className="truncate">48 CONVOYS ACTIVE</span>
        </div>

        <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-[11px]">
          <span className="text-industrial-yellow hidden md:inline">[KLANG VALLEY • PENANG • JB • SG]</span>
          <span className="bg-industrial-gray px-2 py-0.5 border border-industrial-border text-industrial-light font-bold shrink-0">
            RAPID DISPATCH &lt; 45 MIN
          </span>
        </div>
      </div>

      {/* Centerpiece: Monumental Headline & Narrative Block */}
      <div className="max-w-7xl mx-auto w-full my-auto z-10 space-y-6 sm:space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end">
          
          {/* Left: Giant Typographic Hook */}
          <div className="lg:col-span-8 space-y-3 sm:space-y-4 max-w-full">
            <div className="inline-block bg-industrial-amber text-industrial-black font-mono text-[10px] sm:text-xs font-black px-2 sm:px-2.5 py-1 tracking-wider uppercase max-w-full truncate">
              // INDUSTRIAL PRECISION RELOCATION
            </div>
            
            <h1 className="font-headline font-black leading-[0.92] tracking-tighter uppercase text-industrial-light select-none max-w-full">
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem]">MOVE</span>
              <span className="block text-industrial-amber whitespace-nowrap text-[9vw] sm:text-6xl md:text-7xl lg:text-[5.2rem]">WITHOUT</span>
              <span className="block text-transparent text-3xl sm:text-5xl md:text-6xl lg:text-[4.8rem]" style={{ WebkitTextStroke: '1.5px #FFE600' }}>THE CHAOS.</span>
            </h1>
          </div>

          {/* Right: Narrative Pitch & Quick Actions */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-5 max-w-full">
            <p className="font-mono text-xs sm:text-base text-industrial-light/80 border-l-2 border-industrial-amber pl-3 sm:pl-4 leading-relaxed max-w-full">
              Zero excuses. Zero breakage. We relocate high-value assets, luxury estates, and complete corporate headquarters with military-grade logistics protocol.
            </p>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-1 w-full">
              <button
                onClick={onOpenCalculator}
                id="hero-calculator-trigger"
                className="font-mono text-[11px] sm:text-sm font-black uppercase px-3.5 sm:px-5 py-3 sm:py-3.5 bg-industrial-amber text-industrial-black border-2 border-industrial-black shadow-brutal hover:bg-industrial-yellow transition-all flex items-center justify-center gap-1.5 sm:gap-2 w-full max-w-full text-center"
              >
                <Layers className="w-4 h-4 stroke-[2.5] shrink-0" />
                <span className="truncate">CALCULATE VOLUMETRIC QUOTE</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3] shrink-0" />
              </button>

              <a
                href={`https://wa.me/601130719502?text=${encodeURIComponent("Hello! I need rapid logistics dispatch for my upcoming asset relocation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold uppercase px-3.5 sm:px-4 py-2.5 sm:py-3 border border-industrial-light/40 text-industrial-light hover:border-industrial-amber hover:text-industrial-amber transition-all flex items-center justify-center gap-2 bg-industrial-dark/60 text-center w-full max-w-full"
              >
                <Phone className="w-3.5 h-3.5 text-industrial-amber shrink-0" />
                <span>WhatsApp (+60 11-3071 9502)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Crate Manifest Cards Row (3-Column Architecture) */}
        <div className="pt-2">
          <div className="flex justify-between items-center font-mono text-[11px] sm:text-xs text-industrial-light/60 mb-2.5 sm:mb-3">
            <span className="text-industrial-amber font-bold flex items-center gap-1.5 uppercase">
              <Truck className="w-3.5 h-3.5" /> LIVE DISPATCH MANIFEST // SPEC DECK
            </span>
            <span className="text-[10px] sm:text-[11px] hidden sm:inline">[CLICK CARD TO ESTIMATE ASSET]</span>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            {cargoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  onClick={onOpenCalculator}
                  className="bg-industrial-dark border-2 border-industrial-border hover:border-industrial-amber p-3.5 sm:p-4 shadow-brutal-sm hover:shadow-brutal hover:-translate-y-0.5 transition-all cursor-pointer flex flex-col justify-between min-h-[140px] sm:min-h-[160px] group"
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] pb-1.5 sm:pb-2 border-b border-industrial-border">
                      <span className="text-industrial-light/50 font-bold">{card.code}</span>
                      <span className={`px-1.5 py-0.5 font-black uppercase text-[8px] sm:text-[9px] ${card.badgeBg}`}>
                        {card.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-0.5">
                      <div className="p-1 sm:p-1.5 bg-industrial-black border border-industrial-border group-hover:border-industrial-amber transition-colors">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-industrial-amber" />
                      </div>
                      <div className="font-headline font-black text-sm sm:text-base uppercase text-industrial-light group-hover:text-industrial-amber transition-colors leading-tight">
                        {card.title}
                      </div>
                    </div>

                    <p className="font-mono text-[10px] sm:text-[11px] text-industrial-light/70 leading-snug line-clamp-2 sm:line-clamp-none">
                      {card.specs}
                    </p>
                  </div>

                  <div className="mt-2.5 sm:mt-3 pt-2 border-t border-industrial-border flex items-center justify-between font-mono text-[9px] sm:text-[10px]">
                    <span className="text-industrial-light/50 uppercase truncate max-w-[150px]">{card.category}</span>
                    <span className="text-industrial-yellow font-extrabold bg-industrial-black px-1.5 sm:px-2 py-0.5 border border-industrial-yellow/30 shrink-0">
                      LOAD: {card.weight}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Industrial Bottom Trust Ticker */}
      <div className="max-w-7xl mx-auto w-full mt-8 sm:mt-10 pt-4 border-t border-industrial-border grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 text-center font-mono text-[10px] sm:text-xs text-industrial-light/70 z-10">
        <div className="flex items-center justify-center gap-1.5 p-2 bg-industrial-dark/50 border border-industrial-border/60">
          <ShieldAlert className="w-3.5 h-3.5 text-industrial-amber shrink-0" />
          <span className="font-bold truncate">RM 1M INSURANCE</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 p-2 bg-industrial-dark/50 border border-industrial-border/60">
          <PackageCheck className="w-3.5 h-3.5 text-industrial-yellow shrink-0" />
          <span className="truncate">ISPM-15 CRATING</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 p-2 bg-industrial-dark/50 border border-industrial-border/60">
          <Truck className="w-3.5 h-3.5 text-industrial-amber shrink-0" />
          <span className="truncate">GPS CONVOY FLEET</span>
        </div>
        <div className="flex items-center justify-center gap-1.5 p-2 bg-industrial-dark/50 border border-industrial-border/60">
          <span className="text-industrial-yellow font-black">★ 4.98</span>
          <span className="truncate">4,800+ MOVES</span>
        </div>
      </div>

    </section>
  );
};
