import { useState, useEffect, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './latestEvents.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Pagination, Navigation } from 'swiper/modules';
import { api } from '../../../services/api';

export const SwiperEvents = () => {
  const [, setSwiperRef] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1);
      } else if (width >= 768 && width < 1024) {
        setSlidesPerView(2.5);
      } else if (width >= 1024 || width < 1444) {
        setSlidesPerView(4.4);
      } else {
        setSlidesPerView(4.2);
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  useLayoutEffect(() => {
    getLatestEvents();
  }, []);

  const getLatestEvents = async () => {
    try {
      const { data } = await api.get('/api/event/latest');
      setEvents(data.data.events.docs);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={slidesPerView}
      centeredSlides={false}
      spaceBetween={24}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {events?.map((item, ind) => (
        <SwiperSlide key={item?._id} className=' min-h-[278px] max-w-[265px]'>
           <Link to={`/events/detail/${item?._id}`}>
          <div
            className="min-h-[278px]  max-w-[265px] bg-cover bg-center bg-no-repeat flex flex-col justify-end"
            style={{
              background: `url('${item?.image}')`,
              borderRadius: '18px 18px 18px 18px',
              fontFamily: 'Inter',
            }}
          >
           
              <div
                className="text-white bg-black bg-black/70 bg-opacity-50 p-2"
                style={{ borderRadius: '0px 0px 18px 18px' }}
              >
                <div className="flex justify-between">
                  <h1 className="text-[14px]" style={{ fontFamily: 'Inter', lineHeight: '20px', fontWeight: 500 }}>
                    {item?.title || ''}{' '}
                  </h1>
                  <div className="flex items-center justify-between text-center">
                    {' '}
                    <span>
                      <BsStarFill size={14.58} className="text-[#E0D026]" />
                    </span>
                    <span className="p-1 text-[12px]" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                      {item?.xp || 0}
                    </span>
                  </div>
                </div>

                <h1 className="text-[14px]" style={{ fontFamily: 'Inter', lineHeight: '16px', fontWeight: 400 }}>
                  Madinat Jumairah, Dubai
                </h1>

                <div className="flex justify-between mt-2 items-center">
                  <h1
                    className="text-[12px] text-[#A1A1A1]"
                    style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '14.52px' }}
                  >
                    ByToken2049
                  </h1>
                  <h1 className="text-[12px]" style={{ fontFamily: 'Inter', fontWeight: 700, lineHeight: '14.52px' }}>
                    {item?.price || 0}
                  </h1>
                </div>
              </div>
           
          </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
