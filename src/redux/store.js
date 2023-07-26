import { combineReducers, configureStore } from '@reduxjs/toolkit';
import changeThemeReducer from './theme/changeThemeSlice';
import stockDatasReducer from './stockDatas/stockDatasSlice';
import stockDetailsReducer from './stockDetails/stockDetailsSlice';

export const rootReducer = combineReducers({
  changeTheme: changeThemeReducer,
  stockDatas: stockDatasReducer,
  stockDetails: stockDetailsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
