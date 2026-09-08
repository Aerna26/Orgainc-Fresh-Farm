import React from 'react';
import { FlaskConical, Sprout, Waves, Award } from 'lucide-react';

export const FarmingTruth: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#F4EDE1] border-y border-[#DFD5C2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Tag */}
        <div className="text-xs uppercase font-bold tracking-widest text-[#B84A28] mb-2">
          UNCOMPROMISING FARMING TRUTH
        </div>

        {/* Heading */}
        <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#142A1D] tracking-tight max-w-2xl mx-auto leading-snug mb-3">
          Why Our Harvest Has Zero Chemicals &amp; Fake Polish
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-[#506053] max-w-2xl mx-auto leading-relaxed mb-12">
          City supermarkets buy polished vegetables that look glossy under artificial lights. Here is why our soil-stained crates are vastly healthier for your digestive gut.
        </p>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          {/* Card 1 */}
          <div className="bg-[#FAF7F1] p-5 rounded-xl border border-[#DFD3C0] shadow-2xs flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#E2ECE5] text-[#1E5638] flex items-center justify-center mb-4">
              <FlaskConical className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#152B1E] mb-2 font-serif-heading">
              1. Jeevamrut &amp; Neemastra
            </h3>
            <p className="text-xs text-[#526055] leading-relaxed">
              Zero endosulfan, chlorpyrifos, or synthetic sprays. We brew fermented desi cow urine, neem leaf extract, and organic buttermilk to deter pests naturally.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF7F1] p-5 rounded-xl border border-[#DFD3C0] shadow-2xs flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#F8EFE7] text-[#B84A28] flex items-center justify-center mb-4">
              <Sprout className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#152B1E] mb-2 font-serif-heading">
              2. Traditional Desi Seeds
            </h3>
            <p className="text-xs text-[#526055] leading-relaxed">
              No genetically altered commercial hybrid seeds bred only for prolonged plastic shelf life. Our indigenous seeds produce deep aromas and real mineral crunch.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAF7F1] p-5 rounded-xl border border-[#DFD3C0] shadow-2xs flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#E6F0F2] text-[#0E7490] flex items-center justify-center mb-4">
              <Waves className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#152B1E] mb-2 font-serif-heading">
              3. Pure Groundwater &amp; Canal
            </h3>
            <p className="text-xs text-[#526055] leading-relaxed">
              Irrigated strictly with clean sweet subsoil tube-well water and seasonal rainwater canals. Never industrial drainage or municipal runoff water.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FAF7F1] p-5 rounded-xl border border-[#DFD3C0] shadow-2xs flex flex-col justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#F9EFE3] text-[#D97706] flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#152B1E] mb-2 font-serif-heading">
              4. Honest Price, Zero Wax
            </h3>
            <p className="text-xs text-[#526055] leading-relaxed">
              Apples and cucumbers are completely untreated with paraffin wax or artificial coloring dyes. Direct farmer transaction ensures honest rates for both of us.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
