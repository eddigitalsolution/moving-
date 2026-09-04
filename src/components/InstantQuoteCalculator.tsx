import React, { useState } from 'react';
import { Calculator, Truck, Check, X, Phone } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const InstantQuoteCalculator: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [propertyType, setPropertyType] = useState<string>('apartment');
  const [rooms, setRooms] = useState<number>(2);
  const [hasHeavyAssets, setHasHeavyAssets] = useState<boolean>(true);
  const [needPacking, setNeedPacking] = useState<boolean>(true);
  const [needStorage, setNeedStorage] = useState<boolean>(false);
  const [distanceKm, setDistanceKm] = useState<number>(25);

  if (!isOpen) return null;

  // Calculation Logic
  const basePrice = propertyType === 'bungalow' ? 1200 : propertyType === 'office' ? 1500 : propertyType === 'condo' ? 750 : 550;
  const roomCost = rooms * 180;
  const heavyCost = hasHeavyAssets ? 300 : 0;
  const packingCost = needPacking ? rooms * 120 : 0;
  const storageCost = needStorage ? 450 : 0;
  const distanceCost = distanceKm * 4;

  const totalEstimate = basePrice + roomCost + heavyCost + packingCost + storageCost + distanceCost;
  const recommendedTruck = totalEstimate > 2200 ? '5-TON TAIL LIFT HYDRAULIC' : totalEstimate > 1200 ? '3-TON BOX TRUCK' : '1-TON HIGH CUBE VAN';

  const handleWhatsAppBooking = () => {
    const message = `*NEW DISPATCH REQUEST - MOVE EVERYTHING*
Property: ${propertyType.toUpperCase()} (${rooms} Rooms)
Distance: ${distanceKm} km
Heavy Assets (Piano/Safe/Rack): ${hasHeavyAssets ? 'YES' : 'NO'}
Full Crate Packing: ${needPacking ? 'YES' : 'NO'}
Vault Storage: ${needStorage ? 'YES' : 'NO'}
---------------------------------
ESTIMATED PRICE: MYR ${totalEstimate.toLocaleString()}
RECOMMENDED FLEET: ${recommendedTruck}

Please dispatch quote officer to my location.`;

    window.open(`https://wa.me/601130719502?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-industrial-black/90 backdrop-blur-md overflow-y-auto max-w-full">
      <div className="bg-industrial-dark border-2 sm:border-4 border-industrial-amber w-full max-w-[calc(100vw-16px)] sm:max-w-3xl p-3.5 sm:p-8 shadow-brutal-amber relative my-2 sm:my-8 overflow-x-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-industrial-black border-2 border-industrial-light text-industrial-light hover:bg-industrial-amber hover:text-industrial-black transition-colors z-10"
          aria-label="Close Calculator Modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4 sm:mb-8 border-b-2 border-industrial-gray pb-3 sm:pb-4 pr-8">
          <div className="font-mono text-[9px] sm:text-xs text-industrial-yellow uppercase font-bold tracking-widest mb-1 flex items-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="truncate">VOLUMETRIC DISPATCH ESTIMATOR v3.2</span>
          </div>
          <h2 className="font-headline font-black text-xl sm:text-4xl uppercase text-industrial-light leading-tight">
            CALCULATE <span className="text-industrial-amber">MOVE COST.</span>
          </h2>
        </div>

        {/* Calculator Form Inputs */}
        <div className="space-y-4 sm:space-y-6 font-mono text-xs">
          
          {/* Property Type */}
          <div>
            <label className="block text-industrial-light/80 uppercase font-bold mb-1.5 sm:mb-2 text-[10px] sm:text-xs">
              01 // PROPERTY TYPE
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
              {[
                { id: 'apartment', label: 'APARTMENT' },
                { id: 'condo', label: 'CONDO / HIGH' },
                { id: 'bungalow', label: 'HOUSE / VILLA' },
                { id: 'office', label: 'CORPORATE' }
              ].map(type => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setPropertyType(type.id)}
                  className={`p-2 sm:p-3 border-2 text-center uppercase font-bold transition-colors text-[10px] sm:text-sm truncate ${
                    propertyType === type.id
                      ? 'bg-industrial-amber text-industrial-black border-industrial-amber font-black'
                      : 'bg-industrial-black text-industrial-light border-industrial-border hover:border-industrial-amber'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Rooms Slider & Distance Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
            <div className="bg-industrial-black p-3 sm:p-4 border border-industrial-border space-y-2">
              <div className="flex justify-between font-bold text-industrial-light text-[10px] sm:text-xs">
                <span>02 // ROOM COUNT:</span>
                <span className="text-industrial-yellow">{rooms} ROOMS</span>
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={rooms}
                onChange={(e) => setRooms(parseInt(e.target.value))}
                className="w-full accent-industrial-amber cursor-pointer"
                id="calc-room-slider"
                name="calc-room-slider"
              />
              <div className="flex justify-between text-[9px] sm:text-[10px] text-industrial-light/50">
                <span>1 Room</span>
                <span>8+ Rooms</span>
              </div>
            </div>

            <div className="bg-industrial-black p-3 sm:p-4 border border-industrial-border space-y-2">
              <div className="flex justify-between font-bold text-industrial-light text-[10px] sm:text-xs">
                <span>03 // DISTANCE:</span>
                <span className="text-industrial-yellow">{distanceKm} KM</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={distanceKm}
                onChange={(e) => setDistanceKm(parseInt(e.target.value))}
                className="w-full accent-industrial-amber cursor-pointer"
                id="calc-distance-slider"
                name="calc-distance-slider"
              />
              <div className="flex justify-between text-[9px] sm:text-[10px] text-industrial-light/50">
                <span>5 KM</span>
                <span>200 KM</span>
              </div>
            </div>
          </div>

          {/* Checkbox Options */}
          <div className="space-y-2 sm:space-y-3">
            <span className="block text-industrial-light/80 uppercase font-bold text-[10px] sm:text-xs">
              04 // SPECIAL LOGISTICS MODULES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              
              <button
                type="button"
                onClick={() => setHasHeavyAssets(!hasHeavyAssets)}
                className={`p-2.5 sm:p-3 border-2 flex items-center justify-between transition-all text-[10px] sm:text-xs ${
                  hasHeavyAssets
                    ? 'bg-industrial-yellow text-industrial-black border-industrial-black font-bold'
                    : 'bg-industrial-black text-industrial-light border-industrial-border'
                }`}
              >
                <span>HEAVY SAFE / PIANO</span>
                {hasHeavyAssets && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3] shrink-0" />}
              </button>

              <button
                type="button"
                onClick={() => setNeedPacking(!needPacking)}
                className={`p-2.5 sm:p-3 border-2 flex items-center justify-between transition-all text-[10px] sm:text-xs ${
                  needPacking
                    ? 'bg-industrial-yellow text-industrial-black border-industrial-black font-bold'
                    : 'bg-industrial-black text-industrial-light border-industrial-border'
                }`}
              >
                <span>FULL CRATE PACKING</span>
                {needPacking && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3] shrink-0" />}
              </button>

              <button
                type="button"
                onClick={() => setNeedStorage(!needStorage)}
                className={`p-2.5 sm:p-3 border-2 flex items-center justify-between transition-all text-[10px] sm:text-xs ${
                  needStorage
                    ? 'bg-industrial-yellow text-industrial-black border-industrial-black font-bold'
                    : 'bg-industrial-black text-industrial-light border-industrial-border'
                }`}
              >
                <span>SECURED STORAGE</span>
                {needStorage && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3] shrink-0" />}
              </button>

            </div>
          </div>

          {/* Result Calculation Output Box */}
          <div className="bg-industrial-black border-2 border-industrial-amber p-3.5 sm:p-6 space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-industrial-gray pb-3 sm:pb-4">
              <div>
                <div className="text-[9px] sm:text-[10px] text-industrial-amber font-bold uppercase">ESTIMATED DISPATCH COST</div>
                <div className="font-headline font-black text-2xl sm:text-5xl text-industrial-light">
                  MYR {totalEstimate.toLocaleString()}
                </div>
              </div>
              <div className="sm:text-right">
                <div className="text-[9px] sm:text-[10px] text-industrial-light/60 uppercase">RECOMMENDED FLEET</div>
                <div className="font-mono text-[10px] sm:text-xs font-bold text-industrial-yellow bg-industrial-dark px-2 sm:px-2.5 py-1 border border-industrial-yellow/40 inline-block mt-0.5 sm:mt-1">
                  <Truck className="w-3.5 h-3.5 inline mr-1 shrink-0" />
                  {recommendedTruck}
                </div>
              </div>
            </div>

            <div className="text-[9px] sm:text-[10px] text-industrial-light/60 leading-snug">
              * Includes professional crew of 3-5 movers, protective blankets, fuel, toll, and goods insurance. Final quote locked upon dispatch survey.
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 font-mono text-[11px] sm:text-sm font-black uppercase py-3 sm:py-4 px-3 sm:px-4 bg-industrial-amber text-industrial-black border-2 border-industrial-black shadow-brutal hover:bg-industrial-yellow transition-all flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>LOCK ESTIMATE VIA WHATSAPP (+60 11-3071 9502)</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 sm:px-5 py-2.5 sm:py-4 bg-industrial-black text-industrial-light border-2 border-industrial-light hover:bg-industrial-gray transition-colors text-xs sm:text-sm font-bold"
            >
              CLOSE
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
