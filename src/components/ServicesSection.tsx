import React, { useState, useEffect } from 'react';
import { Home, Building2, Box, Warehouse, CheckCircle2, ArrowRight, Shield, Clock } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'office' | 'packing' | 'storage'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('office')) {
        setActiveTab('office');
      } else if (hash.includes('packing') || hash.includes('crating')) {
        setActiveTab('packing');
      } else if (hash.includes('storage')) {
        setActiveTab('storage');
      } else if (hash.includes('home')) {
        setActiveTab('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const services = [
    {
      id: 'home',
      title: 'HOME MOVING',
      subtitle: 'RESIDENTIAL PRECISION RELOCATION',
      icon: Home,
      tag: '[SPEC: 1-5 BEDROOM HOUSES & PENTHOUSES]',
      specs: [
        'Dedicated 3-Ton or 5-Ton Sealed Tail-Lift Trucks',
        'Custom Furniture Blanket Wrap & Corner Edge Protectors',
        'Disassembly & Reassembly of Beds, Wardrobes, & Dining Sets',
        'Dedicated On-Site Moving Supervisor'
      ],
      desc: 'From luxury high-rise apartments to multi-story bungalows, we handle residential moves with zero breakage protocols and strict timeline guarantees.'
    },
    {
      id: 'office',
      title: 'OFFICE MOVING',
      subtitle: 'ZERO DOWNTIME COMMERCIAL MIGRATION',
      icon: Building2,
      tag: '[SPEC: CORPORATE HEADQUARTERS & IT RACKS]',
      specs: [
        'Overnight & Weekend Shift Dispatch to Prevent Work Interruption',
        'Server Rack, Workstation, & Monitor Anti-Static Crating',
        'Color-Coded File Box Indexing & Floorplan Mapping',
        'Building Management Permit & Deposit Management'
      ],
      desc: 'Move entire corporate departments overnight. Your staff leaves office A on Friday and resumes operations at office B on Monday morning.'
    },
    {
      id: 'packing',
      title: 'PACKING & CRATING',
      subtitle: 'MILITARY-GRADE ITEM PROTECTION',
      icon: Box,
      tag: '[SPEC: ARTWORK, MARBLE, CRYSTAL & ELECTRONICS]',
      specs: [
        'Custom On-Site ISPM-15 Heat-Treated Timber Crate Construction',
        'Multi-Layer Heavy Duty Bubble & Stretch Film Wrapping',
        'Precision Wardrobe Boxes with Built-in Hanging Bars',
        'Fragile Glassware & Fine China Dividers'
      ],
      desc: 'We construct bespoke wooden crates and use industrial-strength padding for high-value artwork, pianos, antiques, and sensitive lab gear.'
    },
    {
      id: 'storage',
      title: 'SECURED STORAGE',
      subtitle: 'CLIMATE CONTROLLED LOGISTICS VAULTS',
      icon: Warehouse,
      tag: '[SPEC: SHORT & LONG TERM VAULT STORAGE]',
      specs: [
        '24/7 CCTV Monitoring & Biometric Access Control',
        'Dust-Proof & Moisture Controlled Storage Units',
        'Itemized Barcoded Storage Inventory System',
        'Flexible Monthly or Annual Vault Rental Plans'
      ],
      desc: 'Need temporary buffer space between leases? Store your furniture and archives inside sealed, climate-regulated industrial vaults.'
    }
  ];

  const current = services.find(s => s.id === activeTab)!;

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-industrial-black border-b-4 border-industrial-border relative scroll-mt-16">
      {/* Invisible Anchor Targets for Slugs */}
      <div id="home-moving" className="absolute -top-20 left-0"></div>
      <div id="office-moving" className="absolute -top-20 left-0"></div>
      <div id="crating" className="absolute -top-20 left-0"></div>
      <div id="packing" className="absolute -top-20 left-0"></div>
      <div id="storage" className="absolute -top-20 left-0"></div>
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-industrial-gray pb-6">
          <div>
            <div className="font-mono text-xs text-industrial-amber uppercase tracking-widest mb-2">
              // CORE CAPABILITIES & SERVICES
            </div>
            <h2 className="font-headline font-black text-2xl sm:text-5xl md:text-6xl uppercase tracking-tight text-industrial-light leading-tight">
              OPERATIONAL <br className="xs:hidden" />
              <span className="text-industrial-amber">MODULES</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-industrial-light/60 mt-4 md:mt-0">
            [SELECT MODULE TO EXAMINE PROTOCOL]
          </div>
        </div>

        {/* Tab Buttons Bar - Brutalist Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id as any)}
                className={`font-mono text-left p-3 sm:p-4 border-2 transition-colors flex flex-col justify-between h-28 sm:h-32 ${
                  isActive
                    ? 'bg-industrial-amber text-industrial-black border-industrial-amber font-extrabold'
                    : 'bg-industrial-dark text-industrial-light border-industrial-border hover:border-industrial-amber'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${isActive ? 'text-industrial-black' : 'text-industrial-amber'}`} />
                  <span className="text-[9px] sm:text-[10px] font-bold opacity-70">
                    0{services.indexOf(service) + 1}
                  </span>
                </div>
                <div>
                  <div className="font-headline font-extrabold text-sm sm:text-lg leading-tight uppercase">
                    {service.title}
                  </div>
                  <div className={`text-[9px] sm:text-[10px] uppercase font-bold ${isActive ? 'text-industrial-black/80' : 'text-industrial-amber'}`}>
                    {service.subtitle.split(' ')[0]} LOGISTICS
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Service Detailed Display Panel */}
        <div className="bg-industrial-dark border-4 border-industrial-light p-5 sm:p-10 shadow-brutal-amber grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-block bg-industrial-black text-industrial-yellow font-mono text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 border border-industrial-yellow">
              {current.tag}
            </div>

            <h3 className="font-headline font-black text-2xl sm:text-5xl uppercase text-industrial-light leading-tight">
              {current.title}
            </h3>

            <p className="font-mono text-xs sm:text-base text-industrial-light/80 leading-relaxed border-l-2 border-industrial-amber pl-3 sm:pl-4">
              {current.desc}
            </p>

            <div className="space-y-3 pt-2">
              <div className="font-mono text-xs text-industrial-amber font-bold uppercase tracking-wider">
                // MODULE INCLUSIONS &amp; SPECIFICATIONS
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start gap-2 font-mono text-[11px] sm:text-xs text-industrial-light bg-industrial-black/70 p-2.5 sm:p-3 border border-industrial-border">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-industrial-amber shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onSelectService(current.title)}
                className="font-mono text-xs sm:text-sm font-black uppercase px-6 py-3 sm:py-3.5 bg-industrial-yellow text-industrial-black border-2 border-industrial-black shadow-brutal hover:bg-industrial-amber transition-all flex items-center justify-center gap-2"
              >
                <span>BOOK THIS MODULE</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
              
              <a
                href={`https://wa.me/601130719502?text=${encodeURIComponent(`Hello! I am interested in custom requirements for the ${current.title} module.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-industrial-light/80 hover:text-industrial-amber underline underline-offset-4 text-center sm:text-left py-1"
              >
                Inquire custom requirements →
              </a>
            </div>

          </div>

          {/* Right Visual Industrial Badge */}
          <div className="lg:col-span-5 bg-industrial-black border-2 border-industrial-amber p-6 font-mono flex flex-col justify-between h-full min-h-[300px] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-industrial-amber text-industrial-black font-black text-xs px-3 py-1 uppercase">
              STATUS: READY
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="text-4xl font-headline font-black text-industrial-light opacity-20">
                0{services.findIndex(s => s.id === activeTab) + 1} // 04
              </div>
              
              <div className="p-4 bg-industrial-dark border border-industrial-border space-y-2">
                <div className="flex items-center gap-2 text-xs text-industrial-amber font-bold">
                  <Shield className="w-4 h-4" />
                  <span>INSURANCE COVERAGE INCLUDED</span>
                </div>
                <p className="text-[11px] text-industrial-light/70">
                  All cargo under this module is backed by comprehensive goods-in-transit liability protection.
                </p>
              </div>

              <div className="p-4 bg-industrial-dark border border-industrial-border space-y-2">
                <div className="flex items-center gap-2 text-xs text-industrial-yellow font-bold">
                  <Clock className="w-4 h-4" />
                  <span>GUARANTEED ARRIVAL WINDOW</span>
                </div>
                <p className="text-[11px] text-industrial-light/70">
                  Strict 15-minute dispatch tolerance. Delay compensation guaranteed.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-industrial-border/60 text-[10px] text-industrial-light/50 flex justify-between">
              <span>DISPATCH ID: #MOD-{activeTab.toUpperCase()}</span>
              <span>VERIFIED AGENT</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
