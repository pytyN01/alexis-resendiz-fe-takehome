import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    Business: "",
    Industry: "",
    Location: "",
    Sales: "",
    Payroll: "",
    Employees: "",
    Name: "",
    Email: "",
  },
  reducers: {
    updateBusiness: (state, action) => {
      state.Business += action.payload;
    },
    updateIndustry: (state, action) => {
      state.Industry += action.payload;
    },
    updateLocation: (state, action) => {
      state.Location += action.payload;
    },
    updateSales: (state, action) => {
      state.Sales += action.payload;
    },
    updatePayroll: (state, action) => {
      state.Payroll += action.payload;
    },
    updateEmployees: (state, action) => {
      state.Employees += action.payload;
    },
    updateName: (state, action) => {
      state.Name += action.payload;
    },
    updateEmail: (state, action) => {
      state.Email += action.payload;
    },
    dataReset: (state) => {
      state.Business = "";
      state.Industry = "";
      state.Location = "";
      state.Sales = "";
      state.Payroll = "";
      state.Employees = "";
      state.Name = "";
      state.Email = "";
    },
  },
});

export const {
  updateBusiness,
  updateIndustry,
  updateLocation,
  updateSales,
  updatePayroll,
  updateEmployees,
  updateName,
  updateEmail,
  dataReset,
} = user.actions;

export default user.reducer;
