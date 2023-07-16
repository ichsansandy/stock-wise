import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'magenta-madness',
};

export const changeThemeSlice = createSlice({
  name: 'changeTheme',
  initialState,
  reducers: {
    changeTheme: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { changeTheme } = changeThemeSlice.actions;

export default changeThemeSlice.reducer;
