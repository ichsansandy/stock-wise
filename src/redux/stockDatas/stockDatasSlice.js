import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { stockData } from '../../assets/stockData';
import { apiPriceChangeURL } from '../../assets/api';

export const fetchStockPriceChange = createAsyncThunk('stockDatas/fetchPriceChange', () => axios.get(apiPriceChangeURL).then((res) => res.data));

stockData.forEach((item) => {
  item.oneDay = '';
  item.ytd = '';
});

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
      .addCase(fetchStockPriceChange.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export const selectStockDatas = (state) => state.stockDatas;

export default stockDatasSlice.reducer;
