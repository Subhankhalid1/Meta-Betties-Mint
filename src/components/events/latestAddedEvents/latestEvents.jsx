import { useSelector } from 'react-redux';
import { IoMdAdd } from "react-icons/io";
import { SwiperEvents } from './swiperEvents';
import { UserRoles } from '../../../enums/role';
import { NavLink } from 'react-router-dom';

export const LatestEvents = () => {
  const roles = useSelector((state) => state.auth.user.roles);
  return (
    <>
      <div className="text-white m-2 my-5 flex flex-wrap items-center justify-between pr-4">
        <div className="my-2">
          <button
            className="bg-[#E0D026] text-black px-4 text-[12px] rounded-full"
            style={{ lineHeight: '22.52px', fontWeight: 400 }}
          >
            Primary
          </button>

          <h1
            className="my-2 flex flex-start 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg text-lg text-white font-bold"
            style={{ fontFamily: 'Inter', fontSize: '26px', fontWeight: 500 }}
          >
            Latest added events
          </h1>
        </div>
        {roles.includes(UserRoles.admin) && (
          <div className="flex text-white bg-[#E0D026] rounded-3xl flex items-center justify-center">
             <NavLink
              to="/admin/create-new-event">
            <button className="flex items-center justify-center p-2">
              <IoMdAdd size={22} className="text-black" />
              <span className="text[16px] text-black px-1" style={{ lineHeight: '19.36px', fontWeight: 500 }}>
                New event
              </span>
            </button>
            </NavLink>
          </div>
        )}
      </div>
      <div className="m-2">
        <SwiperEvents />
      </div>
    </>
  );
};
