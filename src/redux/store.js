import { configureStore } from '@reduxjs/toolkit';
import changeThemeReducer from './theme/changeThemeSlice';
import stockDatasReducer from './stockDatas/stockDatasSlice';

const store = configureStore({
  reducer: {
    changeTheme: changeThemeReducer,
    stockDatas: stockDatasReducer,
  },
});

export default store;
