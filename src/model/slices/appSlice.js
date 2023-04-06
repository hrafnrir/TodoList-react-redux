import { createSlice } from "@reduxjs/toolkit";

const darkTheme = JSON.parse(localStorage.getItem("darkTheme")) || false;
const initialState = {
  darkTheme: darkTheme,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = appSlice.actions;

export default appSlice.reducer;
