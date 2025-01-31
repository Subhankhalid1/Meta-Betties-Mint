import React from 'react';
import { IoStar } from 'react-icons/io5';

export const ProgressBar = () => {
  return (
    <div className="grid grid-cols-12 items-center bg-[#101111] p-5 rounded-xl">
      <div className="2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-12 col-span-12  text-white">
        <p className="2xl:text-xl">Act2Earn Dashboaed</p>
      </div>

      <div className="2xl:col-span-11 xl:col-span-11 lg:col-span-11 md:col-span-12 col-span-12">
        <div className="w-full">
          <div className="flex mb-5 2xl:gap-[13%] xl:gap-[11%] md:gap-[10%] gap-3 text-start text-white">
            <span className="text-sm font-bold">Your total score</span>
            <span className="text-sm font-bold">Tier 2</span>
            <span className="text-sm font-bold">Tier 3</span>
            <span className="text-sm font-bold">Tier 4</span>
            <span className="text-sm font-bold">Tier 5</span>
            <span className="text-sm font-bold">Tier 6</span>
          </div>
          <div className="w-full h-3  rounded-full overflow-hidden flex">
            <div className="h-full bg-[#fae529]" style={{ flex: '0 0 calc(8.67% - 10px)', marginRight: '10px' }}></div>
            <div className="h-full bg-gray-900" style={{ flex: '0 0 calc(16.67% - 10px)', marginRight: '10px' }}></div>
            <div className="h-full bg-gray-900" style={{ flex: '0 0 calc(16.67% - 10px)', marginRight: '10px' }}></div>
            <div className="h-full bg-gray-900" style={{ flex: '0 0 calc(16.67% - 10px)', marginRight: '10px' }}></div>
            <div className="h-full bg-gray-900" style={{ flex: '0 0 calc(16.67% - 10px)', marginRight: '10px' }}></div>
            <div className="h-full bg-gray-900" style={{ flex: '0 0 calc(16.67% - 10px)', marginRight: '10px' }}></div>
            <div className="h-full bg-gray-900" style={{ flex: '0 0 calc(16.67% - 10px)', marginRight: '10px' }}></div>
          </div>

          <div className="text-white flex 2xl:gap-[12.5%] xl:gap-[10%] lg:gap-[8%] md:gap-[10%] sm:gap-[3%] gap-1 mt-5">
            <span className="flex gap-1 text-sm">
              <IoStar className="text-yellow-400" />
              1,271
            </span>
            <span className="flex gap-1 text-sm">
              <IoStar className="text-yellow-400" />
              4,000
            </span>
            <span className="flex gap-1 text-sm">
              <IoStar className="text-yellow-400" />
              8,000
            </span>
            <span className="flex gap-1 text-sm">
              <IoStar className="text-yellow-400" />
              12,000
            </span>
            <span className="flex gap-1 text-sm">
              <IoStar className="text-yellow-400" />
              16,000
            </span>
            <span className="flex gap-1 text-sm">
              <IoStar className="text-yellow-400" />
              20,000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
