
import { createSlice } from '@reduxjs/toolkit';

interface DarkModeState {
  isActive: boolean;
}

const initialState: DarkModeState = {
  isActive: false,
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
