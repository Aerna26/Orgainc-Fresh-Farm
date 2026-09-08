import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HarvestStatusBar } from './components/HarvestStatusBar';
import { ProduceCatalog } from './components/ProduceCatalog';
import { StickyBasketBar } from './components/StickyBasketBar';
import { BulkWholesale } from './components/BulkWholesale';
import { FarmerInvite } from './components/FarmerInvite';
import { FarmingTruth } from './components/FarmingTruth';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { WhatsAppModal, BulkModal } from './components/Modals';
import { PRODUCE_ITEMS, FARM_METRICS } from './data/produce';
import { CategoryFilter } from './types';

export default function App() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);

  // Update item quantity
  const handleUpdateQuantity = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const targetItem = PRODUCE_ITEMS.find(item => item.id === id);
      const maxAvailable = targetItem ? targetItem.leftKg : 50;

      const nextVal = Math.max(0, Math.min(maxAvailable, current + delta));
      return {
        ...prev,
        [id]: nextVal,
      };
    });
  };

  // Clear basket
  const handleClearBasket = () => {
    setQuantities({});
  };

  // Book now - scroll to booking section
  const handleBookNow = () => {
    const bookingElem = document.getElementById('booking-section');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProduce = () => {
    const elem = document.getElementById('produce-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToVisit = () => {
    const elem = document.getElementById('farm-visit-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendPinWhatsApp = () => {
    const message = `Namaste Farmer Ramesh ji,\n\nPlease share the exact Google Maps location pin and directions to Gate 2 for today's visit.\nGPS: ${FARM_METRICS.gps}`;
    const url = `https://wa.me/${FARM_METRICS.farmerWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1A201C] font-sans antialiased">
      {/* 1. Header with Hotline & WhatsApp Order */}
      <Header
        onSelectCategory={cat => {
          setActiveCategory(cat);
          handleScrollToProduce();
        }}
        onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenWhatsApp={() => setIsWhatsAppModalOpen(true)}
          onScrollToProduce={handleScrollToProduce}
          onScrollToVisit={handleScrollToVisit}
        />

        {/* 3. Harvest Batch Status Bar */}
        <HarvestStatusBar />

        {/* 4. Produce Catalog Grid (~200kg Lot) */}
        <ProduceCatalog
          items={PRODUCE_ITEMS}
          quantities={quantities}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onUpdateQuantity={handleUpdateQuantity}
        />

        {/* 5. Sticky Harvest Basket Bar */}
        <StickyBasketBar
          items={PRODUCE_ITEMS}
          quantities={quantities}
          onClear={handleClearBasket}
          onBookNow={handleBookNow}
        />

        {/* 6. Bulk Wholesale (~200kg / Society / Restaurant) */}
        <BulkWholesale
          onOpenBulkModal={() => setIsBulkModalOpen(true)}
        />

        {/* 7. Farmer Invitation & Farm Visit Section */}
        <FarmerInvite
          onSendPinWhatsApp={handleSendPinWhatsApp}
        />

        {/* 8. Farming Truth: Zero Chemicals & Fake Polish */}
        <FarmingTruth />

        {/* 9. Direct Reservation Booking Form */}
        <BookingForm
          produceItems={PRODUCE_ITEMS}
          quantities={quantities}
        />
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Modals */}
      <WhatsAppModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />

      <BulkModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
      />
    </div>
  );
}
