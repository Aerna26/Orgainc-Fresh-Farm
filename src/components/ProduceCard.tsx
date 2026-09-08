import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { ProduceItem } from '../types';

interface ProduceCardProps {
  item: ProduceItem;
  quantity: number;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const ProduceCard: React.FC<ProduceCardProps> = ({
  item,
  quantity,
  onUpdateQuantity,
}) => {
  return (
    <div 
      className={`flex flex-col justify-between p-4 rounded-xl border transition-all duration-200 bg-[#FBF9F4] ${
        quantity > 0 
          ? 'border-[#2D6A4F] ring-1 ring-[#2D6A4F]/20 shadow-sm' 
          : 'border-[#E5DAC8] hover:border-[#CFC3B0]'
      }`}
      id={`produce-card-${item.id}`}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-block text-[11px] font-bold text-[#A8431E] bg-[#FAECE5] border border-[#ECD1C4] px-2 py-0.5 rounded">
            ~{item.leftKg}kg Left
          </span>
          <span className="text-[10px] font-bold tracking-wider text-[#697A6E] uppercase">
            {item.typeTag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#14291B] mb-1 leading-snug">
          {item.name}{' '}
          <span className="text-[#647568] font-normal text-sm">
            ({item.hindiName})
          </span>
        </h3>

        {/* Description */}
        <p className="text-xs text-[#526055] leading-relaxed mb-4 min-h-[36px]">
          {item.description}
        </p>
      </div>

      {/* Pricing and Stepper */}
      <div className="pt-3 border-t border-[#EBE3D3] flex items-center justify-between gap-2">
        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-[#132A1C] font-mono">
            ₹{item.price}
          </span>
          <span className="text-xs text-[#6F7F72]">/{item.unit}</span>
        </div>

        {/* Order Stepper */}
        <div className="flex items-center gap-1.5 bg-[#EFE9DC] border border-[#DDD3BF] rounded-md px-2 py-1">
          <span className="text-xs font-semibold text-[#546256] mr-1">Order:</span>
          
          <button
            onClick={() => onUpdateQuantity(item.id, -1)}
            disabled={quantity <= 0}
            className="w-5 h-5 rounded flex items-center justify-center text-[#183B2B] hover:bg-[#DDD2BD] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            aria-label={`Decrease ${item.name} quantity`}
            id={`btn-dec-${item.id}`}
          >
            <Minus className="w-3 h-3" />
          </button>

          <span className="w-6 text-center text-xs font-bold text-[#183B2B] font-mono">
            {quantity}
          </span>

          <button
            onClick={() => onUpdateQuantity(item.id, 1)}
            disabled={quantity >= item.leftKg}
            className="w-5 h-5 rounded flex items-center justify-center text-[#183B2B] hover:bg-[#DDD2BD] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            aria-label={`Increase ${item.name} quantity`}
            id={`btn-inc-${item.id}`}
          >
            <Plus className="w-3 h-3" />
          </button>

          <span className="text-[11px] font-medium text-[#657367] ml-0.5">kg</span>
        </div>
      </div>
    </div>
  );
};
