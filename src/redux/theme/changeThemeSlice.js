import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'royal-blue',
  color: '#4369b2',
};

export const changeThemeSlice = createSlice({
  name: 'changeTheme',
  initialState,
  reducers: {
    changeTheme: (state, actions) => {
      state.value = actions.payload.value;
      state.color = actions.payload.color;
    },
  },
});

export const { changeTheme } = changeThemeSlice.actions;

export const selectTheme = (state) => state.changeTheme.value;
export const selectColorTheme = (state) => state.changeTheme.color;

export default changeThemeSlice.reducer;
