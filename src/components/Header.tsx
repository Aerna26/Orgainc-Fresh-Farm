import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Sprout } from 'lucide-react';
import { FARM_METRICS } from '../data/produce';

interface HeaderProps {
  onSelectCategory?: (category: 'all' | 'vegetables' | 'fruits_herbs') => void;
  onOpenWhatsApp?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectCategory, onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string, category?: 'all' | 'vegetables' | 'fruits_herbs') => {
    setMobileMenuOpen(false);
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-[#FBF9F5] border-b border-[#E7DFD3] sticky top-0 z-40">
      {/* Top Notification Bar */}
      <div className="w-full bg-[#183B2B] text-[#DCEAE1] text-xs sm:text-sm py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <span>🌱 Freshly Harvested Today: 100% Herbal &amp; Zero Chemical – ~200kg Ready Stock for Direct Purchase &amp; Farm Visit</span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group"
          id="brand-logo-link"
        >
          <div className="w-10 h-10 rounded-full bg-[#1B4332] text-[#A3E635] flex items-center justify-center shadow-sm">
            <Sprout className="w-6 h-6 text-[#86EFAC]" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-heading text-2xl font-bold tracking-tight text-[#163826] leading-none">
              KisanOrganic
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#B45309] mt-0.5">
              DIRECT FROM FARM HARVEST
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#2C3E33]">
          <button
            onClick={() => handleNavClick('produce-section', 'vegetables')}
            className="hover:text-[#183B2B] transition-colors cursor-pointer text-left"
            id="nav-vegetables"
          >
            Fresh Vegetables
          </button>
          <button
            onClick={() => handleNavClick('produce-section', 'fruits_herbs')}
            className="hover:text-[#183B2B] transition-colors cursor-pointer text-left"
            id="nav-fruits"
          >
            Organic Fruits
          </button>
          <button
            onClick={() => handleNavClick('produce-section', 'fruits_herbs')}
            className="hover:text-[#183B2B] transition-colors cursor-pointer text-left"
            id="nav-spices"
          >
            Spices &amp; Herbs
          </button>
          <button
            onClick={() => handleNavClick('farm-visit-section')}
            className="hover:text-[#183B2B] transition-colors cursor-pointer text-left"
            id="nav-visit"
          >
            Farm Visit &amp; Location
          </button>
          <button
            onClick={() => handleNavClick('bulk-section')}
            className="hover:text-[#183B2B] transition-colors cursor-pointer text-left"
            id="nav-bulk"
          >
            Bulk Inquiry (~200kg)
          </button>
        </nav>

        {/* Farmer Contact & WhatsApp CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-bold tracking-wider text-[#786E5E] uppercase">
              FARMER HOTLINE
            </span>
            <a 
              href={`tel:${FARM_METRICS.farmerPhone.replace(/\s+/g, '')}`}
              className="text-sm font-bold text-[#183B2B] hover:underline"
              id="header-phone-link"
            >
              {FARM_METRICS.farmerPhone}
            </a>
          </div>

          <button
            onClick={onOpenWhatsApp}
            className="bg-[#183B2B] hover:bg-[#122E21] text-white px-4 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            id="header-whatsapp-btn"
          >
            <MessageCircle className="w-4 h-4 text-[#4ADE80] fill-[#4ADE80]" />
            <span>WhatsApp Order</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenWhatsApp}
            className="bg-[#183B2B] text-white p-2 rounded-md"
            aria-label="WhatsApp Quick Contact"
            id="mobile-whatsapp-icon-btn"
          >
            <MessageCircle className="w-5 h-5 text-[#4ADE80]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#183B2B]"
            aria-label="Toggle Navigation Menu"
            id="mobile-nav-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F3EB] border-b border-[#E2D8C7] px-6 py-5 flex flex-col gap-4 text-base font-medium text-[#1A2E22]">
          <button
            onClick={() => handleNavClick('produce-section', 'vegetables')}
            className="text-left py-1 hover:text-[#183B2B]"
          >
            Fresh Vegetables
          </button>
          <button
            onClick={() => handleNavClick('produce-section', 'fruits_herbs')}
            className="text-left py-1 hover:text-[#183B2B]"
          >
            Organic Fruits &amp; Berries
          </button>
          <button
            onClick={() => handleNavClick('produce-section', 'fruits_herbs')}
            className="text-left py-1 hover:text-[#183B2B]"
          >
            Spices &amp; Desi Herbs
          </button>
          <button
            onClick={() => handleNavClick('farm-visit-section')}
            className="text-left py-1 hover:text-[#183B2B]"
          >
            Farm Visit &amp; Location
          </button>
          <button
            onClick={() => handleNavClick('bulk-section')}
            className="text-left py-1 hover:text-[#183B2B]"
          >
            Bulk Inquiry (~200kg)
          </button>
          <div className="pt-3 border-t border-[#E2D8C7] flex items-center justify-between">
            <div>
              <div className="text-xs text-[#786E5E] uppercase font-bold">Farmer Hotline</div>
              <a href={`tel:${FARM_METRICS.farmerPhone.replace(/\s+/g, '')}`} className="font-bold text-[#183B2B]">
                {FARM_METRICS.farmerPhone}
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp?.();
              }}
              className="bg-[#183B2B] text-white px-4 py-2 rounded text-sm font-semibold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#4ADE80]" />
              Order on WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
