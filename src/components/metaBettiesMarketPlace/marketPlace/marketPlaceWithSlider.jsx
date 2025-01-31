import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './marketPlace.css';
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import MarketPlaceCollection from '../../../assets/marketPlaceCollection.svg';
import product4 from '../../../assets/product3.png';

export const MarketPlaceWithSlider = ({ category, items = [] }) => {
  const [, setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1.2);
      } else if (width >= 768 && width < 1024) {
        setSlidesPerView(2);
      } else if (width >= 1024 && width < 1300) {
        setSlidesPerView(4);
      } else {
        setSlidesPerView(4.2);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);
  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={slidesPerView}
        centeredSlides={false}
        spaceBetween={16}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8 items-center justify-between py-5">
          {items.map((product, index) => (
            <SwiperSlide key={index} >
              <div className="flex justify-center" key={index} style={{ maxWidth: '258px', maxHeight: '348px' }}>
                {/* <div className=" flex justify-center rounded-2xl"> */}
                <div className=" relative shadow-lg hover:shadow-xl transition duration-500 rounded-t-2xl">
                  <img className=" rounded-t-lg " src={product4} alt="cardImg...." style={{ height: '258.75px' }} />
                  <div className="py-5 px-5 rounded-b-lg bg-gray-900 text-white">
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
                {/* </div> */}
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
