import { EventsCardList } from './eventCardList';

export const AllEvents = () => {
  return (
    <>
      <div className="flex justify-between m-2 pb-2 pt-3">
        <h1
          className=" my-3 flex flex-start 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg text-lg text-white font-bold"
          style={{ fontFamily: 'Inter', fontSize: '26px', fontWeight: 500 }}
        >
          All Events
        </h1>

        <div className="flex flex-start px-4">
          <button
            className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[16px] sm:text-[14px] text-[16px] text-[#E0D026]"
            style={{ fontWeight: 500, lineHeight: '22px' }}
          >
            View all
          </button>
        </div>
      </div>
      <div className="m-2 grid 3xl:grid-cols-7 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-3 2xl:pr-5 xl:pr-10 lg:pr-10 md:pr-10 sm:pr-5">
        <EventsCardList />
      </div>
    </>
  );
};

