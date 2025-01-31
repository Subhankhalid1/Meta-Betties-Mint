import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ViewProfileDropDown } from '../components/profile/viewProfileDropdown/viewProfileDropDown';
import notificationIcon from '../assets/notificationIcon.svg';
import searchIcon from '../assets/searchIcon.svg';
import starIcon from '../assets/starIcon.svg';
import { useSelector } from 'react-redux';
import { UserRoles } from '../enums/role';
const Navbar = () => {
  const [togglePopUp, setTogglePopUp] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const getRouteName = (pathname) => {
    const routeMap = {
      '/': 'Marketplace',
      '/events': 'Upcoming Events',
      '/assets': 'Collections',
      '/news': 'My News',
      '/profile': 'Act2Earn Dashboard',
      '/action-center': 'Action Center',
      '/events/detail/': 'Events / Detail',
      '/admin/create-new-event': 'Events / Create-new-event',
      '/edit/profile':'Edit Profile'
    };
    return routeMap[pathname] || 'Marketplace';
  };

  const handleTogglePopUp = () => {
    setTogglePopUp(!togglePopUp);
  };

  const handleClosePopUp = () => {
    setTogglePopUp(!togglePopUp);
  };
  return (
    <nav className=" text-white mb-10">
      <div className=" mx-auto w-full pr-5">
        <div className="flex justify-between py-5 items-center">
          <div className="flex space-x-3">
            <div>
              <a className="flex items-center 2xl:px-2  text-gray-300 hover:text-gray-400">
                <span className=" 2xl:text-3xl xl:text-lg lg:text-lg text-gray-400">
                  {user?.roles && user?.roles?.includes(UserRoles.admin) ? 'Admin' : 'User'}{' '}
                  <span className="text-white">/ {getRouteName(location.pathname)}</span>
                </span>
              </a>
              <p
                className="2xl:px-3 mt-1"
                style={{
                  color: '#909093',
                  fontFamily: 'Inter',
                  fontWeight: 300,
                  fontSize: '0.9rem',
                  lineHeight: '14.52px',
                }}
              >
                Updated on 25 March 2024
              </p>
            </div>
          </div>
          <div className="hidden md:flex gap-2 items-center space-x-">
            <div className="flex items-center bg-gray-800 rounded-full overflow-hidden p-1">
              <div className="text-white bg-gray-900 p-3 rounded-3xl flex items-center justify-center cursor-pointer">
                <img src={searchIcon} size={22} className="rounded-full" />
              </div>
              <input
                type="text"
                placeholder="Search events here..."
                className="bg-transparent p-2 text-[#909093] outline-none w-full text-[12px]"
                style={{ fontStyle: 'italic', fontWeight: 300, lineHeight: '14.52px' }}
              />
            </div>
            <div className="flex items-center pr-3 p-1 bg-gray-800  overflow-hidden rounded-full">
              <div className="text-[#E0D026] bg-gray-900 p-3 rounded-3xl flex items-center justify-center">
                <img src={starIcon} size={21} className="rounded-full" />
              </div>
              <p
                className="text-[12px] p-2 text-[#909093]"
                style={{ fontStyle: 'italic', fontWeight: 300, lineHeight: '14.52px' }}
              >
                Current XP's
              </p>
              <p
                className="text-[12px] text-[#FFFFFF]"
                style={{ fontStyle: 'italic', fontWeight: 700, lineHeight: '14.52px' }}
              >
                300
              </p>
            </div>
            <div className="text-white bg-gray-900 p-3 rounded-full flex items-center justify-center">
              <img src={notificationIcon} className="h-6 w-6 cursor-pointer" />
            </div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgUa1qJoOIVP3tc9e22eWrxDSb2SwIQBUPA&s"
              alt="Profile"
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={handleTogglePopUp}
            />
            {/* <button class="bg-blue-600 rounded-full hover:bg-gray-700 2xl:px-5 xl:px-3 lg:px-2 h-12 text-white font-semibold">
              <div class="flex gap-3 justify-center items-center">
                <span>
                  {' '}
                  <p className="text-[14px]" style={{ fontWeight: 700 }}>
                    Connect Wallet
                  </p>
                </span>
              </div>
            </button> */}
            {togglePopUp ? <ViewProfileDropDown onClose={handleClosePopUp} /> : ''}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
