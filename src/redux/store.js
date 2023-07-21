import { configureStore } from '@reduxjs/toolkit';
import changeThemeReducer from './theme/changeThemeSlice';
import stockDatasReducer from './stockDatas/stockDatasSlice';
import stockDetailsReducer from './stockDetails/stockDetailsSlice';

const store = configureStore({
  reducer: {
    changeTheme: changeThemeReducer,
    stockDatas: stockDatasReducer,
    stockDetails: stockDetailsReducer,
  },
});

export default store;
