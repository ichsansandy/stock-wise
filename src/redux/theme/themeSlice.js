import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [
    {
      classNames: 'magenta-madness',
      title: 'Magenta Madness',
    },
    {
      classNames: 'royal-blue',
      title: 'Royal Blue',
    },
  ],
  selected: 'magenta-madness',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
