import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getData = createAsyncThunk('api/getData', async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products?limit=10');
    return response.data.products;
  } catch (error) {
    console.log('An error occurred', error);
    throw error;
  } finally {
    console.log('request completed.');
  }
});

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const MarketPlaceSlice = createSlice({
  name: 'marketPlace',
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default MarketPlaceSlice.reducer;
