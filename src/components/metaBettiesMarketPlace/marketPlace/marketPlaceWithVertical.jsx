import { IoIosCheckmarkCircle } from 'react-icons/io';
import MarketPlaceCollection from '../../../assets/marketPlaceCollection.svg';
import product1 from '../../../assets/product5.png';

export const MarketPlaceWithVertical = ({ category, items = [] }) => {
  return (
    <>
      <div className="text-white flex justify-between mb-5 mt-5">
        <p className="text-[25.05px]" style={{ fontFamily: 'Inter', fontWeight: 500, lineHeight: '30.95px' }}>
          {category}
        </p>
        {/* <button className="text-[#E0D026] text-[12.32px]" style={{ fontFamily: 'Inter', fontWeight: 700 }}>
          View All
        </button> */}
      </div>

      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 items-center justify-between py-5">
        {items.map((product, index) => (
          <div
            className="flex justify-center rounded-t-lg"
            key={index}
            style={{ maxWidth: '258px', maxHeight: '348px' }}
          >
            <div className=" relative shadow-lg hover:shadow-xl transition duration-500">
              <img className="rounded-t-lg" src={product1} alt="cardImg...." style={{ height: '258.75px' }} />
              <div className="py-5 px-5 rounded-sm bg-gray-900 text-white rounded-b-lg ">
                <div className=" flex justify-between">
                  <span
                    className="text-[#637592] flex gap-1 items-center text-[10.32px]"
                    style={{ lineHeight: '17.68px' }}
                  >
                    {product.name}
                    <span>
                      <IoIosCheckmarkCircle size={17.68} className="text-[#00dbb6]" />
                    </span>
                  </span>
                  <span>
                    <img src={MarketPlaceCollection} size={17.68} className="text-[#00dbb6]" />
                  </span>
                </div>

                <div className="flex items-end gap-y-2">
                  <span
                    className="flex gap-2"
                    style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '13.26px', lineHeight: '20.63px' }}
                  >
                    {product.description}
                  </span>
                </div>
              </div>{' '}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
