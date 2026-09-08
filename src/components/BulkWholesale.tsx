import React, { useState } from 'react';
import { Truck, Phone, MessageSquareText, Check } from 'lucide-react';
import { FARM_METRICS } from '../data/produce';

interface BulkWholesaleProps {
  onOpenBulkModal: () => void;
}

export const BulkWholesale: React.FC<BulkWholesaleProps> = ({ onOpenBulkModal }) => {
  return (
    <section id="bulk-section" className="py-14 sm:py-20 bg-[#EFE8DA] border-y border-[#DED3C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag */}
        <div className="inline-block bg-[#B84A28] text-white text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4">
          BULK WHOLESALE • 20KG TO 200KG
        </div>

        {/* Heading */}
        <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#152B1E] max-w-3xl tracking-tight leading-snug mb-3">
          Need for a Restaurant, Community Kitchen, or Apartment Group?
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#4F5E52] max-w-3xl leading-relaxed mb-10">
          Save up to 25% by bypassing vegetable middlemen and Mandi commissions. Pick whole 25kg wooden crates or reserve the remaining ~128kg of today's harvest lot in one direct farmer consignment.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* 3 Tier Options (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Crate 1 */}
            <div className="bg-[#FAF7F1] p-5 rounded-xl border border-[#D8CDBC] flex flex-col justify-between shadow-2xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#796C5B]">
                  FAMILY CRATE
                </span>
                <div className="text-2xl font-bold font-serif-heading text-[#162E20] mt-1 mb-2">
                  15 - 25 kg
                </div>
                <p className="text-xs text-[#526155] leading-relaxed">
                  Direct home doorstep delivery across city outskirts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8DFD1] text-[11px] text-[#2D6A4F] font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Zero middlemen markup</span>
              </div>
            </div>

            {/* Crate 2 */}
            <div className="bg-[#FAF7F1] p-5 rounded-xl border border-[#D8CDBC] flex flex-col justify-between shadow-2xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B84A28]">
                  SOCIETY CLUSTER
                </span>
                <div className="text-2xl font-bold font-serif-heading text-[#162E20] mt-1 mb-2">
                  50 - 100 kg
                </div>
                <p className="text-xs text-[#526155] leading-relaxed">
                  Free delivery + complimentary fresh mint &amp; coriander bundle.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8DFD1] text-[11px] text-[#2D6A4F] font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Apartment group bulk dispatch</span>
              </div>
            </div>

            {/* Crate 3 */}
            <div className="bg-[#FAF7F1] p-5 rounded-xl border border-[#D8CDBC] flex flex-col justify-between shadow-2xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#796C5B]">
                  WHOLE HARVEST
                </span>
                <div className="text-2xl font-bold font-serif-heading text-[#162E20] mt-1 mb-2">
                  Entire 200kg
                </div>
                <p className="text-xs text-[#526155] leading-relaxed">
                  Exclusive cafe / wedding supplier rates with harvest slip.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E8DFD1] text-[11px] text-[#2D6A4F] font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Single direct farm consignment</span>
              </div>
            </div>
          </div>

          {/* Right Direct Farmer Bulk Desk Card (4 cols) */}
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#D8CEBD] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#143625] text-[#86EFAC] flex items-center justify-center">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#142B1E]">
                    Direct Farmer Bulk Desk
                  </h3>
                  <span className="text-[10px] font-bold tracking-wider text-[#B84A28] uppercase">
                    ZERO MANDI COMMISSION GUARANTEE
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#526055] leading-relaxed mb-6">
                Tell Farmer Ramesh what you need. We pack inside heavy reusable jute gunny bags with tare-weight verification slips.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={onOpenBulkModal}
                className="w-full py-3 px-4 bg-[#143625] hover:bg-[#0E2419] text-white text-xs sm:text-sm font-bold rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                id="request-bulk-quote-btn"
              >
                <MessageSquareText className="w-4 h-4 text-[#86EFAC]" />
                <span>Request Bulk Quotation</span>
              </button>

              <a
                href={`tel:${FARM_METRICS.farmerPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 text-xs font-semibold text-[#4F5E52] hover:text-[#183B2B] py-1 transition-colors"
                id="bulk-desk-phone-link"
              >
                <Phone className="w-3.5 h-3.5 text-[#738376]" />
                <span>Talk on Phone: {FARM_METRICS.farmerPhone}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
