import React from 'react';
import { Phone, MessageCircle, MapPin, CheckCircle2, ShieldCheck, Sprout, Sun, Scale } from 'lucide-react';
import { FARM_METRICS } from '../data/produce';

interface HeroProps {
  onOpenWhatsApp: () => void;
  onScrollToProduce: () => void;
  onScrollToVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsApp,
  onScrollToProduce,
  onScrollToVisit,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3ECE0] border border-[#E4D7C2] text-xs font-bold text-[#8C3A18] tracking-wider uppercase mb-5">
              <span className="w-2 h-2 rounded-full bg-[#DC2626] animate-pulse"></span>
              <span>TODAY'S HARVEST STATUS • ACTIVE | ~200kg Lot Ready</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#162C1E] leading-[1.12] mb-5">
              Pure Soil to Your Table:{' '}
              <br className="hidden sm:inline" />
              <span className="italic font-serif-heading text-[#B84A28] underline decoration-[#E8A838]/40 decoration-wavy underline-offset-4">
                100% Herbal
              </span>{' '}
              &amp; Chemical-Free Fresh Harvest
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#47544A] leading-relaxed max-w-2xl mb-8">
              Harvested at 5:30 AM this morning from our ancestral fields. No synthetic pesticides, no chemical ripening gas, and zero artificial wax coating. Picked fresh, packed in jute sacks, ready for your home kitchen, society bulk order, or direct farm pickup.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-8">
              <div className="flex flex-col p-3 rounded-lg bg-[#F5EFE4] border border-[#E5DAC8]">
                <div className="flex items-center gap-1.5 text-[#183B2B] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                  <span className="text-xs font-bold text-[#183B2B]">0% Chemical</span>
                </div>
                <span className="text-[11px] text-[#69746A] leading-tight">Zero synthetic toxins</span>
              </div>

              <div className="flex flex-col p-3 rounded-lg bg-[#F5EFE4] border border-[#E5DAC8]">
                <div className="flex items-center gap-1.5 text-[#183B2B] mb-1">
                  <Sprout className="w-4 h-4 text-[#B84A28]" />
                  <span className="text-xs font-bold text-[#183B2B]">Herbal Manure</span>
                </div>
                <span className="text-[11px] text-[#69746A] leading-tight">Neemastra &amp; Cow dung</span>
              </div>

              <div className="flex flex-col p-3 rounded-lg bg-[#F5EFE4] border border-[#E5DAC8]">
                <div className="flex items-center gap-1.5 text-[#183B2B] mb-1">
                  <Sun className="w-4 h-4 text-[#D97706]" />
                  <span className="text-xs font-bold text-[#183B2B]">Dawn Plucked</span>
                </div>
                <span className="text-[11px] text-[#69746A] leading-tight">Picked under 6 hours ago</span>
              </div>

              <div className="flex flex-col p-3 rounded-lg bg-[#F5EFE4] border border-[#E5DAC8]">
                <div className="flex items-center gap-1.5 text-[#183B2B] mb-1">
                  <Scale className="w-4 h-4 text-[#183B2B]" />
                  <span className="text-xs font-bold text-[#183B2B]">~200kg Lot</span>
                </div>
                <span className="text-[11px] text-[#69746A] leading-tight">Limited batch quota</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6">
              <a
                href={`tel:${FARM_METRICS.farmerPhone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-md bg-[#163826] hover:bg-[#0F2619] text-white text-sm font-bold shadow-sm transition-all"
                id="hero-call-farmer-btn"
              >
                <Phone className="w-4 h-4" />
                <span>Call Farmer ({FARM_METRICS.farmerPhone})</span>
              </a>

              <button
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#1F4E36] hover:bg-[#163826] text-white text-sm font-bold shadow-sm transition-all cursor-pointer"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-[#4ADE80] fill-[#4ADE80]" />
                <span>Direct WhatsApp Order</span>
              </button>

              <button
                onClick={onScrollToVisit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-transparent border border-[#BFB29E] hover:bg-[#EFE7D8] text-[#1E3024] text-sm font-semibold transition-all cursor-pointer"
                id="hero-visit-farm-btn"
              >
                <MapPin className="w-4 h-4 text-[#B84A28]" />
                <span>Visit Farm &amp; Home</span>
              </button>
            </div>

            {/* Trust check badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#4E5E52] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
              <span>Verified Local Smallholder Farm • Over 1,200 Families Fed Natural Food This Year</span>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#ECE2D2] bg-[#E7DCBF]">
              {/* Fresh produce crate photo */}
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
                alt="Freshly harvested organic vegetables in wooden crates"
                className="w-full h-[400px] sm:h-[460px] object-cover"
              />

              {/* Top Badge: ZERO WAX • DESI SEEDS */}
              <div className="absolute top-4 left-4 bg-black/65 backdrop-blur-xs text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-[#EF4444] animate-ping"></span>
                <span>ZERO WAX • DESI SEEDS</span>
              </div>

              {/* Bottom Inspection Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-[#E3DACB] shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-[#B84A28]">
                    FARMGATE LIVE INSPECTION
                  </div>
                  <div className="text-base font-bold text-[#172D20]">
                    {FARM_METRICS.cratesLoaded}
                  </div>
                  <div className="text-xs text-[#5D6D60]">
                    {FARM_METRICS.locationGate}
                  </div>
                </div>

                <div className="bg-[#183B2B] text-white rounded-lg px-3.5 py-2 text-center shadow-xs">
                  <div className="text-lg font-extrabold leading-none text-[#86EFAC]">
                    {FARM_METRICS.liveReadyKg}
                  </div>
                  <div className="text-[9px] uppercase tracking-wider font-bold text-[#D1E7DD] mt-0.5">
                    KG READY
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 bg-[#FAF7F0] border border-[#DDD0BC] shadow-md rounded-lg py-1.5 px-3 items-center gap-2 text-xs font-semibold text-[#183B2B]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]"></span>
              <span>Weighing scale live at Farmgate 2</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
