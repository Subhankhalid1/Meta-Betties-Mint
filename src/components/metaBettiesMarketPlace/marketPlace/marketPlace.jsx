import React, { useState } from 'react';

import { MarketPlaceWithVertical } from './marketPlaceWithVertical';
import { MarketPlaceWithSlider } from './marketPlaceWithSlider';

const data = {
  Art: [
    { name: 'Poluchain Monsters', description: 'MINT', price: 6 },
    { name: 'Monsters', description: 'MINT', price: 2 },
    { name: 'Monsters', description: 'MINT', price: 3 },
    { name: 'Monsters', description: 'MINT', price: 5 },
    { name: 'II-Monsters', description: 'MINT', price: 50 },
    { name: 'Monsters', description: 'MINT', price: 3 },
  ],
  Fashion: [
    { name: 'Poluchain ', description: 'RED-MINT', price: 3 },
    { name: 'Poluchain ', description: 'RED', price: 5 },
  ],
  Events: [{ name: 'Poluchain Monsters', description: 'RED', price: 50 }],
};

const ArtCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderCateoryData = () => {
    if (selectedCategory === 'All') {
      return Object.entries(data).map(([category, items]) => (<>
      <div className="text-white flex justify-between mb-5 mt-5">
        <p className="text-[25.05px]" style={{ fontFamily: 'Inter', fontWeight: 500, lineHeight: '30.95px' }}>
          {category}
        </p>
        <button className="text-[#E0D026] text-[12.32px]" style={{ fontFamily: 'Inter', fontWeight: 700 }} onClick={() => handleCategoryClick(category)}>
          View All
        </button>
      </div>
      <MarketPlaceWithSlider category={category} items={items} key={category} />
      </>
     
      ));
    }
    return <MarketPlaceWithVertical category={selectedCategory} items={data[selectedCategory]} />;
  };

  return (
    <div className="pr-7">
      <div className="flex flex-wrap gap-3 my-10">
        <button
          className={`border border-[#E0D026] rounded-full hover:bg-[#E0D026] px-7 h-12 text-white ${selectedCategory === 'All' ? 'bg-[#E0D026]' : ''}`}
          onClick={() => handleCategoryClick('All')}
        >
          <div className="flex gap-1 justify-center items-center">
            <span  className={`text-[15.5px] ${selectedCategory==='All'?' text-black':'text-white'}`}  style={{ fontFamily: 'Inter', fontWeight: 500 }}>
              All
            </span>
          </div>
        </button>
        {Object.keys(data).map((category) => (
          <button
            key={category}
            className={`border border-[#E0D026] rounded-full hover:bg-[#E0D026] px-7 h-12 text-white ${selectedCategory === category ? 'bg-[#E0D026] ' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            <div className="flex gap-1 justify-center items-center">
              <span className={`text-[15.5px] ${selectedCategory===category?' text-black':'text-white'}`} style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                {category}
              </span>
            </div>
          </button>
        ))}
      </div>
      {renderCateoryData()}
    </div>
  );
};

export default ArtCollection;
