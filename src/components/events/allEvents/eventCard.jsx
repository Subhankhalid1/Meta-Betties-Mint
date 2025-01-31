import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
export const EventsCard = ({ item }) => {
  return (
    <div className=" ">
      <Link to={`/events/detail/${item?._id}`}>
        <div
          className=" h-full w-full min-h-[278px] max-w-[265px] bg-cover bg-center bg-no-repeat flex flex-col justify-end"
          style={{
            backgroundImage: `url('${item?.image}')`,
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
                {item?.title || 'title'}
              </h1>
              <div className="flex items-center justify-between text-center">
                {' '}
                <span>
                  <BsStarFill size={14.58} className="text-[#E0D026]" />
                </span>
                <span className="p-1 text-[12px]" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                  {item?.xp || 300}
                </span>
              </div>
            </div>

            <h1 className="text-[14px]" style={{ fontFamily: 'Inter', lineHeight: '16px', fontWeight: 400 }}>
              Sport Castle, Paris
            </h1>

            <div className="flex justify-between items-center mt-2">
              <h1
                className="text-[12px] text-[#A1A1A1]"
                style={{ fontFamily: 'Inter', fontWeight: 400, lineHeight: '14.52px' }}
              >
                by ETHDenver
              </h1>
              <h1 className="font-[12px]" style={{ fontFamily: 'Inter', fontWeight: 700, lineHeight: '14.52px' }}>
                USDT {item.price || 600}
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

