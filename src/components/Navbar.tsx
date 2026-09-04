import React, { useState, useEffect } from 'react';
import { Package, Phone, ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalculator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-industrial-black/95 backdrop-blur-md border-b border-industrial-border py-3' : 'bg-industrial-black/80 backdrop-blur-sm py-4 border-b border-industrial-border/40'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              history.pushState(null, '', window.location.pathname);
            }} 
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 bg-industrial-amber text-industrial-black font-extrabold flex items-center justify-center border-2 border-industrial-black shadow-brutal-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
              <Package className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="font-headline text-2xl font-black tracking-tighter text-industrial-light">
              MOVE<span className="text-industrial-amber">.</span>
            </span>
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 font-mono text-xs font-bold tracking-wider text-industrial-light/90">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                history.pushState(null, '', window.location.pathname);
              }} 
              className="hover:text-industrial-amber transition-colors uppercase whitespace-nowrap"
            >
              Home
            </a>
            
            {/* Operational Modules Link */}
            <a 
              href="#services" 
              onClick={() => window.location.hash = '#services'} 
              className="hover:text-industrial-amber transition-colors uppercase whitespace-nowrap flex items-center gap-1 font-extrabold text-industrial-amber"
            >
              Operational Modules
            </a>

            <a href="#process" className="hover:text-industrial-amber transition-colors uppercase whitespace-nowrap">Protocol</a>
            <a href="#reviews" className="hover:text-industrial-amber transition-colors uppercase whitespace-nowrap">Reviews</a>
            <a href="#composition" className="hover:text-industrial-yellow transition-colors uppercase whitespace-nowrap flex items-center gap-1.5 text-industrial-yellow bg-industrial-dark px-2.5 py-1 border border-industrial-yellow/30">
              <span className="w-2 h-2 rounded-full bg-industrial-yellow animate-pulse"></span>
              Box Physics
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={`https://wa.me/601130719502?text=${encodeURIComponent("Hello! I would like to inquire about your professional moving and relocation services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase px-3 py-1.5 border border-industrial-light/40 text-industrial-light hover:border-industrial-amber hover:text-industrial-amber font-bold transition-all flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-industrial-amber" />
              +60 11-3071 9502
            </a>
            
            <button
              onClick={onOpenCalculator}
              id="nav-dispatch-btn"
              className="font-mono text-xs font-bold uppercase px-4 py-1.5 bg-industrial-amber text-industrial-black border-2 border-industrial-black shadow-brutal-sm hover:bg-industrial-yellow hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-1"
            >
              Estimate Move <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 border border-industrial-border text-industrial-light bg-industrial-dark"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-industrial-black border-b-2 border-industrial-amber px-6 py-6 font-mono flex flex-col gap-3 max-h-[85vh] overflow-y-auto">
          <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault(); 
              setMobileMenuOpen(false); 
              window.scrollTo({ top: 0, behavior: 'smooth' }); 
              history.pushState(null, '', window.location.pathname);
            }} 
            className="text-base uppercase text-industrial-light hover:text-industrial-amber py-1.5 border-b border-industrial-border"
          >
            Home
          </a>
          <a 
            href="#services" 
            onClick={() => { setMobileMenuOpen(false); window.location.hash = '#services'; }} 
            className="text-base uppercase text-industrial-amber font-bold py-1.5 border-b border-industrial-border"
          >
            Operational Modules
          </a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="text-base uppercase text-industrial-light hover:text-industrial-amber py-1.5 border-b border-industrial-border">Dispatch Protocol</a>
          <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-base uppercase text-industrial-light hover:text-industrial-amber py-1.5 border-b border-industrial-border">Client Reviews</a>
          <a href="#composition" onClick={() => setMobileMenuOpen(false)} className="text-base uppercase text-industrial-yellow py-1.5 border-b border-industrial-border">Box Physics Engine</a>

          <div className="pt-3 flex flex-col gap-2.5">
            <a 
              href={`https://wa.me/601130719502?text=${encodeURIComponent("Hello! I would like to inquire about your professional moving and relocation services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-mono text-xs uppercase py-2.5 border border-industrial-light/40 text-industrial-light font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-industrial-amber" />
              WhatsApp: +60 11-3071 9502
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCalculator(); }}
              className="w-full font-mono text-xs font-bold uppercase py-2.5 bg-industrial-amber text-industrial-black border-2 border-industrial-black shadow-brutal-sm flex items-center justify-center gap-1.5"
            >
              Calculate Quote Now <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
