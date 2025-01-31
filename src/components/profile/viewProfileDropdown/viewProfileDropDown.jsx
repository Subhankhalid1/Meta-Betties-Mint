import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PiCodesandboxLogoThin } from 'react-icons/pi';
import SettingProfileIcon from '../../../assets/settingProfileIcon.svg';
import AssetProfileIcon from '../../../assets/myAssetIcon.svg';
import ExploreProfileIcon from '../../../assets/exploreProfileIcon.svg';
import EditProfileIcon from '../../../assets/editProfileIcon.svg';

export const ViewProfileDropDown = ({ onClose }) => {
  const popUpRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, popUpRef]);
  return (
    <>
      <div
        ref={popUpRef}
        className=" w-96 rounded-2xl px-3 py-5  absolute right-6 z-50 lg:top-20 md:top-32  bg-[#272727]"
      >
        <div className="flex items-center flex-wrap gap-5">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgUa1qJoOIVP3tc9e22eWrxDSb2SwIQBUPA&s"
            alt="Profile"
            className="h-10 w-10 rounded-full"
          />
          <div>
            <p className="text-[12px]" style={{ fontWeight: 400, lineHeight: '16px' }}>
              Ox6c4f....Dd12
            </p>
            <button className="text-[#E0D026] text-[14px]" style={{ fontWeight: 600, lineHeight: '24px' }}>
              View Profile
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-5 rounded-2xl mt-5">
          <div className="flex justify-between text-[14px]">
            <p className="flex items-center gap-2 text-[14px]" style={{ fontWeight: 600, lineHeight: '24px' }}>
              {' '}
              <span className="text-[#E0D026]">
                <PiCodesandboxLogoThin size={20} />
              </span>
              <span className='text-[14px]'  style={{ fontWeight: 600, lineHeight: '24px' }}>BUSD</span>
            </p>
            <p className="text-[14px]" style={{ fontWeight: 600, lineHeight: '24px' }}>
              10,2 BUSD
            </p>
          </div>
          <p className="text-center my-3 text-[14px] text-[#E0D026]" style={{ fontWeight: 700, lineHeight: '24px' }}>
            Add funds with card
          </p>
        </div>

        <div className="my-5">
          <NavLink
            to="/"
            className="p-2.5 mt-3 flex items-center cursor-pointer"
          >
            <div className="flex items-center gap-5">
              <img src={ExploreProfileIcon} size={20} />
              <span className="text-[14px]" style={{ fontWeight: 400, lineHeight: '24px' }}>
                Explore marketplace
              </span>
            </div>
          </NavLink>

          <NavLink to="" className="p-2.5 mt-3 flex items-center cursor-pointer">
            <div className="flex items-center gap-5">
              <img src={AssetProfileIcon} size={20} />
              <span className="text-[14px]" style={{ fontWeight: 400, lineHeight: '24px' }}>
                My assets
              </span>
            </div>
          </NavLink>

          <NavLink to="/edit/profile" className="p-2.5 mt-3 flex items-center cursor-pointer">
            <div className="flex items-center gap-5">
              <img src={EditProfileIcon} size={20} />
              <span className="text-[14px]" style={{ fontWeight: 400, lineHeight: '24px' }}>
                Edit profile
              </span>
            </div>
          </NavLink>

          <NavLink to="" className="p-2.5 mt-3 flex items-center cursor-pointer">
            <div className="flex items-center gap-5">
              <img src={SettingProfileIcon} size={20} />
              <span className="text-[14px]" style={{ fontWeight: 400, lineHeight: '24px' }}>
                Settings
              </span>
            </div>
          </NavLink>
        </div>

        <div className="flex justify-center">
          <button className="text-[#E0D026] text-[14px]" style={{ fontWeight: 700, lineHeight: '24px' }}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
