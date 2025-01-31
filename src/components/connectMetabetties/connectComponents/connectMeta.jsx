import React from 'react';
import { CreateAccount } from './createAccount';
import { Slider } from './slider';

export const ConnectMeta = () => {
  return (
    <>
      <div className="container items-center justify-center ms-auto ">
        <div className="grid lg:grid-cols-12 md:grid-cols-1 grid-cols-1 gap-10 items-center  lg:pr-10">
          <div className="lg:col-span-6 md:col-span-12 col-span-10 text-white flex flex-col items-center">
            <CreateAccount />
          </div>

          <div className="lg:col-span-6 md:col-span-12 col-span-10 rounded-full ">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
};
