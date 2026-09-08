import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { ProduceItem, CategoryFilter } from '../types';
import { ProduceCard } from './ProduceCard';

interface ProduceCatalogProps {
  items: ProduceItem[];
  quantities: Record<string, number>;
  activeCategory: CategoryFilter;
  onSelectCategory: (cat: CategoryFilter) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const ProduceCatalog: React.FC<ProduceCatalogProps> = ({
  items,
  quantities,
  activeCategory,
  onSelectCategory,
  onUpdateQuantity,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Counts
  const totalCount = items.length;
  const vegCount = items.filter(i => i.category === 'vegetables').length;
  const fruitsHerbsCount = items.filter(i => i.category === 'fruits' || i.category === 'herbs').length;

  const filteredItems = items.filter(item => {
    // Category match
    if (activeCategory === 'vegetables' && item.category !== 'vegetables') return false;
    if (activeCategory === 'fruits_herbs' && item.category !== 'fruits' && item.category !== 'herbs') return false;

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchHindi = item.hindiName.toLowerCase().includes(q);
      const matchType = item.typeTag.toLowerCase().includes(q);
      return matchName || matchHindi || matchType;
    }

    return true;
  });

  return (
    <section id="produce-section" className="py-12 sm:py-16 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#B84A28] mb-1.5">
              HAND-HARVESTED SELECTION
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#142A1D] tracking-tight">
              Today's Available Produce (~200kg Lot)
            </h2>
            <p className="text-sm text-[#506053] mt-2 max-w-2xl">
              Each item is weighed right before handover. Real countryside produce has natural shapes, deep earthy aromas, and high nutritional density.
            </p>
          </div>

          {/* Category Filter Pills & Search */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-48">
              <Search className="w-3.5 h-3.5 text-[#738376] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search produce..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md bg-[#F4EDE1] border border-[#DDD1BE] text-[#142A1D] placeholder-[#818E84] focus:outline-hidden focus:ring-1 focus:ring-[#2D6A4F]"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-[#EFE8DA] p-1 rounded-lg border border-[#DDD1BD]">
              <button
                onClick={() => onSelectCategory('all')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-[#183B2B] text-white shadow-xs'
                    : 'text-[#48564B] hover:text-[#183B2B]'
                }`}
                id="filter-all-btn"
              >
                All Items ({totalCount})
              </button>

              <button
                onClick={() => onSelectCategory('vegetables')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === 'vegetables'
                    ? 'bg-[#183B2B] text-white shadow-xs'
                    : 'text-[#48564B] hover:text-[#183B2B]'
                }`}
                id="filter-veg-btn"
              >
                Vegetables ({vegCount})
              </button>

              <button
                onClick={() => onSelectCategory('fruits_herbs')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === 'fruits_herbs'
                    ? 'bg-[#183B2B] text-white shadow-xs'
                    : 'text-[#48564B] hover:text-[#183B2B]'
                }`}
                id="filter-fruits-btn"
              >
                Fruits &amp; Herbs ({fruitsHerbsCount})
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid - 4 columns on large screens */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredItems.map(item => (
              <ProduceCard
                key={item.id}
                item={item}
                quantity={quantities[item.id] || 0}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F4EDE1] rounded-xl border border-[#DFD4C0]">
            <p className="text-base text-[#526155] font-medium">
              No produce matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="mt-3 text-xs font-bold text-[#183B2B] underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
