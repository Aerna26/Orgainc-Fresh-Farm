import React from 'react';
import { ShoppingBag, ArrowDown } from 'lucide-react';
import { ProduceItem } from '../types';

interface StickyBasketBarProps {
  items: ProduceItem[];
  quantities: Record<string, number>;
  onClear: () => void;
  onBookNow: () => void;
}

export const StickyBasketBar: React.FC<StickyBasketBarProps> = ({
  items,
  quantities,
  onClear,
  onBookNow,
}) => {
  const itemMap = new Map<string, ProduceItem>(items.map(i => [i.id, i]));
  
  let totalWeight = 0;
  let totalCost = 0;
  let totalItemsCount = 0;

  (Object.entries(quantities) as [string, number][]).forEach(([id, qty]) => {
    if (qty > 0) {
      const item = itemMap.get(id);
      if (item) {
        totalWeight += qty;
        totalCost += qty * item.price;
        totalItemsCount += 1;
      }
    }
  });

  return (
    <div className="sticky bottom-0 z-30 w-full bg-[#183B2B] text-white border-t border-[#29543E] shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left Side Info */}
        <div className="flex items-center gap-3.5 w-full sm:w-auto">
          <div className="w-10 h-10 rounded-lg bg-[#244F3B] flex items-center justify-center shrink-0 border border-[#3A6B53]">
            <ShoppingBag className="w-5 h-5 text-[#86EFAC]" />
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#A3C7B3]">
              YOUR CUSTOM HARVEST BASKET {totalItemsCount > 0 && `(${totalItemsCount} ${totalItemsCount === 1 ? 'variety' : 'varieties'})`}
            </div>
            <div className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-2">
              <span>Total Weight: {totalWeight} kg</span>
              <span className="text-[#659178]">•</span>
              <span>Approx: ₹{totalCost}</span>
            </div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          {totalWeight > 0 && (
            <button
              onClick={onClear}
              className="px-3 py-2 text-xs font-semibold text-[#D1E7DD] hover:text-white hover:bg-[#244F3B] rounded-md transition-colors cursor-pointer"
              id="clear-basket-btn"
            >
              Clear
            </button>
          )}

          <button
            onClick={onBookNow}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#B84A28] hover:bg-[#A33D1E] text-white text-sm font-bold rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            id="book-reserve-now-btn"
          >
            <span>Book &amp; Reserve Now</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
