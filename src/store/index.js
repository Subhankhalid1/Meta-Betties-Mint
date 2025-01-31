import { configureStore } from '@reduxjs/toolkit';
import MarketPlaceSlice from './marketPlace';
import authSlice from './auth/slice';

export const Store = configureStore({
  reducer: {
    auth: authSlice,
    marketPlace: MarketPlaceSlice,
  },
});
