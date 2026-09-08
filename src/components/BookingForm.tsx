import React, { useState, useEffect } from 'react';
import { Send, MessageCircle, Check, MapPin, Home, RefreshCw } from 'lucide-react';
import { BookingFormData, ProduceItem } from '../types';
import { FARM_METRICS } from '../data/produce';

interface BookingFormProps {
  produceItems: ProduceItem[];
  quantities: Record<string, number>;
  onOrderSubmitted?: (data: BookingFormData) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  produceItems,
  quantities,
  onOrderSubmitted,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    fulfillmentType: 'visit',
    deliveryAddress: '',
    itemsRequested: '',
  });

  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  // Sync with selected basket items
  const generateBasketSummary = () => {
    const itemMap = new Map<string, ProduceItem>(produceItems.map(i => [i.id, i]));
    const list: string[] = [];

    (Object.entries(quantities) as [string, number][]).forEach(([id, qty]) => {
      if (qty > 0) {
        const item = itemMap.get(id);
        if (item) {
          list.push(`${qty}kg ${item.name} (${item.hindiName})`);
        }
      }
    });

    return list.join(', ');
  };

  // Sync automatically when quantities change if field is empty or was generated
  useEffect(() => {
    const summary = generateBasketSummary();
    if (summary) {
      setFormData(prev => ({
        ...prev,
        itemsRequested: summary,
      }));
    }
  }, [quantities]);

  const handleManualSync = () => {
    const summary = generateBasketSummary();
    if (summary) {
      setFormData(prev => ({
        ...prev,
        itemsRequested: summary,
      }));
    } else {
      alert('Your basket is currently empty. Please select produce above or type your requirements directly.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please provide your name and WhatsApp contact number.');
      return;
    }

    const itemsText = formData.itemsRequested.trim() || 'Custom farm harvest lot mix';

    // Construct the WhatsApp message
    const message = `🌱 *KISANORGANIC FARM HARVEST BOOKING*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Fulfillment:* ${formData.fulfillmentType === 'visit' ? '🏡 Visit Farm / Home (Pick & Weigh + Chai)' : '🚚 Deliver to My Address'}\n` +
      (formData.fulfillmentType === 'delivery' && formData.deliveryAddress ? `*Delivery Address:* ${formData.deliveryAddress}\n` : '') +
      `*Requested Produce:* ${itemsText}\n` +
      `*Batch:* ${FARM_METRICS.batchNumber}\n\n` +
      `Namaste Farmer Ramesh ji, please confirm today's harvest allocation.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${FARM_METRICS.farmerWhatsApp}?text=${encoded}`;

    if (onOrderSubmitted) {
      onOrderSubmitted(formData);
    }

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    setSubmittedMessage(message);
  };

  return (
    <section id="booking-section" className="py-14 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-xs uppercase font-bold tracking-widest text-[#B84A28] mb-2">
            FAST DIRECT BOOKING
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#142A1D] tracking-tight mb-2">
            Reserve Your Share of the ~200kg Lot
          </h2>
          <p className="text-sm text-[#506053] leading-relaxed max-w-xl mx-auto">
            Fill your preferred items below. Submitting will immediately compile a clear, ready WhatsApp message directly to Farmer Ramesh.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-[#FAF7F1] border border-[#DDD2BF] rounded-2xl p-6 sm:p-10 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-[#14291B] tracking-wider uppercase mb-1.5">
                  YOUR FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Sharma"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#F3EFE6] border border-[#D8CEBD] text-sm text-[#142A1D] placeholder-[#8C988E] focus:outline-hidden focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all"
                  id="booking-name-input"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#14291B] tracking-wider uppercase mb-1.5">
                  WHATSAPP / CONTACT PHONE *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 00000"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#F3EFE6] border border-[#D8CEBD] text-sm text-[#142A1D] placeholder-[#8C988E] focus:outline-hidden focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all"
                  id="booking-phone-input"
                />
              </div>
            </div>

            {/* Fulfillment Options */}
            <div>
              <label className="block text-[11px] font-bold text-[#14291B] tracking-wider uppercase mb-2">
                HOW WOULD YOU LIKE TO RECEIVE YOUR HARVEST? *
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Visit Farm */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, fulfillmentType: 'visit' })}
                  className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                    formData.fulfillmentType === 'visit'
                      ? 'bg-[#F2ECE0] border-[#2D6A4F] ring-1 ring-[#2D6A4F]/30 shadow-2xs'
                      : 'bg-[#F3EFE6] border-[#D8CEBD] hover:border-[#C4B7A2]'
                  }`}
                  id="radio-visit-farm"
                >
                  <div className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                    formData.fulfillmentType === 'visit' 
                      ? 'border-[#2D6A4F] bg-[#2D6A4F]' 
                      : 'border-[#988C78] bg-white'
                  }`}>
                    {formData.fulfillmentType === 'visit' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#14291B]">Visit Farm / Home</div>
                    <div className="text-[11px] text-[#5C6B5F] mt-0.5">Pick &amp; weigh in person + free chai</div>
                  </div>
                </button>

                {/* Doorstep Delivery */}
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, fulfillmentType: 'delivery' })}
                  className={`p-4 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                    formData.fulfillmentType === 'delivery'
                      ? 'bg-[#F2ECE0] border-[#2D6A4F] ring-1 ring-[#2D6A4F]/30 shadow-2xs'
                      : 'bg-[#F3EFE6] border-[#D8CEBD] hover:border-[#C4B7A2]'
                  }`}
                  id="radio-deliver-address"
                >
                  <div className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                    formData.fulfillmentType === 'delivery' 
                      ? 'border-[#2D6A4F] bg-[#2D6A4F]' 
                      : 'border-[#988C78] bg-white'
                  }`}>
                    {formData.fulfillmentType === 'delivery' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#14291B]">Deliver to My Address</div>
                    <div className="text-[11px] text-[#5C6B5F] mt-0.5">Direct doorstep handover via local tempo</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Delivery Address / Landmark (If delivery chosen or landmark) */}
            <div>
              <label className="block text-[11px] font-bold text-[#14291B] tracking-wider uppercase mb-1.5">
                YOUR DELIVERY ADDRESS OR SOCIETY LANDMARK {formData.fulfillmentType === 'delivery' && '*'}
              </label>
              <input
                type="text"
                placeholder="e.g. Flat 402, Pine Grove Apartments, Kolar Highway"
                value={formData.deliveryAddress}
                onChange={e => setFormData({ ...formData, deliveryAddress: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#F3EFE6] border border-[#D8CEBD] text-sm text-[#142A1D] placeholder-[#8C988E] focus:outline-hidden focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all"
                id="booking-address-input"
              />
            </div>

            {/* Items & Kilograms Desired */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-bold text-[#14291B] tracking-wider uppercase">
                  ITEMS &amp; KILOGRAMS DESIRED *
                </label>
                <button
                  type="button"
                  onClick={handleManualSync}
                  className="text-xs font-bold text-[#B84A28] hover:underline flex items-center gap-1 cursor-pointer"
                  id="sync-basket-btn"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Sync Selection</span>
                </button>
              </div>

              <textarea
                rows={4}
                required
                placeholder="e.g. 5kg Carrot, 3kg Spinach, 10kg Potato, 2kg Pomegranate, 1kg Desi Garlic"
                value={formData.itemsRequested}
                onChange={e => setFormData({ ...formData, itemsRequested: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-[#F3EFE6] border border-[#D8CEBD] text-sm text-[#142A1D] placeholder-[#8C988E] focus:outline-hidden focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent transition-all"
                id="booking-items-textarea"
              />
              <span className="text-[11px] text-[#69786C] mt-1 block">
                Note: If you selected items using the buttons above, click 'Sync Selection' or type freely.
              </span>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#143625] hover:bg-[#0D2419] text-white text-sm sm:text-base font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                id="confirm-order-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 text-[#4ADE80] fill-[#4ADE80]" />
                <span>Confirm Order &amp; Send to Farmer WhatsApp</span>
              </button>
              
              <div className="text-center text-xs text-[#637265] mt-3">
                No upfront payment required for farm pickup. Pay by cash or UPI only after you inspect produce fresh from the crate.
              </div>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};
