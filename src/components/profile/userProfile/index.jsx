import React from 'react';
import { MyProfile } from './myProfile/myProfile';
import PurchaseList from './purchaseList/index.jsx';
import { Stats } from './stats/stats.jsx';
import { ProgressBar } from './progressBar/progressBar.jsx';
const Index = () => {
  return (
    <div className="2xl:pr-7 xl:pr-7 lg:pr-7 md:pr-3 sm:pr-2 pr-2 ">
      {/* Call here others components */}
      {/* <MyProfile /> */}
      <ProgressBar/>
      <Stats/>
      <PurchaseList />
    </div>
  );
};

export default Index;
