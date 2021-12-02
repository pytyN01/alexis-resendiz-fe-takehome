import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
  name: "counter",
  initialState: {
    ActiveStep: 0,
  },
  reducers: {
    increment: (state) => {
      state.ActiveStep += 1;
    },
    decrement: (state) => {
      state.ActiveStep -= 1;
    },
    counterReset: (state) => {
      state.ActiveStep = 0;
    },
  },
});

export const { increment, decrement, counterReset } = counter.actions;

export default counter.reducer;
