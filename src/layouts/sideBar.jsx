import { IoReorderThree } from 'react-icons/io5';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import marketPlaceIcon from '../assets/marketPlaceIcon.svg';
import LogOut from '../assets/logout.svg';
import newsIcon from '../assets/newsIcon.svg';
import assetsIcon from '../assets/assetsIcon.svg';
import eventsIcon from '../assets/eventsIcon.svg';
import profileIcon from '../assets/profileIcon.svg';
import actionIcon from '../assets/actionCenter.svg';
import { logout } from '../store/auth/slice.js';
import { useDispatch } from 'react-redux';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const dispatch = useDispatch();
  return (
    <>
      <span className="absolute z-50 text-white text-4xl top-5 left-4 cursor-pointer lg:hidden" onClick={toggleSidebar}>
        <IoReorderThree className="px-2 bg-gray-900 rounded-md" />
      </span>
      <div className="min-h-screen flex">
        <div
          className={`fixed z-40  top-0 bottom-0 flex flex-col p-2 w-[320px] overflow-y-auto text-center bg-[#1E1D23] transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex-1">
            <div className="text-gray-100 text-xl">
              <div className="p-2.5 mt-1 flex items-center justify-center">
                <img src={logo} alt="Logo" className="w-[120px] h-[120px]" />
              </div>
              <div className="my-2"></div>
            </div>

            {/* Navigation Links */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer bg-white'
                  : 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer hover:bg-white hover:text-black text-white'
              }
            >
              <div className="flex items-center gap-5">
                {/* <SiWorkplace size={25} /> */}
                <img src={marketPlaceIcon} size={22} className="p-2 bg-[#1E1D23] rounded-full" />
                <span
                  className="2xl:text-[13px] xl:text-[13px]"
                  style={{ lineHeight: '15.3px', fontWeight: 500, fontFamily: 'Inter' }}
                >
                  Marketplace
                </span>
              </div>
            </NavLink>

            <NavLink
              to="/assets"
              className={({ isActive }) =>
                isActive
                  ? 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer bg-white'
                  : 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer hover:bg-white hover:text-black text-white'
              }
            >
              <div className="flex items-center gap-5">
                {/* <HiCube size={25} /> */}
                <img src={assetsIcon} size={22} className="p-2 bg-[#1E1D23] rounded-full" />
                <span
                  className="2xl:text-[13px] xl:text-[13px]"
                  style={{ lineHeight: '15.73px', fontWeight: 500, fontFamily: 'Inter' }}
                >
                  Collections
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/action-center"
              className={({ isActive }) =>
                isActive
                  ? 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer bg-white'
                  : 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer hover:bg-white hover:text-black text-white'
              }
            >
              <div className="flex items-center gap-5">
                {/* <IoEye size={25} /> */}
                <img src={actionIcon} size={22} className="p-2 bg-[#1E1D23] rounded-full" />
                <span
                  className="2xl:text-[13px] xl:text-[13px]"
                  style={{ lineHeight: '15.73px', fontWeight: 500, fontFamily: 'Inter' }}
                >
                  Action Center
                </span>
              </div>
            </NavLink>

            {/* <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive
                  ? 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer bg-white'
                  : 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer hover:bg-white hover:text-black text-white'
              }
            >
              <div className="flex items-center gap-5">
                <img src={newsIcon} size={22} className="p-2 bg-[#1E1D23] rounded-full" />
                <span
                  className="2xl:text-[13px] xl:text-[13px]"
                  style={{ lineHeight: '15.73px', fontWeight: 500, fontFamily: 'Inter' }}
                >
                  My News
                </span>
              </div>
            </NavLink> */}

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer bg-white'
                  : 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer hover:bg-white hover:text-black text-white'
              }
            >
              <div className="flex items-center gap-5">
                <img src={profileIcon} size={22} className="p-2 bg-[#1E1D23] rounded-full" />
                <span
                  className="2xl:text-[13px] xl:text-[13px]"
                  style={{ lineHeight: '15.73px', fontWeight: 500, fontFamily: 'Inter' }}
                >
                  Act2Earn Dashboard
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive
                  ? 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer bg-white'
                  : 'p-2.5 mt-3 flex items-center gap-5 rounded-full px-10 cursor-pointer hover:bg-white hover:text-black text-white'
              }
            >
              <div className="flex items-center gap-5">
                <img src={eventsIcon} size={22} className="p-2 bg-[#1E1D23] rounded-full" />
                <span
                  className="2xl:text-[13px] xl:text-[13px]"
                  style={{ lineHeight: '15.73px', fontWeight: 500, fontFamily: 'Inter' }}
                >
                  Upcoming Events
                </span>
              </div>
            </NavLink>
          </div>

          {/* Logout Button */}
          <div
            className="px-10 py-3 flex items-center gap-4 rounded-md cursor-pointer text-white "
            onClick={() => dispatch(logout())}
          >
            <img src={LogOut} size={22} />
            <span
              className="2xl:text-[13px] xl:text-[13px]"
              style={{ lineHeight: '15.73px', fontWeight: 500, fontFamily: 'Inter' }}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
