import React from 'react';
import { Sprout, Check, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FARM_METRICS } from '../data/produce';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#EFE9DD] border-t border-[#DCD0BE] text-[#28382C] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#D8CCB8]">
          
          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#183B2B] text-[#86EFAC] flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <span className="font-serif-heading text-xl font-bold text-[#142A1D]">
                KisanOrganic
              </span>
            </div>

            <p className="text-xs text-[#506053] leading-relaxed max-w-sm mb-5">
              Sustainably farmed, harvested at sunrise, and packed within hours. Direct from our fields to your community kitchen with total nutritional transparency.
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF7F0] border border-[#D5C7B2] text-xs font-semibold text-[#183B2B]">
              <Check className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Zero Synthetic Chemicals Promise</span>
            </div>
          </div>

          {/* Col 2: Farm Address (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#152B1E] uppercase tracking-wider mb-3">
              Farm Address
            </h4>
            <div className="text-xs text-[#4F5E52] space-y-1 leading-relaxed">
              <p>Plot 14, Green Acre Organic Valley</p>
              <p>Near Kolar Bypass, Village Harohalli</p>
              <p>Karnataka - 563101</p>
              <p className="font-mono text-[#183B2B] pt-1 font-semibold">
                GPS: {FARM_METRICS.gps}
              </p>
            </div>
          </div>

          {/* Col 3: Visiting Hours (2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-[#152B1E] uppercase tracking-wider mb-3">
              Visiting Hours
            </h4>
            <div className="text-xs text-[#4F5E52] space-y-1.5 leading-relaxed">
              <div>
                <span className="font-semibold text-[#162D1F] block">Morning Harvest Tours:</span>
                <span>06:30 AM – 11:30 AM</span>
              </div>
              <div>
                <span className="font-semibold text-[#162D1F] block">Evening Pick &amp; Weigh:</span>
                <span>04:00 PM – 06:30 PM</span>
              </div>
              <p className="text-[11px] text-[#B84A28] font-semibold pt-1">
                Open All 7 Days (Prior RSVP required)
              </p>
            </div>
          </div>

          {/* Col 4: Direct Grower Desk (2.5 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#152B1E] uppercase tracking-wider mb-3">
              Direct Grower Desk
            </h4>
            <p className="text-xs text-[#506053] leading-relaxed mb-3">
              Speak directly with Farmer Ramesh regarding today's ~200kg batch availability and bulk crates.
            </p>
            <div className="space-y-1.5 text-xs">
              <a 
                href={`tel:${FARM_METRICS.farmerPhone.replace(/\s+/g, '')}`} 
                className="font-bold text-[#183B2B] hover:underline block"
              >
                {FARM_METRICS.farmerPhone}
              </a>
              <a 
                href="mailto:harvest@kisanorganic.in" 
                className="text-[#4E5D51] hover:text-[#183B2B] hover:underline block"
              >
                harvest@kisanorganic.in
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright & certifications */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6A786D]">
          <div>
            © 2026 KisanOrganic Collective. Honest produce grown by working hands.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-semibold text-[#183B2B]">
            <span className="flex items-center gap-1">
              🌱 100% Certified Herbal Soil
            </span>
            <span className="flex items-center gap-1">
              💧 Groundwater Irrigation
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
