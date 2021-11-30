import { createSlice } from "@reduxjs/toolkit";

export const data = createSlice({
  name: "data",
  initialState: {
    Business: "",
    Industry: "",
    Location: "",
    Sales: "",
    Payroll: "",
    Employees: "",
    Name: "",
    Email: "",
    value: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = data.actions;

export default data.reducer;
