import { useState, useEffect, useRef } from 'react';
import { SlCalender } from 'react-icons/sl';
import { FaLocationDot } from 'react-icons/fa6';
import { BsStarFill } from 'react-icons/bs';
import { BsDashCircleFill } from 'react-icons/bs';
import bookEvents from '../../../assets/bookEvents.svg';
import ShareIcon from '../../../assets/shareIcon.svg';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Detail = ({ event }) => {
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Access the itemId from the location state

  const mapRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1300) {
        setDimensions({ width: 620, height: 228 });
      } else if (window.innerWidth >= 1200) {
        setDimensions({ width: 500, height: 200 });
      } else if (window.innerWidth >= 1024) {
        setDimensions({ width: 500, height: 180 });
      } else if (window.innerWidth >= 768) {
        setDimensions({ width: 400, height: 160 });
      } else if (window.innerWidth < 768) {
        setDimensions({ width: 250, height: 140.5 });
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function formatDate(dateString, option) {
    const date = new Date(dateString);
    const options = {
      ...option,
      timeZoneName: 'short',
      timeZone: 'UTC',
    };
    const formattedDate = new Intl.DateTimeFormat('default', options).format(date);
    return formattedDate;
  }

  return (
    <>
      <h1
        className=" 2xl:text-[26.46px] xl:text-[26.59px] lg:text-[25.50px] md:text-[24px] sm:text-xl text-md text-start"
        style={{ fontFamily: 'Inter', lineHeight: '35px', fontWeight: 500 }}
      >
        {event?.title ||
          `'India Blockchain Week Award Night and Gala Dinner! Hosted By Collionare. Dress Code Strictly Formal *'`}
      </h1>
      <div className="flex justify-between mt-10">
        <div className="flex flex-wrap items-center gap-5">
          <div className="border p-1 rounded-lg">
            <SlCalender size={13} />
          </div>
          <div>
            <p className="text-[12.23px]">
              {event?.startDate
                ? formatDate(event?.startDate, {
                    weekday: 'long', // Full weekday name (e.g., Wednesday)
                    month: 'long',
                    day: 'numeric', // Day of the month (e.g., 6)
                    year: 'numeric',
                  })
                : `'DATE'`}
            </p>
            <p className="text-[#A1A1A1] text-[12px]">
              {event?.startDate
                ? formatDate(event?.startDate, {
                    hour: 'numeric', // Hour in 12-hour clock (e.g., 7)
                    minute: 'numeric', // Minute (e.g., 0)
                    hour12: true,
                  })
                : `'7:00 PM GMT+5'`}
            </p>
          </div>
        </div>
        <div>
          <p className=" text-[10px] text-[#A1A1A1]">Start From</p>
          <div className="flex flex-wrap flex-col items-end">
            <div className="flex flex-wrap gap-10">
              <p className="text-[16px]" style={{ fontWeight: 600 }}>
                USDT {event?.price || `'599.000'`}
              </p>
              <p className="flex flex-wrap items-center">
                {' '}
                <span size={20} className="text-yellow-400">
                  <BsStarFill />
                </span>
                <spaan className="px-2">{event?.xp || 200}</spaan>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="flex flex-wrap items-center gap-5">
          <div className="border p-1 rounded-full">
            <FaLocationDot size={13} />
          </div>
          <div>
            <p className="text-[12.23px]">Register to See Address</p>
            <p className="text-[12px] text-[#A1A1A1]">Begaluru, Karnataka</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-items-start mt-5 gap-3">
          <button class="bg-[#1A1D1E] rounded-full hover:bg-gray-700 px-4 h-12 text-white">
            <div class="flex gap-3 justify-center items-center">
              <span>
                <img src={ShareIcon} alt="" size={16} />
              </span>
              <span class="text-[16px]" style={{ lineHeight: '19.36px', fontWeight: 500 }}>
                Share
              </span>
            </div>
          </button>
          <button class="bg-[#E0D026] rounded-full hover:bg-yellow-400 px-4 h-12 text-[#0D0D0D]">
            <div class="flex gap-3 justify-center items-center">
              <span>
                <img src={bookEvents} alt="" size={16} />
              </span>
              <span class="text-[16px]" style={{ lineHeight: '19.36px', fontWeight: 500 }}>
                Book This Event
              </span>
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-10">
        <div className="border w-full px-4 py-5 rounded-xl bg-[#272727]">
          <div className="flex gap-2 text-center items-center ">
            <BsDashCircleFill size={20} />
            <p className="text-xl py-2" style={{ lineHeight: '18.74px', fontWeight: 500, fontFamily: 'Inter' }}>
              Registration Closed
            </p>
          </div>
          <p className="text-md text-[#A1A1A1]" style={{ lineHeight: '18.74px', fontWeight: 500, fontFamily: 'Inter' }}>
            This Event is not currently taking registration. You may contact the host or subscribe to recieve updates.
          </p>
        </div>

        <div className="mt-5">
          <p className="text-2xl mb-3">About Event</p> <hr />
          <p className="mt-5">{event?.title || 'TITLE'}</p>
          <ul className=" list-disc pl-7">
            <li>
              <p>
                Hosted By <span className="underline">{event?.createdBy?.userName}</span>
              </p>
            </li>
          </ul>
          <p className="Inter">
            {event?.description ||
              `'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia recusandae quibusdam quam error eos
            assumenda cupiditate. Labore consequatur animi sit rerum veniam, eligendi ullam doloribus quas vero magni
            repudiandae error minus nobis soluta ipsam fugiat fugit harum saepe numquam incidunt aliquam sapiente
            quisquam necessitatibus deleniti. Magnam unde modi magni.'`}
          </p>
        </div>

        <div className="mt-10 my-10">
          <p className="text-xl mb-5 font-semibold">Venue & Location</p>
          <div className="iframe-container">
            <MapContainer
              center={event?.location?.coordinates || [51.505, -0.09]}
              zoom={13}
              ref={mapRef}
              style={{ height: dimensions.height, width: dimensions.width }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={event?.location?.coordinates || [51.505, -0.09]}></Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};
