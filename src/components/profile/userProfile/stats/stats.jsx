import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { TotalPointChart } from './totalPointChart';
import { MyCausesChart } from './myCausesChart';

export const Stats = () => {
 
 
  const data = [
    { name: 'A1', value: 180 },
    { name: 'A2', value: 40 },
    { name: 'B1', value: 70 },
    { name: 'B2', value: 40 },
    { name: 'B3', value: 130 },
  ];

 
  const COLORS2 = ['#40AFBF', '#663DB8', '#f47e10', '#57C17B','#9E3533'];

  return (
    <div className="bg-[#101111] my-10 rounded-xl">
      <div className="container mx-auto my-5 " style={{ boxShadow: `0 0 10px #101111` }}>
        <div className=" grid gap-8 2xl:grid-cols-12 md:grid-cols-1 lg:grid-cols-12 grid-cols-1">
          <div className=" 2xl:col-span-6 xl:col-span-6 lg:col-span-5 md:col-span-8 col-span-12  items-center text-white p-2 m-2">
           <TotalPointChart/>
          </div>

          <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-8 col-span-12 p-2 m-2">
            <MyCausesChart/>
            
          </div>
        </div>
      </div>
    </div>
  );
};
