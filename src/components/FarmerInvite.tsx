import React from 'react';
import { Coffee, Clock, MapPin, CheckCircle2, Navigation, MessageCircle, ExternalLink } from 'lucide-react';
import { FARM_METRICS } from '../data/produce';

interface FarmerInviteProps {
  onSendPinWhatsApp: () => void;
}

export const FarmerInvite: React.FC<FarmerInviteProps> = ({ onSendPinWhatsApp }) => {
  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=13.1378,78.1344`, '_blank');
  };

  return (
    <section id="farm-visit-section" className="py-14 sm:py-20 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Farmer Invitation Box */}
        <div className="bg-[#F5EFE3] rounded-2xl border border-[#E3D7C4] p-6 sm:p-10 mb-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Farmer Portrait & Title */}
            <div className="lg:col-span-4 flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=400&q=80"
                  alt="Farmer Ramesh Choudhary - Natural Grower"
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-[#DFD3BE] shadow-md"
                />
                <div className="absolute -bottom-1 right-2 bg-[#183B2B] text-white p-1.5 rounded-full border-2 border-[#F5EFE3]">
                  <CheckCircle2 className="w-4 h-4 text-[#86EFAC]" />
                </div>
              </div>

              <h3 className="font-serif-heading text-xl font-bold text-[#142A1D]">
                Farmer Ramesh Choudhary
              </h3>
              <p className="text-xs font-semibold text-[#8B4513] mt-0.5">
                3rd Generation Natural Grower
              </p>
              <p className="text-xs text-[#637267] mt-0.5">
                Village Harohalli • Green Valley Acres
              </p>
            </div>

            {/* Farmer Quote & Hospitality Details */}
            <div className="lg:col-span-8 flex flex-col items-start">
              
              <div className="inline-block bg-[#E8E0D0] text-[#183B2B] text-xs font-bold px-3 py-1 rounded-full mb-3 border border-[#D8CEBC]">
                Open Farm &amp; Home Invitation
              </div>

              <blockquote className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#162F20] leading-snug mb-3">
                “Aap humare khet ya ghar par aakar khud sabziyaan todkar le sakte hain!”
              </blockquote>

              <p className="text-sm text-[#4E5D52] leading-relaxed mb-6">
                You do not need to trust lab labels blindly. Drive to my farm or courtyard home with your family and kids. Walk through the mud beds, touch the soil, see our Jeevamrut tanks, pull carrots from the ground yourself, and weigh them right before your eyes.
              </p>

              {/* Hospitality Card */}
              <div className="w-full bg-[#FAF7F0] border border-[#DDD1BE] rounded-xl p-4 flex items-start gap-3.5 shadow-2xs">
                <div className="w-9 h-9 rounded-lg bg-[#EADCC8] text-[#8C3D18] flex items-center justify-center shrink-0 mt-0.5">
                  <Coffee className="w-5 h-5 text-[#9C4215]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#142A1D] uppercase tracking-wide">
                    Complimentary Desi Hospitality
                  </div>
                  <div className="text-xs text-[#556357] mt-0.5 leading-relaxed">
                    Warm ginger-cardamom chulha chai &amp; unrefined village gur (jaggery) served free to every visiting guest.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Two Detail Cards: Visiting Hours & Physical Landmark Address */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Visiting Hours & Route Convenience */}
          <div className="bg-[#FAF7F0] border border-[#E2D6C3] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center gap-2 text-base font-bold text-[#152C1E] mb-6">
                <Clock className="w-5 h-5 text-[#B84A28]" />
                <h3 className="font-serif-heading text-xl">Farm &amp; Home Visiting Hours</h3>
              </div>

              <div className="space-y-4 mb-6">
                {/* Morning */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F4EDE0] border border-[#E4D7C2]">
                  <div>
                    <div className="text-xs font-bold text-[#14291B]">Morning Fresh Pluck Window</div>
                    <div className="text-[11px] text-[#5F6E62]">Watch sunrise harvest &amp; select wet beds</div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#E4D7C2] text-[#14291B]">
                    07:00 AM – 11:30 AM
                  </span>
                </div>

                {/* Evening */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#F4EDE0] border border-[#E4D7C2]">
                  <div>
                    <div className="text-xs font-bold text-[#14291B]">Evening Farmgate Handover</div>
                    <div className="text-[11px] text-[#5F6E62]">Courtyard weighing &amp; evening chai</div>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#E4D7C2] text-[#14291B]">
                    04:00 PM – 06:30 PM
                  </span>
                </div>
              </div>

              {/* Arrival Notice */}
              <div className="p-3 bg-[#EFE7D8] rounded-lg border border-[#DACDC0] text-xs text-[#576458] mb-6">
                <span className="font-bold text-[#8C3A18] uppercase mr-1">ARRIVAL NOTICE:</span>
                Please WhatsApp us 30 minutes prior so we keep our courtyard open and parking spot ready.
              </div>

              {/* Route convenience checklist */}
              <div>
                <div className="text-xs font-bold text-[#172D1F] uppercase tracking-wider mb-2.5">
                  Vehicle &amp; Route Convenience
                </div>
                <ul className="space-y-2 text-xs text-[#4C5B50]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>Paved concrete road right until farm gate 2</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>Free shaded car parking inside family mango orchard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                    <span>Clean washroom &amp; tube-well fresh handwash tap available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Physical Landmark Address & Map */}
          <div className="bg-[#FAF7F0] border border-[#E2D6C3] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-[#B84A28] mb-1">
                PHYSICAL LANDMARK ADDRESS
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#142A1D] mb-1">
                Green Acres Village, Outskirts Road, Tehsil Rural
              </h3>
              <p className="text-xs text-[#5D6D61] mb-5">
                Near Old Canal Stone Bridge (Pin: 247001) • 22km from Main City Center
              </p>

              {/* Map Illustration / Visual Pinpoint */}
              <div className="relative rounded-xl overflow-hidden border border-[#DDD1BE] bg-[#E9E1D2] mb-5">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Rural Farm Road Map Pin"
                  className="w-full h-44 object-cover opacity-80"
                />
                
                {/* Overlay Pinpoint badge */}
                <div className="absolute inset-0 bg-[#162E20]/30 backdrop-blur-[0.5px] flex items-center justify-center p-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 text-center shadow-lg border border-[#DFD3C0] max-w-sm">
                    <div className="flex items-center justify-center gap-1 text-[#B84A28] mb-1">
                      <MapPin className="w-4 h-4 fill-[#B84A28]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">FARM GATE PINPOINT</span>
                    </div>
                    <div className="text-xs font-mono font-bold text-[#142A1D]">
                      {FARM_METRICS.gps}
                    </div>
                    <div className="text-[11px] text-[#556358] mt-0.5">
                      Look for Yellow Neem Board &amp; Stone Arch
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={openGoogleMaps}
                className="w-full py-2.5 px-4 bg-[#143625] hover:bg-[#0E2419] text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                id="open-google-maps-btn"
              >
                <Navigation className="w-3.5 h-3.5 text-[#86EFAC]" />
                <span>Open in Google Maps</span>
              </button>

              <button
                onClick={onSendPinWhatsApp}
                className="w-full py-2.5 px-4 bg-[#EDE5D5] hover:bg-[#DFD4BF] text-[#142B1E] border border-[#CFBFAB] text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
                id="send-pin-whatsapp-btn"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Send Pin to my WhatsApp</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
