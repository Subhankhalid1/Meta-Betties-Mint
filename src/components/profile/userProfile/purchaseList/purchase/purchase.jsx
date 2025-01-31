import React from 'react';
import { PiWarningCircleBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { BsThreeDotsVertical } from 'react-icons/bs';

export const PurchaseTable = () => {
  const tableDataRows = [1, 2, 3, 4]

  return (<>
    <div className="grid grid-cols-12 gap-5 my-10">
      <div className='lg:col-span-5 md:col-span-12 col-span-12 h-auto px-6 py-3 bg-[#101111] rounded-2xl'>
        <p  className='text-white m-2 text-[18]' style={{lineHeight:'21.76px', fontWeight:700}}>LeaderBoard</p>
      </div>

      <div className='lg:col-span-7 md:col-span-12 col-span-12 h-auto px-1 py-3 bg-[#101111] rounded-2xl'>
      <p className='text-white m-2 text-[18]' style={{lineHeight:'21.76px', fontWeight:700}}>My Activity</p>
        <div className="overflow-x-auto">
          <table className="min-w-full  ">
            <thead>
              <tr className='bg-gray-900'>
                <th scope="col" className="px-1 py-3 text-left text-[12px] text-white tracking-wider" style={{ fontWeight: 500, lineHeight: '18px' }}>
                  #
                </th>
                <th scope="col" className="px-1 py-3 text-left text-[12px] text-white tracking-wider" style={{ fontWeight: 500, lineHeight: '18px' }}>
                  Name
                </th>
                <th scope="col" className="px-1 py-3 text-left text-[12px] text-white tracking-wider" style={{ fontWeight: 500, lineHeight: '18px' }}>
                  Art
                </th>
                <th scope="col" className="px-1 py-4 flex items-center gap-x-1 text-left text-[12px] text-white tracking-wider" style={{ fontWeight: 500, lineHeight: '18px' }}>
                  Social Cause <PiWarningCircleBold />
                </th>
                {/* <th scope="col" className="px-6 py-3 text-left text-[12px] text-white tracking-wider" style={{ fontWeight: 500, lineHeight: '18px' }}>
                  Points Earned
                </th> */}
                <th scope="col" className="px-1 py-3 text-left text-[12px] text-white tracking-wider" style={{ fontWeight: 500, lineHeight: '18px' }}>
                  Date/Timestramps
                </th>

                {/* <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider" style={{fontWeight:500, lineHeight:'18px'}}>
                Last 7 days
              </th> */}
              <th scope="col" className="px-1 py-3 text-left text-[12px] text-white tracking-wider" style={{fontWeight:500, lineHeight:'18px'}}>
                Actions
              </th>
              </tr>
            </thead>
            <tbody >







              {
                tableDataRows.map((i, ind) => (
                  <tr key={i.key} className='border-b border-b-gray-600'>
                    <td className="px-1 flex items-center gap-2 py-6 whitespace-nowrap text-sm text-gray-500">
                      {/* <FaStar className='text-[#E0D026]' /> */}
                      <span className='text-[12px]' style={{ fontWeight: 500, lineHeight: '18px' }}>{ind}</span>
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap">
                      <p className='text-[14.8px] text-white' style={{ fontWeight: 400, lineHeight: '20.36px' }}>Token <span className='text-[12px] text-[#A1A1A1]' style={{ fontWeight: 400, lineHeight: '14.52px' }}>USDT</span></p>
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap">
                      <p className='text-[14.8px] text-white' style={{ fontWeight: 400, lineHeight: '20.36px' }}>Art</p>

                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <p className='text-white text-[14.8px]' style={{ fontWeight: 400, lineHeight: '20.36px' }}>Climate Change</p>
                    </td> */}
                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                      <p className='text-white text-[14.8px]' style={{ fontWeight: 400, lineHeight: '20.36px' }}>3,118</p>
                    </td>
                    <td className="px-1 py-4 whitespace-nowrap text-sm text-gray-500">
                      <p className='text-[14.8px] text-white' style={{ fontWeight: 400, lineHeight: '20.36px' }}>2/11/2024-9:33am</p>
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    jane.cooper@example.com
                  </td> */}
                  <td className="px-1 py-4 whitespace-nowrap text-sm font-medium">
                    {/* <button className="text-white text-2xl border p-2 rounded-full"><IoReorderThreeOutline /></button> */}
                    <button className="ml-2 text-white text-[14.8px] border p-2 rounded-full"><BsThreeDotsVertical /></button>
                  </td>
                  </tr>
                ))
              }



            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>)
}