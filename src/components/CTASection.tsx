import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  onOpenCalculator: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenCalculator }) => {
  return (
    <section className="py-14 sm:py-24 px-3 sm:px-6 lg:px-8 bg-industrial-black relative overflow-hidden border-b-4 border-industrial-border max-w-full">
      
      {/* Background Industrial Grid */}
      <div className="absolute inset-0 bg-industrial-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-industrial-amber text-industrial-black border-2 sm:border-4 border-industrial-black p-4 sm:p-12 lg:p-14 shadow-brutal-white grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-3 sm:space-y-4">
            <div className="inline-block bg-industrial-black text-industrial-yellow font-mono text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 uppercase">
              // DISPATCH GUARDIAN READY
            </div>
            
            <h2 className="font-headline font-black text-2xl sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-tight break-words">
              READY TO MOVE EVERYTHING WITHOUT THE CHAOS?
            </h2>

            <p className="font-mono text-xs sm:text-base text-industrial-black/90 font-medium max-w-2xl leading-relaxed">
              Lock your dispatch slot today. Our heavy-lift crew and sealed tail-lift trucks are ready to roll within 45 minutes of booking confirmation.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={onOpenCalculator}
              id="cta-calculator-btn"
              className="w-full font-mono text-sm sm:text-base font-black uppercase py-3.5 sm:py-4 px-6 bg-industrial-black text-industrial-light border-4 border-industrial-black shadow-brutal hover:bg-industrial-dark hover:text-industrial-yellow transition-all flex items-center justify-center gap-2"
            >
              <span>GET INSTANT QUOTE</span>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3]" />
            </button>

            <a
              href={`https://wa.me/601130719502?text=${encodeURIComponent("Hello! I would like to book an immediate site survey and dispatch operator for my move.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full font-mono text-xs sm:text-sm font-black uppercase py-3.5 sm:py-4 px-6 bg-industrial-yellow text-industrial-black border-4 border-industrial-black shadow-brutal hover:bg-industrial-light transition-all flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4" />
              <span>WHATSAPP (+60 11-3071 9502)</span>
            </a>
          </div>

        </div>

        {/* Footer info block */}
        <footer className="mt-14 sm:mt-16 pt-8 border-t border-industrial-gray grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs text-industrial-light/60">
          <div className="space-y-1.5">
            <div className="font-headline font-black text-base sm:text-lg text-industrial-light">MOVE EVERYTHING.</div>
            <p className="text-[11px] text-industrial-light/50">Industrial-grade precision moving and crating logistics.</p>
          </div>

          <div className="space-y-1">
            <div className="font-bold text-industrial-amber uppercase">// DISPATCH LINE</div>
            <p className="text-industrial-light">+60 11-3071 9502</p>
            <p className="text-[10px]">24/7 Hotline Support</p>
          </div>

          <div className="space-y-1">
            <div className="font-bold text-industrial-yellow uppercase">// HEADQUARTERS</div>
            <p className="text-industrial-light">Industrial Park Hub, Sector 04</p>
            <p className="text-[10px]">Kuala Lumpur / Klang Valley</p>
          </div>

          <div className="space-y-1">
            <div className="font-bold text-industrial-light uppercase">// OPERATIONAL PROTOCOL</div>
            <p className="text-[11px] text-industrial-light/70">Licensed Heavy Haulage &amp; Crating</p>
            <p className="text-[10px] text-industrial-amber">© {new Date().getFullYear()} MOVE EVERYTHING. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>

      </div>
    </section>
  );
};
