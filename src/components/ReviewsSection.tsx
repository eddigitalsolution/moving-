import React from 'react';
import { Star } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 'REV-901',
      name: 'MARCUS TAN',
      role: 'HEAD OF OPERATIONS',
      company: 'FINTECH LABS KL',
      rating: 5,
      date: 'AUG 2026',
      moveType: 'CORPORATE OFFICE MIGRATION (140 WORKSTATIONS)',
      quote: 'Moved our entire 12,000 sqft Bangsar office over Saturday night. Server racks were un-crated and booted up by 6:00 AM Sunday. Absolutely zero hardware downtime.'
    },
    {
      id: 'REV-902',
      name: 'DR. SOPHIA LIN',
      role: 'RESIDENT OWNER',
      company: 'DAMANSARA HEIGHTS BUNGALOW',
      rating: 5,
      date: 'JUL 2026',
      moveType: 'RESIDENTIAL BUNGALOW + GRAND PIANO',
      quote: 'The team built custom timber crates right in my driveway for our Italian marble dining table and grand piano. Not a single scratch on the floorboards or walls.'
    },
    {
      id: 'REV-903',
      name: 'RIVESH SHARMA',
      role: 'GALLERY DIRECTOR',
      company: 'MODERN ART VAULT',
      rating: 5,
      date: 'AUG 2026',
      moveType: 'ARTWORK & VAULT STORAGE',
      quote: 'Brutalist efficiency is an understatement. Barcode tracked every canvas, custom bubble-encapsulated oil paintings, and stored them in climate vaults seamlessly.'
    }
  ];

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 bg-industrial-dark border-b-4 border-industrial-border relative scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-industrial-gray pb-6">
          <div>
            <div className="font-mono text-xs text-industrial-amber uppercase tracking-widest mb-2">
              // VERIFIED CLIENT AUDIT LOGS
            </div>
            <h2 className="font-headline font-black text-2xl sm:text-5xl md:text-6xl uppercase tracking-tight text-industrial-light leading-tight">
              OPERATIONAL <span className="text-industrial-yellow">REVIEWS.</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-industrial-light/60 mt-4 md:mt-0">
            [VERIFIED BY INDEPENDENT MOVES DATABASE]
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-industrial-black border-4 border-industrial-border p-6 shadow-brutal flex flex-col justify-between hover:border-industrial-amber transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] text-industrial-amber border-b border-industrial-gray pb-3 mb-4">
                  <span>[{rev.id}]</span>
                  <span>{rev.date}</span>
                </div>

                <div className="flex items-center gap-1 text-industrial-yellow mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-industrial-yellow stroke-none" />
                  ))}
                </div>

                <div className="font-mono text-[10px] text-industrial-yellow font-bold uppercase bg-industrial-dark px-2.5 py-1 border border-industrial-gray mb-4 inline-block">
                  {rev.moveType}
                </div>

                <p className="font-mono text-xs text-industrial-light/80 leading-relaxed italic border-l-2 border-industrial-amber pl-3 mb-6">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-industrial-gray flex items-center gap-3">
                <div className="w-9 h-9 bg-industrial-amber text-industrial-black font-extrabold flex items-center justify-center border border-industrial-black font-mono text-xs">
                  {rev.name.slice(0, 2)}
                </div>
                <div>
                  <div className="font-headline font-extrabold text-sm uppercase text-industrial-light">
                    {rev.name}
                  </div>
                  <div className="font-mono text-[10px] text-industrial-light/50">
                    {rev.role} // {rev.company}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
