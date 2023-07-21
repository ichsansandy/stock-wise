import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { convertUnixTimestampToDate } from '../../utils/dateUtils';

export const fetchPriceDetailsChange = createAsyncThunk('stockDetails/fetchPrice', (url) => axios.get(url).then((res) => res.data));

const initialState = {
  status: 'idle',
  error: '',
  priceDaily: [],
  priceWeekly: [],
  incomeStatement: [],
  balanceSheet: [],
  cashFlow: [],
};

export const stockDetailsSlice = createSlice({
  name: 'stockDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPriceDetailsChange.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchPriceDetailsChange.fulfilled, (state, action) => {
        state.status = 'completed';
        const data = action.payload.c.map((item, index) => ({
          Price: item.toFixed(0),
          Time: convertUnixTimestampToDate(action.payload.t[index]),
        }));
        state.priceDaily = data;
      })
      .addCase(fetchPriceDetailsChange.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default stockDetailsSlice.reducer;
