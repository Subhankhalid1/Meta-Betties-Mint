import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './connectMetabetties.css';

import { Pagination } from 'swiper/modules';
export const Slider = () => {
  const sliderArray = [
    {
      image:
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlMTVfZmlsbV9waG90b190aGVfMTk3MHNfb2ZfY2l0eV9uaWdodF9hZGRfbm9pc2VfYV85NzRkZTdiNi04OWRhLTQwZTItODk2Ny0wODcwN2ZiNmI4YTlfMS5qcGc.jpg',
    },
    {
      image:
        'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8yOF9waG90b19vZl9vYWtfdHJlZV9sZWF2ZXNfaW5fYXV0dW1uLV9zdW5ueV9nb181OTk3NzJmMC1lZGU4LTQxZmQtYWUyYi1lOTFhZTRmYzZjMGUtYl8xLmpwZw.jpg',
    },
    {
      image: 'https://pixlr.com/images/index/ai-image-generator-three.webp',
    },
  ];

  return (
    <div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderArray.map((item, i) => (
          <SwiperSlide key={i}>
            <div>
              <img
                src={item.image}
                style={{ height: '100dvh', width: '900px', paddingTop:'25px', paddingBottom:'25px' }}
                className="rounded-3xl object-cover"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
