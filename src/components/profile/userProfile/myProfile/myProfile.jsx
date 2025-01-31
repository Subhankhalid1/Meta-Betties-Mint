import React from 'react';
import { CiGlobe } from 'react-icons/ci';
import { RiDiscordLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
import { FaRegStar } from 'react-icons/fa';
import { CiShare2 } from 'react-icons/ci';
import { BsThreeDots } from 'react-icons/bs';
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { FaRegCopy } from "react-icons/fa6";
import EditButton from "../../../../assets/editBtn.svg"

import './profile.css';

export const MyProfile= () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 relative  text-white h-[420px]">
        <img
          src="https://s3-alpha-sig.figma.com/img/4c6c/1db7/c9b9df590bb3f02047cb64b1f59caa5b?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lQt79oxPWs2AAkpGbX9OpgS447Ce9XEKKw8zhJsMt5rR7OMftqwUOVW8F2QYMKPFa3Z~1aIrO92cDgqKtBg-5pw0INpZ0NNR163aVLFOl-E9myMchXDtrbrZxRSj8W7LuExMiUQWd2b31Ymaubkizltw-Dag4FuSm5y19PNXqSYtqExQd6PiDJC2MgdLM~IjucmTaqcB2IIC5J3gdIIA2OpgPA9ttm9WvCCr2IzVHwdCGZKZTpC3a7B2gc3yq4mucrl78NgSWGaSrclagczEcsdkoOtKFDDXO-xtV6JOjYsio-x8NKaOxwNXqQk9QZZ7-TPaWLoI5OhMgLrpfQzSgQ__"
          className="coverImg"
          alt=""
        />

        <div className="icons-container absolute right-0 top-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg p-2 rounded-lg m-3 flex items-center 2xl:gap-7 xl:gap-7 lg:gap-7 md:gap-7 sm:gap-7 gap-3">
          <CiGlobe size={20} className="icon" />
          <CiGlobe size={20} className="icon" />
          <RiDiscordLine size={20} className="icon" />
          <FiTwitter size={20} className="icon" />
          <div className="h-7 bg-gray-400 w-0.5"></div>
          <p className="flex items-center gap-2 text-[12px]">
            <FaRegStar size={20} className="icon" />
            200
          </p>
          <CiShare2 size={20} className="icon" />
          <BsThreeDots size={20} className="icon" />
        </div>

        <div className="absolute top-36 p-2 mx-5 right-0">
           <img src={EditButton} className="text-[32.84PX] text-[#EODO26]" />
          {/* <p className="text-[32.84PX] text-[#EODO26]">
            <LiaEditSolid />
          </p> */}
        </div>

        <div className="flex flex-col items-center absolute container top-32">
          <img
            src="https://t4.ftcdn.net/jpg/01/29/34/79/360_F_129347996_d1CeDLSudnZOfwaN9b5krgPpk8Qh6dFZ.jpg"
            alt=""
             className="w-24 h-24 rounded-2xl border border-3xl"
          />
          <p className="text-[19px] my-3" style={{fontWeight:500, lineHeight:'30.9px'}}>Qasim Rai</p>
          <p className="text-[13px] whitespace-normal text-[#A1A1A1] text-center sm:w-full md:w-full lg:w-[566px]" style={{lineHeight:'19.9px',}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <div className="flex justify-center gap-3 my-5">
            <button className="flex justify-between rounded-lg text-[9.54px] cursor-pointer border px-5 py-2 border-[#E0D026]">
             <span className='text-[9.54px] ox-2 ' style={{lineHeight:'14.6px'}}>
             02ac7..D0a3
             </span>
             <span className='px-2'>
             <FaRegCopy  size={14}/>
             </span>
            </button>

            <button className="font-semibold rounded-lg text-lg cursor-pointer border px-5 py-2 border-yellow-500">
              <span>
                <FaRegShareFromSquare size={14}/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


