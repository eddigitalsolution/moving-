import React from 'react';
import { ShieldCheck, Truck, Lock, FileText, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SITE AUDIT & VOLUMETRIC METRICS',
      tag: '[STAGE: PRE-DISPATCH]',
      desc: 'Our dispatch team conducts a 3D digital floorplan inspection or video walkthrough to calculate total volume (CBM), fragile item count, and vehicle clearance requirements.',
      icon: FileText,
      color: 'border-industrial-amber text-industrial-amber'
    },
    {
      num: '02',
      title: 'HEAVY CRATING & BARCODE TAGGING',
      tag: '[STAGE: ZERO DAMAGE WRAP]',
      desc: 'On moving day, our team applies ISPM-15 wooden crating, corner edge guards, and multi-layer bubble wrap. Every box receives a unique inventory tracking barcode tag.',
      icon: Lock,
      color: 'border-industrial-yellow text-industrial-yellow'
    },
    {
      num: '03',
      title: 'GPS TAIL-LIFT CONVOY TRANSPORT',
      tag: '[STAGE: IN-TRANSIT]',
      desc: 'Air-suspension trucks fitted with hydraulic tail-lifts handle transport. Clients receive real-time encrypted WhatsApp live convoy location updates.',
      icon: Truck,
      color: 'border-industrial-light text-industrial-light'
    },
    {
      num: '04',
      title: 'UNCRATING & FURNITURE POSITIONING',
      tag: '[STAGE: FINAL DEPLOYMENT]',
      desc: 'We unpack, reassemble all bed frames and IT racks, position furniture according to your floorplan blueprint, and haul away all packing debris.',
      icon: ShieldCheck,
      color: 'border-industrial-amber text-industrial-amber'
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 bg-industrial-black border-b-4 border-industrial-border relative scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-industrial-gray pb-6">
          <div>
            <div className="font-mono text-xs text-industrial-yellow uppercase tracking-widest mb-2">
              // DISPATCH PROTOCOL & STEPS
            </div>
            <h2 className="font-headline font-black text-2xl sm:text-5xl md:text-6xl uppercase tracking-tight text-industrial-light leading-tight">
              HOW WE <span className="text-industrial-amber">MOVE EVERYTHING.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-industrial-light/60 mt-4 md:mt-0">
            [4-STEP STRICT LOGISTICS PIPELINE]
          </div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="bg-industrial-dark border-4 border-industrial-border p-6 shadow-brutal flex flex-col justify-between hover:border-industrial-amber transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-industrial-gray pb-3">
                    <span className="font-headline font-black text-5xl text-industrial-light group-hover:text-industrial-amber transition-colors">
                      {step.num}
                    </span>
                    <Icon className="w-6 h-6 text-industrial-amber" />
                  </div>

                  <div className="font-mono text-[10px] uppercase font-bold text-industrial-yellow mb-2">
                    {step.tag}
                  </div>

                  <h3 className="font-headline font-extrabold text-xl uppercase text-industrial-light leading-snug mb-3">
                    {step.title}
                  </h3>

                  <p className="font-mono text-xs text-industrial-light/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-3 border-t border-industrial-gray flex items-center justify-between font-mono text-[10px] text-industrial-light/50">
                  <span>PROTOCOL #{step.num}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-industrial-amber" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Guarantee */}
        <div className="mt-12 sm:mt-16 bg-industrial-amber text-industrial-black border-4 border-industrial-black p-5 sm:p-8 shadow-brutal flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1">
            <div className="font-mono text-[10px] sm:text-xs font-black uppercase tracking-wider">
              // TIMELINE GUARANTEE GUARDIAN
            </div>
            <div className="font-headline font-black text-lg sm:text-2xl md:text-3xl uppercase tracking-tight leading-snug">
              IF WE DELAY BEYOND 30 MINS, YOUR LOCAL TRANSPORT IS 50% OFF.
            </div>
          </div>
          <a
            href={`https://wa.me/601130719502?text=${encodeURIComponent("Hello! I am contacting dispatch to lock in my moving schedule under your 30-minute timeline guarantee.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs sm:text-sm font-black uppercase px-5 py-3.5 bg-industrial-black text-industrial-light border-2 border-industrial-black hover:bg-industrial-yellow hover:text-industrial-black transition-all shadow-brutal-sm text-center shrink-0"
          >
            DISPATCH OPERATOR (+60 11-3071 9502)
          </a>
        </div>

      </div>
    </section>
  );
};
