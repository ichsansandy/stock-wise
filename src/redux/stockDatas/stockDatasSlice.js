import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiPriceChangeURL, stockData } from '../../assets/stockData';

export const fetchStockPriceChange = createAsyncThunk('stockDatas/fetchPriceChange', () => axios.get(apiPriceChangeURL).then((res) => res.data));

const initialState = {
  status: 'idle',
  stockData,
  error: '',
};

export const stockDatasSlice = createSlice({
  name: 'stockDatas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockPriceChange.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchStockPriceChange.fulfilled, (state, action) => {
        state.status = 'completed';
        state.stockData.forEach((item, index) => {
          item.oneDay = parseFloat(action.payload[index]['1D']).toFixed(2);
          item.ytd = parseFloat(action.payload[index].ytd).toFixed(2);
        });
      })
      .addCase(fetchStockPriceChange.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export default stockDatasSlice.reducer;
