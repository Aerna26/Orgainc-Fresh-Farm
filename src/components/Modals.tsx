import React, { useState } from 'react';
import { X, MessageCircle, Truck, Phone, Navigation, Check } from 'lucide-react';
import { FARM_METRICS } from '../data/produce';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  basketSummary?: string;
  totalKg?: number;
  totalCost?: number;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  basketSummary,
  totalKg = 0,
  totalCost = 0,
}) => {
  const [userName, setUserName] = useState('');
  const [userNote, setUserNote] = useState(basketSummary || '');

  if (!isOpen) return null;

  const handleLaunchWhatsApp = () => {
    const text = `Namaste Farmer Ramesh ji,\n\nI want to reserve fresh harvest from today's ~200kg lot.\n` +
      (userName ? `*My Name:* ${userName}\n` : '') +
      (userNote ? `*Items:* ${userNote}\n` : '') +
      (totalKg > 0 ? `*Estimated Total:* ~${totalKg}kg (Approx ₹${totalCost})\n` : '') +
      `*Batch:* ${FARM_METRICS.batchNumber}\n\nPlease confirm availability!`;

    const url = `https://wa.me/${FARM_METRICS.farmerWhatsApp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F1] rounded-2xl border border-[#D5C7B2] shadow-2xl max-w-md w-full p-6 text-left relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#6D7B70] hover:text-[#183B2B] hover:bg-[#EAE1D1] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#1E7E34] flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-[#25D366] fill-[#25D366]" />
          </div>
          <div>
            <h3 className="font-serif-heading text-lg font-bold text-[#142A1D]">
              Direct WhatsApp with Farmer
            </h3>
            <span className="text-xs text-[#58675B]">
              Direct line to Farmer Ramesh Choudhary
            </span>
          </div>
        </div>

        <p className="text-xs text-[#526055] leading-relaxed mb-4">
          Chat directly with the grower. You can ask for real-time crate photos, customize your kilograms, or arrange a visit.
        </p>

        <div className="space-y-3 mb-5">
          <div>
            <label className="block text-[11px] font-bold text-[#142A1D] uppercase tracking-wider mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. Meera"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-[#F2EDE1] border border-[#DDD0BC] text-[#142A1D] focus:outline-hidden focus:ring-1 focus:ring-[#2D6A4F]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#142A1D] uppercase tracking-wider mb-1">
              Produce Desired
            </label>
            <textarea
              rows={3}
              placeholder="e.g. 5kg Carrots, 2kg Palak, 1kg Desi Garlic"
              value={userNote}
              onChange={e => setUserNote(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-[#F2EDE1] border border-[#DDD0BC] text-[#142A1D] focus:outline-hidden focus:ring-1 focus:ring-[#2D6A4F]"
            />
          </div>
        </div>

        <button
          onClick={handleLaunchWhatsApp}
          className="w-full py-3 bg-[#183B2B] hover:bg-[#11291E] text-white text-xs sm:text-sm font-bold rounded-lg flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-[#4ADE80] fill-[#4ADE80]" />
          <span>Open WhatsApp ({FARM_METRICS.farmerPhone})</span>
        </button>
      </div>
    </div>
  );
};

interface BulkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BulkModal: React.FC<BulkModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState('society');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [details, setDetails] = useState('');

  if (!isOpen) return null;

  const handleSendBulkQuote = () => {
    const tierName = 
      selectedTier === 'family' ? 'Family Crate (15 - 25 kg)' :
      selectedTier === 'society' ? 'Society Cluster (50 - 100 kg)' : 'Whole Harvest Lot (~200 kg)';

    const message = `🌾 *BULK HARVEST QUOTATION INQUIRY*\n\n` +
      `*Name / Org:* ${name || 'Interested Buyer'}\n` +
      `*Contact:* ${contact}\n` +
      `*Preferred Tier:* ${tierName}\n` +
      `*Notes:* ${details || 'Please share crate pricing and dispatch schedule for today.'}\n\n` +
      `Sent via KisanOrganic Direct Bulk Desk`;

    const url = `https://wa.me/${FARM_METRICS.farmerWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F1] rounded-2xl border border-[#D5C7B2] shadow-2xl max-w-lg w-full p-6 text-left relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-[#6D7B70] hover:text-[#183B2B] hover:bg-[#EAE1D1] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-[#183B2B] text-[#86EFAC] flex items-center justify-center">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif-heading text-xl font-bold text-[#142A1D]">
              Direct Farmer Bulk Desk
            </h3>
            <span className="text-xs text-[#B84A28] font-bold uppercase tracking-wider">
              ZERO MANDI COMMISSION RATE
            </span>
          </div>
        </div>

        <p className="text-xs text-[#526055] leading-relaxed mb-4">
          Direct grower dispatch for societies, cafes, and community kitchens. Minimum 15kg orders receive custom crate sorting and farmer tare-weight slip.
        </p>

        {/* Tier selection */}
        <div className="space-y-2 mb-4">
          <label className="block text-[11px] font-bold text-[#142A1D] uppercase tracking-wider">
            Select Bulk Tier
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {[
              { id: 'family', title: 'Family Crate', kg: '15 - 25 kg' },
              { id: 'society', title: 'Society Cluster', kg: '50 - 100 kg' },
              { id: 'whole', title: 'Whole Consignment', kg: 'Entire ~200kg' },
            ].map(tier => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setSelectedTier(tier.id)}
                className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                  selectedTier === tier.id
                    ? 'bg-[#EAE1D2] border-[#183B2B] ring-1 ring-[#183B2B]'
                    : 'bg-[#F2ECE0] border-[#D9CEBC]'
                }`}
              >
                <div className="text-xs font-bold text-[#142A1D]">{tier.title}</div>
                <div className="text-[11px] text-[#556358]">{tier.kg}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3 mb-5">
          <div>
            <label className="block text-[11px] font-bold text-[#142A1D] uppercase tracking-wider mb-1">
              Your Name / Apartment / Restaurant Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Palm Meadows Residents Group"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-[#F2EDE1] border border-[#DDD0BC] text-[#142A1D] focus:outline-hidden focus:ring-1 focus:ring-[#2D6A4F]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#142A1D] uppercase tracking-wider mb-1">
              Contact WhatsApp Phone *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98765 00000"
              value={contact}
              onChange={e => setContact(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-[#F2EDE1] border border-[#DDD0BC] text-[#142A1D] focus:outline-hidden focus:ring-1 focus:ring-[#2D6A4F]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-[#142A1D] uppercase tracking-wider mb-1">
              Specific Produce or Timing Request
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Need 40kg Potatoes, 20kg Onions, 15kg Carrots for society dispatch on Friday"
              value={details}
              onChange={e => setDetails(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg bg-[#F2EDE1] border border-[#DDD0BC] text-[#142A1D] focus:outline-hidden focus:ring-1 focus:ring-[#2D6A4F]"
            />
          </div>
        </div>

        <button
          onClick={handleSendBulkQuote}
          className="w-full py-3 bg-[#183B2B] hover:bg-[#11291E] text-white text-xs sm:text-sm font-bold rounded-lg flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-[#4ADE80] fill-[#4ADE80]" />
          <span>Send Bulk Inquiry to Farmer Ramesh</span>
        </button>
      </div>
    </div>
  );
};
