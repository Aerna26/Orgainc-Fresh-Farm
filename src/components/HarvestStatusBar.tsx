import React from 'react';
import { Sprout } from 'lucide-react';
import { FARM_METRICS } from '../data/produce';

interface HarvestStatusBarProps {
  reservedKg?: number;
  totalKg?: number;
}

export const HarvestStatusBar: React.FC<HarvestStatusBarProps> = ({
  reservedKg = FARM_METRICS.reservedKg,
  totalKg = FARM_METRICS.totalLotKg,
}) => {
  const availableKg = totalKg - reservedKg;
  const percentageReserved = Math.round((reservedKg / totalKg) * 100);

  return (
    <div className="w-full bg-[#EFE9DC] border-y border-[#DFD5C2] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Left info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#2D6A4F] text-[#86EFAC] flex items-center justify-center shrink-0 shadow-xs">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base font-bold text-[#162D1F] flex items-center gap-2 flex-wrap">
                <span>Harvest Batch Status:</span>
                <span className="font-mono text-[#183B2B] bg-[#DFD6C2] px-2 py-0.5 rounded text-sm font-semibold">
                  {FARM_METRICS.batchNumber}
                </span>
              </div>
              <p className="text-xs text-[#5D6B60]">
                Allocated in whole kilograms. Pick your custom mix below or claim whole crates.
              </p>
            </div>
          </div>

          {/* Right progress indicator */}
          <div className="flex flex-col sm:items-end w-full md:w-80">
            <div className="flex items-center justify-between w-full text-xs font-bold mb-1.5">
              <span className="text-[#183B2B]">{reservedKg}kg Reserved</span>
              <span className="text-[#C85A32]">{availableKg}kg Available</span>
            </div>

            {/* Visual Bar */}
            <div className="w-full h-2.5 bg-[#D8CCB8] rounded-full overflow-hidden flex">
              <div 
                className="bg-[#2D6A4F] h-full transition-all duration-500 rounded-l-full"
                style={{ width: `${percentageReserved}%` }}
                title={`${percentageReserved}% Reserved`}
              />
              <div 
                className="bg-[#E8A838] h-full transition-all duration-500"
                style={{ width: `${100 - percentageReserved}%` }}
                title={`${100 - percentageReserved}% Available`}
              />
            </div>

            <span className="text-[10px] text-[#786E5E] mt-1 font-medium">
              Updated 15 mins ago • Harvested sunrise
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
