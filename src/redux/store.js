import { configureStore } from '@reduxjs/toolkit';
import changeThemeReducer from './theme/changeThemeSlice';

const store = configureStore({
  reducer: {
    changeTheme: changeThemeReducer,
  },
});

export default store;
